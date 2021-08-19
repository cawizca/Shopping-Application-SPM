import ItemCard from "./ItemListSub/ItemCard";
import Button from '@material-ui/core/Button';
import {useEffect, useState} from "react";
import axios from "axios";

export default function ItemList(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8070/cart/').then((res) => {
            setProducts(res.data);
        });
    });

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
                        {products.map((product)=>{
                            return(
                                <ItemCard
                                    id = {product._id}
                                    name = {product.name}
                                    />
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}