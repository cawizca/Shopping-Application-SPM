import NavBar from "../../HomePage/NavBar/NavBar";
import WishlistProductSection from "./WishlistProductSection";
import WishlistBackground from "../../../images/wishlistBackground.png";

export default function WishlistProductMain() {
    return(
        <div>
            <NavBar />
            <WishlistProductSection />
            <img src={WishlistBackground} className="cart-background"/>
        </div>
    );
}