import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";
import React, {useRef, useState} from "react";
import axios from "axios";
import { UilSearch } from '@iconscout/react-unicons'


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const buttonStyle = {
    color: "#fff",
    backgroundColor: "#FA334E",
    fontFamily: 'Poppins',
    fontWeight: 400,
    borderRadius: '6px',
    width: '100px',
    boxShadow: '0px 0px 3px #FA334E',
    textTransform: 'capitalize'
}

export default function WishlistForm(){

    const classes = useStyles();
    const [type, setType] = useState('');
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState({
        wishlistName: "",
        wishlistDescription: "",
        wishlistProducts: []
    });

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const addToWishlist = (event)=>{
        const {name, value} = event.target;
        setWishlist(prevValue=> ({
            ...prevValue,
            [name] : value
            })
        );
    };

    function sendDetails(){
        axios.post('http://localhost:8070/wishlist/',wishlist).then(()=>{
            window.location.reload();
        }).catch((err)=>{
            console.log(err)
        });
    }

    function getCategory(){
        axios.get(`http://localhost:8070/product/${type}`).then((products)=>{
            setProducts(products.data.category);
            console.log(type)
        });
    }


    return(
        <div className="wishlist-form">
            <h4>Try to make a list for future purchases.</h4>

            <div className="wishlist-text">
                <TextField placeholder="Name" value={wishlist.wishlistName} name="wishlistName" onChange={addToWishlist} color="secondary" fullWidth/>
            </div>
            <div className="wishlist-text">
                <TextField id="standard-basic" value={wishlist.wishlistDescription} name="wishlistDescription" onChange={addToWishlist} placeholder="Description" color="secondary" fullWidth/>
            </div>
            <div className="wishlist-text" style={{display:"flex"}}>
                <div style={{flex:"5"}}>


                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={handleChange}
                            fullWidth
                            label="Category"
                        >
                            <MenuItem value={"Vegetables"} >Vegetables</MenuItem>
                            <MenuItem value={"Meat"}>Meat</MenuItem>
                            <MenuItem value={"Seafood"}>SeaFoods</MenuItem>
                            <MenuItem value={"Grocery"}>Grocery</MenuItem>
                        </Select>

                </div>

                <div style={{flex:"1"}}>
                    <Button variant="contained" onClick={getCategory}><UilSearch /></Button>
                </div>

            </div>
            <div className="wishlist-text">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={wishlist.wishlistProducts}
                    onChange={addToWishlist}
                    fullWidth
                    name="wishlistProducts"
                    multiple
                >
                    {products && !!products.length && products.map((item)=>{

                        console.log(item.product)
                        return(
                            <MenuItem value={item.product}>{item.product}</MenuItem>
                        )


                    })}

                </Select>
            </div>

            <div className="wishlist-button">
                <Button onClick={sendDetails} style={buttonStyle}>Create</Button>
            </div>
        </div>
    );
}