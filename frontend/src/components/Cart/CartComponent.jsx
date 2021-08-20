import NavBar from "../HomePage/NavBar/NavBar";
import ItemList from "./ItemSection/ItemList";
import "../../styles/cart.css";
import CartBackground from "../../images/cartBackground.png"
import PriceList from "./PriceSection/PriceList";
import {useEffect, useState} from "react";
import axios from "axios";

function CartComponent() {

    const [userType, setUserType] = useState('');

    useEffect(()=>{
        const getusertype = async () => {
            const access_token = localStorage.getItem('token')
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                }
            }
            axios.get('http://localhost:8070/user/post', config).then((response) => {
                if (response.data.message) {
                    alert(response.data.message)
                } else {
                    setUserType(response.data.user.usertype)
                }
            })
                .catch()
        };
        getusertype();
    });
    return (
        <div>
            <NavBar getUserType={userType}/>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <ItemList />
                    </div>
                    <div className="col-lg-6">
                        <PriceList />
                    </div>
                </div>
            </div>
            <img src={CartBackground} className="cart-background"/>
        </div>
    );
}

export default CartComponent;