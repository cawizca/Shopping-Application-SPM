import "../../styles/wishlist.css";
import WishlistMain from "./WishlistFormPage/WishlistMain";
import NavBar from "../HomePage/NavBar/NavBar";
import WishlistBackground from "../../images/wishlistBackground.png"
import {useEffect, useState} from "react";
import axios from "axios";

export default function WishlistComponent(){

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

    return(
        <div>
            <NavBar getUserType={userType}/>
            <div  className="container">
                <WishlistMain />
            </div>
            <img src={WishlistBackground} className="cart-background"/>
        </div>
    );
}