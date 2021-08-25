import ItemCard from "./ItemListSub/ItemCard";
import Button from '@material-ui/core/Button';
import {useEffect, useState} from "react";
import axios from "axios";
const buttonStyle = {
    color: "#fff",
    backgroundColor: "#FA334E",
    fontFamily: 'Poppins',
    fontWeight: 400,
    borderRadius: '6px',
    width: '100px',
    boxShadow: '0px 0px 3px #FA334E',
    textTransform: 'capitalize'
}

export default function ItemList(){

    const [products, setProducts] = useState([]);

    function deleteAll(){
        axios.delete("http://localhost:8070/cart/").then(()=>{
            alert("Deleted successfully.")
        })
    }

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
                    <Button style={buttonStyle} onClick={deleteAll}>Clear All</Button>
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
                                        category = {product.category}
                                        price = {product.price}
                                        image = {product.image}
                                    />

                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}