import Tomato from '../../../../images/tomato.png'
import {UilMinus, UilPlus} from "@iconscout/react-unicons";

export default function NavCartCard(props){
    return(
        <div className="notification-card">
            <div className="notification-card-icon">
                <img src={Tomato} alt=""/>
            </div>
            <div className="nav-cart-card">
                <h6>{props.name}</h6>
                <div className="nav-cart">Category: Vegetable</div>
                <div className="nav-cart">Price: Rs. 100.00</div>
            </div>
            <div className="notification-card-button">
                <div className="red-square" style={{ position: "absolute", right: "5%", top: "10%", width:"20px", height:"20px" }} ><UilPlus /></div>
                <div style={{ position: "absolute", right: "5%", top: "30px" }}>
                    05
                </div>
                <div className="red-square" style={{ position: "absolute", right: "5%", bottom: "10%", width:"20px", height:"20px" }} ><UilMinus /></div>
            </div>
        </div>
    );
}