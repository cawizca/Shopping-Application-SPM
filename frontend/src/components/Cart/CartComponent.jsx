import NavBar from "../HomePage/NavBar/NavBar";
import ItemList from "./ItemSection/ItemList";
import "../../styles/cart.css";
import CartBackground from "../../images/cartBackground.png"
import PriceList from "./PriceSection/PriceList";

function CartComponent() {
    return (
        <div>
            <NavBar />
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