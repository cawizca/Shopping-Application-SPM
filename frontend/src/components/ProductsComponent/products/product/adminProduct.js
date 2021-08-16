import React from 'react';
import Styles from './style'
import {Card,CardActions,CardContent,CardMedia,Button,Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import DeleteIcon from '@material-ui/icons/Delete'
import {useDispatch}  from 'react-redux';
import {deleteproduct} from '../../../../actions/productAction'

/*
product:"",
price:"",
category:"",
availableQty:"",
minimumQty:"",
mesuringUnit:"",
selectedfile:""*/


const ProductCard = ({post,setCurrentId})=>{
    const classes = Styles();
    const EventDispatch = useDispatch();
    return(
        <Card className={classes.card}>

            <CardMedia className={classes.media}  image ={post.selectedfile} title={post.product} />

            <div className={classes.overlay}>
                
                <Typography variant="h6">Product :{post.product}</Typography>
                <Typography variant="h6">Price :{post.price}</Typography>
                <Typography variant="h6">For 1{post.mesuringUnit}</Typography>
                


            </div>
            <div className={classes.overlay2}>
            
                <Button style={{color:'white'}} size='small' onClick={()=>setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize = "default" />


                </Button>

            </div>


            <CardContent>
            <Typography variant="h5" color="textPrimary">Category :{post.category}</Typography>
            <Typography variant="h5" color="textPrimary">Available Quantity :{post.availableQty}</Typography>
            <Typography variant="h5" color="textPrimary">Minimum Quantity :{post.minimumQty}</Typography>
            
            
            </CardContent>

            <CardActions className= {classes.cardActions}> 
                
                <Button size ="small" color="primary" onClick={()=>EventDispatch(deleteproduct(post._id),window.location.reload(false))} >
                <DeleteIcon fontSize = "default" />
                    
               

                    
                </Button>

                
            </CardActions>



        </Card>
    )
}

export default ProductCard;