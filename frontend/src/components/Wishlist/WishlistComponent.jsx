import "../../styles/wishlist.css";
import WishlistMain from "./WishlistFormPage/WishlistMain";
import NavBar from "../HomePage/NavBar/NavBar";
import WishlistBackground from "../../images/wishlistBackground.png"

export default function WishlistComponent(){
    return(
        <div>
            <NavBar />
            <div  className="container">
                <WishlistMain />
            </div>
            <img src={WishlistBackground} className="cart-background"/>
        </div>
    );
}