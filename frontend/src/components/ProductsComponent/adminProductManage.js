import React,{useState,useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';

import EventPosts from '../ProductsComponent/products/AdminAllProducts';
import EventForm from '../ProductsComponent/products/form/productManageForm';
import Styles from './styles';
import {useDispatch} from 'react-redux';
import {getProduct} from '../../actions/productAction'
import AdminNavbar from "../Admin/AdminNavigation"
import NavBar from "../HomePage/NavBar/NavBar";


const ManageProducts =() =>{

       
        const [currentId,setCurrentId] = useState(null);
        const classes = Styles();
        const dispatch =useDispatch();
        useEffect(()=>{
            
            dispatch(getProduct());  
            

        },[currentId,dispatch]);

    return (

        <div>
            <NavBar />
       <AdminNavbar /> 
            <Container maxwidth ='lg'>
                

                <AppBar className ={classes.appBar} position ="static" color ='inherit'>
                <Typography className={classes.heading} variant ="h2" align = "center">  Manage Products</Typography>

                    
                </AppBar>

                <Grow in>

                    <Container>
                        <Grid container justify ="space-between" alignItems="stretch" spacing ={3}>

                            <Grid item xs ={12} sm ={7}>
                                

                                <EventPosts setCurrentId ={setCurrentId}   />     
                            </Grid >

                                <Grid item xs ={12} sm ={4}   style={{marginRight:'-28%'}} >
                                    <EventForm  currentId={currentId}  />
                                </Grid>

                        </Grid>
                    </Container>

                </Grow>


            </Container>

           </div>
    );
}

export default ManageProducts;