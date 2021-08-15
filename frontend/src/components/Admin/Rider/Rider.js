import React from "react";
import "../../../styles/rider.css";
import ManageOrder from "./ManageOrder";
import Form from "./AddForm/Form";
function Rider(){

    return (

        <div>
            <div className='container'>
                <h1 className="page-title">Rider Management</h1>

               <Form/>
            </div>

        </div>
    )

}

export default Rider