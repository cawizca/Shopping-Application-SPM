import React from "react";
import RequestTable from "./Table/RequestTable";
import AdminNavigation from "../../Admin/AdminNavigation";


export default function DeliveryRequest(){
    return(
        <div>
            <AdminNavigation/>
            <div className="margin-adjust">
                <h1 className="page-title">Order Requests</h1>
                <br></br>
                <br></br>
                <RequestTable/>

            </div>

        </div>
    )
}