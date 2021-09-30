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

import NavBar from '../../HomePage/NavBar/NavBar';

import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit' ,marginTop:"4%", paddingTop:"5%",  backgroundColor: "rgba(0, 0, 0, 0.15)",backdropFilter: "blur(30px) !important"},
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}))




function UnregisterProductNavigation(){
   
const history = useHistory();
const classes = useStyles();

const Allproduct=()=>{
    history.push("/unregisterAll")
}

const category=(catgoryName)=>{
    history.push("/uncategoryProduct",{
        catgoryName :catgoryName
    })
}






const navigateProductManage=()=>{
    history.push("/productManage")
}

return (

    <div style={{ zIndex:"-99" }}>
    <Router>

        <div >
            <Drawer
                style={{ width: '240px' }}
                variant="persistent"
                anchor="left"
                open={true}
                classes={{ paper: classes.drawerPaper }}
            >
                <List>
                    
                    <Link to="/unregisterAll" className={classes.link}>
                        <ListItem button onClick={()=>Allproduct()}>
                            <ListItemIcon>
                                <HomeIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <ListItemText style={{zIndex:"99"}} primary={"All products"} style={{color:"white"}} />
                        </ListItem>
                    </Link>
                    <Link to="/uncategoryProduct" className={classes.link}>
                        <ListItem button onClick={()=>category('Grocery')}>
                            <ListItemIcon>
                                <InfoIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <ListItemText primary={"Grocery"} style={{color:"white"}} />
                        </ListItem>
                    </Link>

                    <Link to="/uncategoryProduct" className={classes.link}>
                        <ListItem button onClick={()=>category('Vegetables')}>
                            <ListItemIcon>
                                <InfoIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <ListItemText primary={"Vegitable"} style={{color:"white"}} />
                        </ListItem>
                    </Link>
                    <Link to="/uncategoryProduct" className={classes.link}>
                        <ListItem button onClick={()=>category('Meat')}>
                            <ListItemIcon>
                            <InfoIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <ListItemText primary={"Meat"} style={{color:"white"}} />
                        </ListItem>
                    </Link>


                    <Link to="/uncategoryProduct" className={classes.link}>
                        <ListItem button onClick={()=>category('Seafood')}>
                            <ListItemIcon>
                            <InfoIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <ListItemText primary={"Sea food"} style={{color:"white"}} />
                        </ListItem>
                    </Link>

                    <Link to="/uncategoryProduct" className={classes.link}>
                        <ListItem button onClick={()=>category('Detergent')}>
                            <ListItemIcon>
                            <InfoIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <ListItemText primary={"Detergents"} style={{color:"white"}} />
                        </ListItem>
                    </Link>


                </List>

                
            </Drawer>



        </div>
    </Router>
    </div>
    );
}

export default UnregisterProductNavigation