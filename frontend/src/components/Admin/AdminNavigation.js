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

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import Rider from "./Rider/Rider";
import NavBar from "../HomePage/NavBar/NavBar";
import ManageOrder from "./Rider/ManageOrder";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit' },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}))



function AdminNavbar(){
    const history = useHistory();
    const classes = useStyles();

    const navigateRidermanagement=()=>{
        history.push("/rider")
    }

    const navigateOrdermanagement=()=>{
        history.push("/orders")
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
                        <Link to="/rider" className={classes.link}>
                            <ListItem button onClick={()=>navigateRidermanagement()}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Rider Management"} />
                            </ListItem>
                        </Link>
                        <Link to="/orders" className={classes.link}>
                            <ListItem button onClick={()=>navigateOrdermanagement()}>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Order Management"} />
                            </ListItem>
                        </Link>


                    </List>
                </Drawer>



            </div>
        </Router>
    );
}

export default AdminNavbar


