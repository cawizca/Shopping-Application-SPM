import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function WishlistForm(){
    return(
        <div className="wishlist-form">
            <h4>Try to make a list for future purchases.</h4>

            <div className="wishlist-text">
                <TextField placeholder="Name" color="secondary" fullWidth/>
            </div>
            <div className="wishlist-text">
                <TextField id="standard-basic" placeholder="Description" color="secondary" fullWidth/>
            </div>
            <div className="wishlist-text">
                <TextField placeholder="Category" color="secondary" fullWidth/>
            </div>
            <div className="wishlist-text">
                <TextField placeholder="Products" color="secondary" fullWidth/>
            </div>

            <div className="wishlist-button">
                <Button className="contactButton">Create</Button>
            </div>
        </div>
    );
}