import React,{useState,useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid,TextField} from '@material-ui/core';

import EventPosts from './products/unregistercutomerProducts';

import Styles from './styles';
import {useDispatch} from 'react-redux';
import {getProduct} from '../../actions/productAction'
import NavBar from '../HomePage/NavBar/NavBar'
import ProductNavigation from './SideNavigations/unregistercustomerNavigation'
import axios from "axios";


const UnRegisterShoppingProducts =() =>{

       
        const [currentId,setCurrentId] = useState(null);
        const classes = Styles();
        const dispatch =useDispatch();
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
            
            dispatch(getProduct());  
            

        },[currentId,dispatch]);


    const [userType, setUserType] = useState('');


    return (
        
        <div>
            

            

            <Container maxwidth ='lg' style={{zIndex:"-99"}}>
           
                <ProductNavigation style={{zIndex:"-99"}} />



                <ProductNavigation />

                <div style={{marginLeft:'100px'}}>
                    <AppBar className ={classes.appBar} position ="static" >
                        <Typography className={classes.heading} variant ="h2" align = "center"> Buy Products Form Us</Typography>
                    </AppBar>
                <Grow in>


                    <Container >
                        <div style={{marginLeft:"900px"}}>
                        <TextField  style={{color:'white',background:'white',marginRight:"-10%",width:'200px'}}
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    size = "small"

                />

                            </div>

                        <Grid container justify ="space-between" alignItems="stretch" spacing ={3}>

                                <Grid item xs ={12} sm ={7} style = {{width:"fit-content"}}>
                                    <EventPosts setCurrentId ={setCurrentId}   />
                                </Grid >
                        </Grid>
                    </Container>

                </Grow>
        </div>

            </Container>
            </div>
            
           

            
           
    );
}

export default UnRegisterShoppingProducts;