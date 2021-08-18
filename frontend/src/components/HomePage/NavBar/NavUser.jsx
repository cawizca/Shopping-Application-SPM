import {UilUser} from "@iconscout/react-unicons";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import Popover from "@material-ui/core/Popover";
import { UilFavorite } from '@iconscout/react-unicons';
import { UilSignout } from '@iconscout/react-unicons';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

export default function NavUser() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    //const [products, setProducts] = useState([]);
    //const [itemCount, setItemCount] = useState();


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <div>
            <UilUser onClick={handleClick} />

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    style: { width: '8%', backgroundColor: "#50587F", overflow: "auto", height: "fit-content" },
                }}

            >


                <Button component={Link} to="/profile" className={classes.typography} style={{color:"white", textTransform:"capitalize", display: "flex"}} fullWidth>
                    <div style={{flex: "1"}}><UilUser /></div>
                    <div style={{flex: "2"}}>
                        Profile
                    </div> </Button>
                <Button component={Link} to="/wishlist" className={classes.typography} style={{color:"white", textTransform:"capitalize", display: "flex"}} fullWidth>
                    <div style={{flex: "1"}}><UilFavorite /></div>
                    <div style={{flex: "2"}}>
                        Wishlist
                    </div>
                </Button>
                <Button component={Link} to="/cart" className={classes.typography} style={{color:"white", textTransform:"capitalize", display: "flex"}} fullWidth>
                    <div style={{flex: "1"}}><UilSignout /></div>
                    <div style={{flex: "2"}}>
                        Logout
                    </div>
                </Button>

            </Popover>
        </div>
    );
}