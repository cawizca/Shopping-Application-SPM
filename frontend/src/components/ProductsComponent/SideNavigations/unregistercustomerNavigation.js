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




function ProductNavigation(){
    const history = useHistory();
    const classes = useStyles();

   const navigateAllProduct=()=>{
        history.push("/ShoppingAll")
    }
    
    
    //onClick ={()=>navigateAdminProductManage()}

    return (

        <div>

        

        <Router>
            <div style={{ display: 'flex' }}>
                <Drawer
                    style={{ width: '240px' }}
                    variant="persistent"
                    anchor="left"
                    open={true}
                    classes={{ paper: classes.drawerPaper }}
                >
                    <List>
                        <Link to="/ShoppingAll" className={classes.link} >
                            <ListItem button  onClick ={()=>navigateAllProduct()} href="/ShoppingAll" >
                                <ListItemIcon>
                                    <HomeIcon style={{color:"white"}} />
                                </ListItemIcon>
                                <ListItemText primary={"All products"} style={{color:"white"}}/>
                            </ListItem>
                        </Link>

                        <Link to="#" className={classes.link}>
                            <ListItem button >
                                <ListItemIcon>
                                    <InfoIcon style={{color:"white"}} />
                                </ListItemIcon>
                                <ListItemText primary={"Groceries"} style={{color:"white"}} />
                            </ListItem>
                        </Link>

                        <Link to="#" className={classes.link}>
                            <ListItem button >
                                <ListItemIcon>
                                    <InfoIcon style={{color:"white"}} />
                                </ListItemIcon>
                                <ListItemText primary={"Vegitables"} style={{color:"white"}} />
                            </ListItem>
                        </Link>

                        <Link to="#" className={classes.link}>
                            <ListItem button >
                                <ListItemIcon>
                                    <InfoIcon style={{color:"white"}} />
                                </ListItemIcon>
                                <ListItemText primary={"Meat"} style={{color:"white"}} />
                            </ListItem>
                        </Link>


                        <Link to="#" className={classes.link}>
                            <ListItem button >
                                <ListItemIcon>
                                    <InfoIcon style={{color:"white"}} />
                                </ListItemIcon>
                                <ListItemText primary={"SeaFood"} style={{color:"white"}} />
                            </ListItem>
                        </Link> 
                        
                         <Link to="#" className={classes.link}>
                            <ListItem button >
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

export default ProductNavigation