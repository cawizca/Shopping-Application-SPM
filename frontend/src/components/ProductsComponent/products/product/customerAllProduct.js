import React from 'react';
import Styles from './style'
import {Card,CardActions,CardContent,CardMedia,Button,Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import AddShoppingcartIcon from '@material-ui/icons/AddShoppingCart'
import {useDispatch}  from 'react-redux';
import {deleteproduct} from '../../../../actions/productAction'
import AddWhsihlist from '@material-ui/icons/FavoriteSharp'
import {createCart} from '../../../../actions/cartAction'

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
                
                <Typography variant="h5">Product :{post.product}</Typography>
                <Typography variant="h5">Price :{post.price}</Typography>
                <Typography variant="h5">For 1{post.mesuringUnit}</Typography>
                


            </div>
            <div className={classes.overlay2}>
            
                <Button style={{color:'Red'}} size='small'>
                    <AddWhsihlist fontSize = "default" />


                </Button>

            </div>


            <CardContent>
            <Typography variant="h6" color="textPrimary">Category :{post.category}</Typography>
            <Typography variant="h6" color="textPrimary">Available Quantity :{post.availableQty}</Typography>
            <Typography variant="h6" color="textPrimary">Minimum Quantity :{post.minimumQty}</Typography>

            <Typography variant="h6" style={{color:'green'}}>Status :{post.status}</Typography>
            
            
            </CardContent>

            <CardActions className= {classes.cardActions}> 
                
                <Button size ="small" style={{color:'white',background:'red'}}  
                
                onClick={() => {



                    const products = {
                        productID:post._id,
                        name :post.product,
                         price:post.price,
                         category:post.category,
                        status:post.status,
                        measuringUnit:post.mesuringUnit,
                        availableQuantity:post.availableQty,
                        minimumQuantity:post.minimumQty
                    }


                    EventDispatch(createCart(products));
                    console.log(products);


                }}
                
                
                >
                <AddShoppingcartIcon fontSize = "default" />
                    
               

                    
                </Button>

                
            </CardActions>



        </Card>
    )
}

export default ProductCard;