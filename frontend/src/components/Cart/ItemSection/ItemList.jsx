import ItemCard from "./ItemListSub/ItemCard";
import Button from '@material-ui/core/Button';

export default function ItemList(){
    return(
        <div>
            <div className="row top-section">
                <div className="col-lg-8">
                    <span className="items-title">Buy your chosen products.</span>
                </div>
                <div className="col-lg-4">
                    <Button className="contactButton">Clear All</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="item-list">
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>
                </div>
            </div>

        </div>
    )
}