import React, {useEffect, useState} from 'react';
import { makeStyles } from "@material-ui/core/styles"

import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom";

import {
    Drawer, List, ListItem,
    ListItemIcon, ListItemText,
    Container, Typography,
} from "@material-ui/core";

import InfoIcon from '@material-ui/icons/Info';

import NavBar from "../HomePage/NavBar/NavBar";

import { useHistory } from "react-router";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit', paddingTop:"5%", marginTop:"4%", backgroundColor: "rgba(0, 0, 0, 0.15)" },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}));


function RiderNavigation(){
    const history = useHistory();
    const classes = useStyles();

    const [userType, setUserType] = useState('');

    useEffect(()=>{
        const getusertype = async () => {
            const access_token = localStorage.getItem('token')
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                }
            }
            axios.get('http://localhost:8070/user/post', config).then((response) => {
                if (response.data.message) {
                    alert(response.data.message)
                } else {
                    setUserType(response.data.user.usertype)
                }
            })
                .catch()
        };
        getusertype();
    });

    const navigateOrdersRequests=()=>{
        history.push("/requests")
    }

  const navigateMy=()=>{
        history.push("/rider-items")
    }




    return (

        <Router>
            <NavBar getUserType={userType}/>
            <div style={{ display: 'flex' }}>
                <Drawer
                    style={{ width: '240px' }}
                    variant="persistent"
                    anchor="left"
                    open={true}
                    classes={{ paper: classes.drawerPaper }}
                >
                    <List>
                        <Link to="/requests" className={classes.link}>
                            <ListItem button onClick={()=>navigateOrdersRequests()}>
                                <ListItemIcon>
                                    <InfoIcon style={{color:"white"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"Orders Requests"} style={{color:"white"}} />
                            </ListItem>
                        </Link>
                    </List>

                    <Link to="/rider-items" className={classes.link}>
                        <ListItem button onClick={()=>navigateMy()}>
                            <ListItemIcon>
                                <HomeIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <ListItemText primary={"My Delivered Orders"} style={{color:"white"}} />
                        </ListItem>
                    </Link>
                </Drawer>



            </div>
        </Router>
    );
}

export default RiderNavigation


