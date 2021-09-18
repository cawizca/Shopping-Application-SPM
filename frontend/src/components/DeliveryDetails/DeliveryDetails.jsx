import React, { useState, useEffect } from 'react';
import DeliveryDetailsForm from './DeliveryDetailsForm';
import CartBackground from "../../images/cartBackground.png";
import {useLocation} from "react-router-dom";

function DeliveryDetails(){

    const location = useLocation();

    useEffect(()=>{
        console.log(location)
    },[]);

    return(
        <div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <DeliveryDetailsForm total = {location.state.totalFee}/>
            <p style={{color:"white", fontSize:"25px"}}>Total fee: Rs.{location.state.totalFee} </p>
        </div>
        <img src={CartBackground} className="cart-background"/>
    </div>);
}

export default  DeliveryDetails;