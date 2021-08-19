import WishlistCard from "./WishlistCard";
import WishlistForm from "./WishlistForm";

export default function WishlistMain(){

    function selectedCard(){
        ;
    }
    return(
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <WishlistForm />
                </div>
                <div className="col-lg-6 card-section">
                    <WishlistCard />
                    <WishlistCard />
                    <WishlistCard />
                    <WishlistCard />
                    <WishlistCard />
                    <WishlistCard />
                </div>
            </div>
        </div>
    );
}