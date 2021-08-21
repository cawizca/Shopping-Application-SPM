import React,{useState,useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid,TextField,Button} from '@material-ui/core';
import InsufficientProductTable from './productTables/insufficientTable'
import Styles from './styles';
import {useDispatch} from 'react-redux';
import NavBar from '../HomePage/NavBar/NavBar'
import AdminNavbar from "../Admin/AdminNavigation"
import ProductNavigation from './SideNavigations/customerNavigation'
import axios from "axios";


const Inssufficient =() =>{

    const classes = Styles();


    return (
        
        <div>
            <NavBar />



            <Container maxwidth ='lg' style={{zIndex:"-99"}}>
           
                <AdminNavbar style={{zIndex:"-99"}} />



                <AdminNavbar />

                    <AppBar className ={classes.appBar} position ="static" >
                        <Typography className={classes.heading} variant ="h2" align = "center"> Insufficient Products </Typography>
                    </AppBar>
                <Grow in>


                    <Container >
                        <div style={{marginLeft:"900px"}}>
                        <Button  style={{color:'green',background:'white',marginRight:"-10%",width:'300px'}}>

                                Download list

                            </Button>

                            </div>

                        <Grid container justify ="space-between" alignItems="stretch" spacing ={3} >

                                <Grid item xs ={12} sm ={7} style = {{width:"500px"}}>
                                    <InsufficientProductTable />
                                </Grid >
                        </Grid>
                    </Container>

                </Grow>


            </Container>
            </div>
            
           

            
           
    );
}

export default Inssufficient;