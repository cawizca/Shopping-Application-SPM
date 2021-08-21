import React from "react";
import "../../../styles/rider.css";
import ManageOrder from "./ManageOrder";
import Form from "./AddForm/Form";
import ManageTable from "./Table/ManageTable";
import AdminNavigation from "../AdminNavigation";
function Rider(){

    return (

        <div style={{zIndex:"-99"}}>
            <AdminNavigation/>
            <div className="margin-adjust" >
                <h1 className="page-title">Rider Management</h1>


                <ManageTable/>
            </div>

        </div>
    )

}

export default Rider;