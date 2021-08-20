import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from "@fortawesome/free-regular-svg-icons";
import React, {useState} from "react";
import {UilShoppingCartAlt} from "@iconscout/react-unicons";
import Badge from "@material-ui/core/Badge";
import ItemCard from "../../../Cart/ItemSection/ItemListSub/ItemCard";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from '@material-ui/core/styles';
import NotificationCard from "./NotificationCard";

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));


export default function NavBarNotifications() {
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
        <div className="icon-set">
            <div className="mx-3">
                <Badge badgeContent=" " color="secondary" variant="dot" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBell} size="lg"/>
                </Badge>
            </div>

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
                    style: { width: '18%', backgroundColor: "#50587F", overflow: "auto", maxHeight: "335px", padding:"1% 0" },
                }}

            >
                <span className="notification-title">Notifications</span>

                <div className="notification-list">
                <NotificationCard />
                <NotificationCard />
                    <NotificationCard />
                </div>

            </Popover>
        </div>
    );
}