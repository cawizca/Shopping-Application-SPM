import NavBar from "../HomePage/NavBar/NavBar";
import ItemList from "./ItemSection/ItemList";
import "../../styles/cart.css";
import CartBackground from "../../images/cartBackground.png";
import CartBackgroundRight from "../../images/apples.png";
import PriceList from "./PriceSection/PriceList";
import {useEffect, useState} from "react";
import axios from "axios";

function CartComponent() {

    return (
        <div>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6" style={{borderRight:"1px solid #707070"}}>
                        <ItemList />
                    </div>
                    <div className="col-lg-6">
                        <PriceList />
                    </div>
                </div>
            </div>
            <img src={CartBackground} className="cart-background"/>
            <img src={CartBackgroundRight} className="cart-background-right"/>
        </div>
    );
}

export default CartComponent;