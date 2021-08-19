import { UilPlus } from '@iconscout/react-unicons'

export default function WishlistCard(){

    function selectedCard(){
        window.location = "/wishlist-product";
    }

    return(
        <div>
            <div className="wishlist-card" onClick={selectedCard}>
                <div className="card-title">
                    <h5>Biscuits List</h5>
                    <span>There are my favourite biscuits which I need to buy later </span>
                    <div>Quantity - 10 </div>
                </div>
                <div className="card-buttons">
                    <div className="red-square" style={{top:"10%"}}>
                        <UilPlus />
                    </div>
                    <div className="red-square" style={{bottom:"10%"}}>

                    </div>
                </div>
            </div>
        </div>
    );
}