import React from 'react';
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

const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit' },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}))



function RiderNavigation(){
    const history = useHistory();
    const classes = useStyles();

    const navigateOrdersRequests=()=>{
        history.push("/requests")
    }

  const navigateMy=()=>{
        history.push("/rider-items")
    }




    return (

        <Router>
            <NavBar />
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
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Orders Requests"} />
                            </ListItem>
                        </Link>
                    </List>

                    <Link to="/rider-items" className={classes.link}>
                        <ListItem button onClick={()=>navigateMy()}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"My Delivered Orders"} />
                        </ListItem>
                    </Link>
                </Drawer>



            </div>
        </Router>
    );
}

export default RiderNavigation


