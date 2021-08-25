import { UilTimes } from '@iconscout/react-unicons';
import { UilPen } from '@iconscout/react-unicons'
import axios from "axios";

export default function WishlistCard(props){

    function deleteItem(){

        axios.delete(`http://localhost:8070/wishlist/${props.id}`).then(()=>{
            alert('Successfully deleted.');
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
    }

    function selectedCard(){
        window.location = "/wishlist-product";
    }

    return(
        <div>
            <div className="wishlist-card">
                <div className="card-title" onClick={selectedCard}>
                    <h5>{props.name}</h5>
                    <span>There are my favourite biscuits which I need to buy later </span>
                    <div>Quantity - {props.qty} </div>
                </div>
                <div className="card-buttons">
                    <div className="red-square" style={{top:"10%"}}>
                        <UilTimes onClick={deleteItem} />
                    </div>
                    <div className="red-square" style={{bottom:"10%"}}>
                        <UilPen size="20" />
                    </div>
                </div>
            </div>
        </div>
    );
}