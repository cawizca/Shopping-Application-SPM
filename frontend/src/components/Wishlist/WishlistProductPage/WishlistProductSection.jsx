import {UilSearch} from "@iconscout/react-unicons";
import { UilImport } from '@iconscout/react-unicons';
import { UilPlus } from '@iconscout/react-unicons';
import ItemCard from "../../Cart/ItemSection/ItemListSub/ItemCard";
import tomato from "../../../images/tomato.png";
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";
import {useState} from "react";
import WishlistForm from "../WishlistFormPage/WishlistForm";

export default function WishlistProductSection(){

    const [open, setOpen] = useState(false);

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
                    Chocolate List
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
                <ItemCard
                    name = "Tomato"
                    category = "Vegetable"
                    price = "100"
                    image = {tomato}
                />
                <ItemCard
                    name = "Tomato"
                    category = "Vegetable"
                    price = "100"
                    image = {tomato}
                />
                <ItemCard
                    name = "Tomato"
                    category = "Vegetable"
                    price = "100"
                    image = {tomato}
                />
                <ItemCard
                    name = "Tomato"
                    category = "Vegetable"
                    price = "100"
                    image = {tomato}
                />


                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"  PaperProps={{
                        style: {backgroundColor: "#50587F", height:"fit-content"},
                    }}>
                        <DialogContent>
                            <DialogContentText>
                                <WishlistForm />
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>


            </div>
        </div>
    );
}