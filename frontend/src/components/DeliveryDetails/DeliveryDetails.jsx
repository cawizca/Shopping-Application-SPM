import React, { useState, useEffect } from 'react';
import DeliveryDetailsForm from './DeliveryDetailsForm';
import CartBackground from "../../images/cartBackground.png";

function DeliveryDetails(){

    return(
        <div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <DeliveryDetailsForm/>
        </div>
        <img src={CartBackground} className="cart-background"/>
    </div>);
}

export default  DeliveryDetails;