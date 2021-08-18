import React,{useState,useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';

import EventPosts from '../ProductsComponent/products/customerAlllProducts';

import Styles from './styles';
import {useDispatch} from 'react-redux';
import {getProduct} from '../../actions/productAction'
import NavBar from '../HomePage/NavBar/NavBar'
import ProductNavigation from './SideNavigations/customerNavigation'


const ShoppingProducts =() =>{

       
        const [currentId,setCurrentId] = useState(null);
        const classes = Styles();
        const dispatch =useDispatch();
        useEffect(()=>{
            
            dispatch(getProduct());  
            

        },[currentId,dispatch]);

    return (
        
        <div>
              <ProductNavigation />

        
            <Container maxwidth ='lg'>
             
                
                
                <AppBar className ={classes.appBar} position ="static" color ='inherit'>
                <Typography className={classes.heading} variant ="h2" align = "center"> Buy Products Form Us</Typography>

                    
                </AppBar>

                <Grow in>

                    <Container>
                        <Grid container justify ="space-between" alignItems="stretch" spacing ={3}>

                            <Grid item xs ={12} sm ={7}>
                                </Grid>

                                <EventPosts setCurrentId ={setCurrentId}   />     

                        </Grid>
                    </Container>

                </Grow>


            </Container>
            
            </div>
           
    );
}

export default ShoppingProducts;