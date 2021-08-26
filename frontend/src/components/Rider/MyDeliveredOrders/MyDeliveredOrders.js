import React from "react";
import MyDeleveredTable from "./Table/MyDeleveredTable";
import RiderNavigation from "../RiderNavigation";
import CartBackgroundRight from "../../../images/apples.png";
import RiderBackground from '../../../images/riderBackfround.png'

export default function MyDeliveredOrders() {
    return (
        <div>
            <RiderNavigation/>
            <div className="margin-adjust">
                <h1 className="page-title">My Delivered Orders</h1>
                <br></br>
                <br></br>
                <MyDeleveredTable/>
                <img src={RiderBackground} className="cart-background-right"/>
            </div>

        </div>
    )
}