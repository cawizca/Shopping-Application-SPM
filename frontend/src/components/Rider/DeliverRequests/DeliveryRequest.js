import React from "react";
import RequestTable from "./Table/RequestTable";
import RiderNavigation from "../RiderNavigation";
import '../../../styles/admin.css'

export default function DeliveryRequest(){
    return(
        <div>
            <RiderNavigation/>
            <div className="margin-adjust" >
                <h1 className="page-title">Order Requests</h1>
                <RequestTable/>

            </div>

        </div>
    )
}