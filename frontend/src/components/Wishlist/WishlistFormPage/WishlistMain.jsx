import WishlistCard from "./WishlistCard";
import WishlistForm from "./WishlistForm";
import {useEffect, useState} from "react";
import axios from "axios";

export default function WishlistMain(){
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8070/wishlist/').then(res=>{
            setList(res.data);
            console.log(res.data)
        })
    })
    return(
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <WishlistForm />
                </div>
                <div className="col-lg-6 card-section">
                    <WishlistCard />
                    {list.map((item)=>{
                        return(
                            <WishlistCard
                                name = {item.wishlistName}
                                qty = {item.wishlistProducts.length}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}