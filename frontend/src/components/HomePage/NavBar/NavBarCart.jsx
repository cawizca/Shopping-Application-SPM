import React, { useState, useEffect } from 'react';
import { UilShoppingCartAlt } from '@iconscout/react-unicons';
import { UilUser } from '@iconscout/react-unicons';
import { UilSearch } from '@iconscout/react-unicons';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ItemList from '../../Cart/ItemSection/ItemList';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as PropTypes from "prop-types";
import {faBell} from "@fortawesome/free-regular-svg-icons";

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));


FontAwesomeIcon.propTypes = {icon: PropTypes.arrayOf(PropTypes.string)};

function NavBarCart() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [products, setProducts] = useState([]);
    const [itemCount, setItemCount] = useState();

    useEffect(() => {
        axios.get('http://localhost:8070/cart/').then((res) => {
            setProducts(res.data);
            setItemCount(res.data.length);
        });
    })


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <div className="icon-set">


                <div className="mx-3">
                    <UilSearch />
                </div>

                <div className="mx-3">
                    <Badge badgeContent=" " color="secondary" variant="dot" >
                        <FontAwesomeIcon icon={faBell} size="lg"/>
                    </Badge>
                </div>

                <div className="mx-3">
                    <UilUser />
                </div>

                <div className="mx-3">
                    <Badge badgeContent={itemCount} color="secondary" variant="contained" onClick={handleClick} >
                        <UilShoppingCartAlt />
                    </Badge>
                </div>

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
                    style: { width: '20%' },
                }}
                
            >
                    {/*products.map((product) => {
                        return (
                            <ItemList
                                name={product.name}
                            />
                        )
                    })*/}
                
                <Button component={Link} to="/cart" className={classes.typography} style={{ backgroundColor: "#FA334E", color: "#fff", fontWeight: "700"}} fullWidth variant="contained">View cart.</Button>

            </Popover>
        </div>
    )
}

export default NavBarCart;