import React from "react";
import "../../../src/styles/rider.css";
import AdminNavigation from "../Admin/AdminNavigation";
import CustomerTable from "./CustomerTable";
function Customer(){

    return (

        <div >
            <AdminNavigation/>
            <div className="margin-adjust">
                <h1 className="page-title">Customer Management</h1>
                <CustomerTable/>
            </div>

        </div>
    )

}

export default Customer;