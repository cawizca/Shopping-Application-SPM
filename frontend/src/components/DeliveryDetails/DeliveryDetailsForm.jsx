import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";
import React, {useRef, useState} from "react";
import axios from "axios";
import { UilSearch } from '@iconscout/react-unicons'
import "../../styles/delivery.css"

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

export default function DeliveryDetailsForm(){
    const classes = useStyles();
    return(
        <div style={{display:"flex"}}>
            <div style={{justifyContent:"center" , alignItems:"center"}}>
        <div className="delivery-form">
            <h4 style={{color:"white", fontSize:"40px"}}>Delivery Details</h4>
            <div className="delivery-text">
                <TextField placeholder="Name"  name="wishlistName"  color="secondary" fullWidth/>
            </div>
            <div className="delivery-text">
                <TextField id="standard-basic"  name="wishlistDescription"  placeholder="Address" color="secondary" fullWidth/>
            </div>
            <div className="delivery-text" style={{display:"flex"}}>
                <div style={{flex:"5"}}>
                <div className="delivery-text" style={{marginRight:"10px"}}>
                <TextField id="standard-basic"  name="wishlistDescription"  placeholder="City" color="secondary" />
            </div>
                </div>
                <div style={{flex:"5"}}>
                <div className="delivery-text">
                <TextField id="standard-basic"  name="wishlistDescription"  placeholder="Postal" color="secondary" />
            </div>
                </div>
            </div>
            <div className="delivery-text">
            <div className="delivery-text">
                <TextField id="standard-basic"  name="wishlistDescription"  placeholder="Phone" color="secondary" fullWidth/>
            </div>
            </div>
            <div className="delivery-button">
                <Button style={buttonStyle} href="/gateway">Pay</Button>
            </div>
        </div>
        </div>
        </div>
    );
}