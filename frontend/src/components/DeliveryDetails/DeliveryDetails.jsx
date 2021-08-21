import React, { useState, useEffect } from 'react';
import DeliveryDetailsForm from './DeliveryDetailsForm';
import NavBar from "../../components/HomePage/NavBar/NavBar"


function DeliveryDetails(){

    return(<div>
        <NavBar/>
        <DeliveryDetailsForm/>
    </div>);
}

export default  DeliveryDetails;