import {UilSearch} from "@iconscout/react-unicons";
import { UilImport } from '@iconscout/react-unicons';
import { UilPlus } from '@iconscout/react-unicons';
import ItemCard from "../../Cart/ItemSection/ItemListSub/ItemCard";
import tomato from "../../../images/tomato.png";
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";
import {useEffect, useState} from "react";
import WishlistForm from "../WishlistFormPage/WishlistForm";
import WishlistProductAdd from "./WishlistProductAdd";
import axios from "axios";
import {useParams} from "react-router-dom/cjs/react-router-dom";

export default function WishlistProductSection(){

    const [open, setOpen] = useState(false);

    const [detals, setDetails] = useState([]);
    const [product, setProduct] = useState([]);

    const {id} = useParams();

    useEffect(()=>{
       axios.get(`http://localhost:8070/wishlist/${id}`).then((res)=>{
           setDetails(res.data);
           setProduct(res.data.wishlistProducts)
       })
    },[]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className="container">
            <div className="wishlist-title-section">
                <div className="wishlist-title">
                    {detals.wishlistName}
                </div>
                <div className="wishlist-button">
                    <UilSearch />
                </div>
                <div className="wishlist-button">
                    <div className="red-square" style={{position:"relative", left:"25%"}} onClick={()=>{
                        window.location="/wishlist-report"
                    }}>
                        <UilImport size={22} style={{position:"relative", right:"10%", top:"4%"}} />
                    </div>
                </div>
                <div className="wishlist-button">
                    <div className="red-square" onClick={handleClickOpen}>
                        <UilPlus size={23} style={{position:"relative", right:"8%", top:"5%"}} />
                    </div>
                </div>
            </div>
            <div className="wishlist-item-section">

                {product.map((item)=>{
                    return(
                        <ItemCard
                            name = {item.product}
                            category = {item.category}
                            price = {item.price}
                            image = {item.selectedfile}
                            deleteProduct = {()=>{
                                axios.delete(`http://localhost:8070/wishlist/${id}/delete/${item._id}`).then((product)=>{
                                    console.log("Product deleted");
                                    window.location.reload();
                                }).catch((err)=>{
                                    console.log(err);
                                })
                            }}
                        />
                    );
                })}

                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"  PaperProps={{
                        style: {backgroundColor: "#50587F", height:"fit-content", borderRadius:"11px"},
                    }}>
                        <DialogContent>
                            <DialogContentText>
                                <WishlistProductAdd id={id} />
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>


            </div>
        </div>
    );
}