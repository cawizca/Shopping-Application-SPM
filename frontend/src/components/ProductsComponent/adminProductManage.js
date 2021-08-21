import React,{useState,useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid,TextField, Button} from '@material-ui/core';

import EventPosts from '../ProductsComponent/products/AdminAllProducts';
import EventForm from '../ProductsComponent/products/form/productManageForm';
import Styles from './styles';
import {useDispatch} from 'react-redux';
import {getProduct} from '../../actions/productAction'
import AdminNavbar from "../Admin/AdminNavigation"


const ManageProducts =() =>{

       
        const [currentId,setCurrentId] = useState(null);
        const classes = Styles();
        const dispatch =useDispatch();
        useEffect(()=>{
            
            dispatch(getProduct());  
            

        },[currentId,dispatch]);

    return (

        <div>
       <AdminNavbar /> 
            <Container maxwidth ='lg'>
                

                <AppBar className ={classes.appBar} position ="static" color ='inherit'>
                <Typography className={classes.heading} variant ="h2" align = "center">  Manage Products</Typography>

                    
                </AppBar>

                <Grow in>

                    <Container>
                        <div className='row'> 
                            <div className = 'col-lg-6' style={{textAlign:'left'}} >

                            <Button style={{color:'green',background:'white',marginRight:"-10%",width:'fit-content'}}>
                                Insufficient products

                            </Button>

                            </div>

                    <div  className = 'col-lg-6' style={{textAlign:'right'}}>
                        <TextField   style={{color:'white',background:'white',width:'300px'}}
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    size = "small"

                />

                            </div>

                            </div>
                        
                        <Grid container justify ="space-between" alignItems="stretch" spacing ={3}  style={{marginTop:'13px'}} >

                            <Grid item xs ={12} sm ={7}>
                                

                                <EventPosts setCurrentId ={setCurrentId}   />     
                            </Grid >

                                <Grid item xs ={12} sm ={4}   style={{marginRight:'-30%'}} >
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