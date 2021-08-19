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
    drawerPaper: { width: 'inherit' },
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
                        <Link to="/ShoppingAll" className={classes.link} >
                            <ListItem button  onClick ={()=>navigateAllProduct()} href="/ShoppingAll" >
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={"All products"} />
                            </ListItem>
                        </Link>

                        <Link to="#" className={classes.link}>
                            <ListItem button >
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Groceries"} />
                            </ListItem>
                        </Link>

                        <Link to="#" className={classes.link}>
                            <ListItem button >
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Vegitables"} />
                            </ListItem>
                        </Link>

                        <Link to="#" className={classes.link}>
                            <ListItem button >
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Meat"} />
                            </ListItem>
                        </Link>


                        <Link to="#" className={classes.link}>
                            <ListItem button >
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={"SeaFood"} />
                            </ListItem>
                        </Link> 
                        
                         <Link to="#" className={classes.link}>
                            <ListItem button >
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Detergents"} />
                            </ListItem>
                        </Link>



                    </List>
                </Drawer>



            </div>
        </Router>
    );
}

export default ProductNavigation