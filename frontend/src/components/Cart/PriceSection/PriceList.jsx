import Button from '@material-ui/core/Button';
import { UilImport } from '@iconscout/react-unicons';
import TextField from "@material-ui/core/TextField";
import { UilSearch } from '@iconscout/react-unicons'
import FormControl from "@material-ui/core/FormControl";
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import axios from "axios";
import PrintInvoice from "./PrintInvoice";
import SearchIcon from "./SearchIcon";

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

export default function PriceList() {

    const classes = useStyles();
    const [price, setPrice] = useState(0);
    const [total, setTotal]= useState(0);
    const [discount, setDiscount] = useState({});
    const [coupon, setCoupon] = useState('');

    const handleChange = (event) => {
        const price = Number(event.target.value);
        setPrice(price);
    };

    useEffect(()=>{
        axios.get('http://localhost:8070/cart/total').then((total)=>{
            setTotal(total.data)
        })
    });

    function chnageDiscount(event){
        setCoupon(event.target.value)
    }

    function getDiscount() {
        console.log(coupon)
        axios.get(`http://localhost:8070/coupon/${coupon}`).then((res)=>{
            setDiscount(res.data);
        });
    }

    const totDiscount = parseFloat(Number(discount.discount)/100.00 * Number(total.total).toFixed(2))>0?parseFloat(Number(discount.discount)/100.00 * Number(total.total)).toFixed(2):Math.floor(Number(0.00)).toFixed(2);
    const cartTotal = Number(Math.round(Number(total.total)).toFixed(2))>0?parseFloat(Number(Math.round(Number(total.total)))).toFixed(2):Math.floor(Number(0.00)).toFixed(2);
    const deliveryFee = Number(Math.round(price).toFixed(2))>0?Number(Math.round(price)).toFixed(2):Math.floor(Number(0.00)).toFixed(2);
    const totalFee = totDiscount>0? (parseFloat(cartTotal+deliveryFee).toFixed(2))-totDiscount:parseFloat(cartTotal+deliveryFee).toFixed(2);

    return(
        <div style={{paddingLeft:"15%"}}>
            <div>
                <div className="row receipt">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-4">
                        <PrintInvoice
                            totDiscount = {totDiscount}
                            cartTotal = {cartTotal}
                            deliveryFee = {deliveryFee}
                            totalFee = {totalFee}
                        />
                    </div>
                    <div className="col-lg-2">
                        <SearchIcon />
                    </div>
                </div>
            </div>
            <div className="price-list">
                <div className="row price-items">
                        <div className="col-lg-6">
                            Total
                        </div>
                        <div className="col-lg-6" style={{textAlign: "right"}}>
                            Rs. {cartTotal}
                        </div>
                </div>
                <div className="row price-items">
                    <div className="col-lg-6">
                        Coupon Code
                    </div>
                    <div className="col-lg-6" style={{textAlign: "right", display:"flex"}}>
                        <TextField placeholder="Coupon" value={coupon} onChange={chnageDiscount} />
                        <div style={{flex:1}}>
                            <Button onClick={getDiscount}>+</Button>
                        </div>
                    </div>
                </div>
                <div className="row price-items">
                    <div className="col-lg-6">
                        Discount
                    </div>
                    <div className="col-lg-6" style={{textAlign: "right"}}>
                        Rs. {totDiscount}
                    </div>
                </div>
                <div className="row price-items">
                    <div className="col-lg-6">
                        District
                    </div>
                    <div className="col-lg-6" style={{textAlign: "right"}}>
                        <FormControl className={classes.formControl}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={price}
                                onChange={handleChange}
                            >
                                <MenuItem value={"100"}>Kegalle</MenuItem>
                                <MenuItem value={"200"}>Kandy</MenuItem>
                                <MenuItem value={"300"}>Gampaha</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="row price-items">
                    <div className="col-lg-6">
                        Delivery Charge
                    </div>
                    <div className="col-lg-6" style={{textAlign: "right"}}>
                        Rs. {deliveryFee}
                    </div>
                </div>
                <div className="row price-items total-fee">
                    <div className="col-lg-6">
                        Total Fee
                    </div>
                    <div className="col-lg-6" style={{textAlign: "right"}}>
                        <span className="price-tag">Rs. {totalFee}</span>
                    </div>
                </div>
            </div>
            <div className="pay-button">
                <Button style={buttonStyle} href='/deliverydetails'>Pay</Button>
            </div>
        </div>
    );
}