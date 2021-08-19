import {UilSearch} from "@iconscout/react-unicons";
import { UilImport } from '@iconscout/react-unicons';
import { UilPlus } from '@iconscout/react-unicons';
import ItemCard from "../../Cart/ItemSection/ItemListSub/ItemCard";

export default function WishlistProductSection(){
    return(
        <div className="container">
            <div className="wishlist-title-section">
                <div className="wishlist-title">
                    Chocolate List
                </div>
                <div className="wishlist-button">
                    <UilSearch />
                </div>
                <div className="wishlist-button">
                    <div className="red-square">
                        <UilImport />
                    </div>
                </div>
                <div className="wishlist-button">
                    <div className="red-square">
                        <UilPlus />
                    </div>
                </div>
            </div>
            <div className="wishlist-item-section">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    );
}