import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import axios from "axios";

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
    const [age, setAge] = useState('');

    const [products, setProducts] = useState([]);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    function getCategory(){
        axios.get('http://localhost:8070/product/Grocery').then((products)=>{
            setProducts(products.data.category)
        })
    }

    return(
        <div className="wishlist-form">
            <h4>Try to make a list for future purchases.</h4>

            <div className="wishlist-text">
                <TextField placeholder="Name" color="secondary" fullWidth/>
            </div>
            <div className="wishlist-text">
                <TextField id="standard-basic" placeholder="Description" color="secondary" fullWidth/>
            </div>
            <div className="wishlist-text" style={{display:"flex"}}>
                <div style={{flex:"5"}}>


                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                            fullWidth
                            label="Category"
                        >
                            <MenuItem value={"Vegetable"}>Vegetable</MenuItem>
                            <MenuItem value={"Meat"}>Meat</MenuItem>
                            <MenuItem value={"SeaFoods"}>SeaFoods</MenuItem>
                            <MenuItem value={"Groceries"}>Groceries</MenuItem>
                        </Select>

                </div>

                <div style={{flex:"1"}}>
                    <Button variant="contained" onClick={getCategory}>+</Button>
                </div>

            </div>
            <div className="wishlist-text">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    fullWidth
                    label="Category"
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
                <Button style={buttonStyle}>Create</Button>
            </div>
        </div>
    );
}