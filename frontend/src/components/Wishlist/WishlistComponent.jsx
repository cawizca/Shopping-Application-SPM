import "../../styles/wishlist.css";
import WishlistMain from "./WishlistFormPage/WishlistMain";
import WishlistBackground from "../../images/wishlistBackground.png";


export default function WishlistComponent(){

    return(
        <div>
            <div className="container">
                <WishlistMain />
            </div>
            <img src={WishlistBackground} className="cart-background"/>
        </div>
    );
}