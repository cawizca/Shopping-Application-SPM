import Button from '@material-ui/core/Button';
import { UilImport } from '@iconscout/react-unicons';
import TextField from "@material-ui/core/TextField";
import { UilSearch } from '@iconscout/react-unicons'
import FormControl from "@material-ui/core/FormControl";
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

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


export default function PriceList() {

    const classes = useStyles();
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <div style={{paddingLeft:"15%"}}>
            <div>
                <div className="row receipt">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-4">
                        <Button style={buttonStyle}>Invoice <UilImport /></Button>
                    </div>
                    <div className="col-lg-2">
                        <UilSearch color="#B7B6B6"/>
                    </div>
                </div>
            </div>
            <div className="price-list">
                <div className="row price-items">
                        <div className="col-lg-6">
                            Total
                        </div>
                        <div className="col-lg-6" style={{textAlign: "right"}}>
                            Rs. 1360.00
                        </div>
                </div>
                <div className="row price-items">
                    <div className="col-lg-6">
                        Coupon Code
                    </div>
                    <div className="col-lg-6" style={{textAlign: "right"}}>
                        <TextField placeholder="Coupon"/>
                    </div>
                </div>
                <div className="row price-items">
                    <div className="col-lg-6">
                        Discount
                    </div>
                    <div className="col-lg-6" style={{textAlign: "right"}}>
                        Rs. 136.00
                    </div>
                </div>
                <div className="row price-items">
                    <div className="col-lg-6">
                        District
                    </div>
                    <div className="col-lg-6" style={{textAlign: "right"}}>
                        <FormControl className={classes.formControl}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value={"Kegalle"}>Kegalle</MenuItem>
                                <MenuItem value={"Kandy"}>Kandy</MenuItem>
                                <MenuItem value={"Gampaha"}>Gampaha</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="row price-items">
                    <div className="col-lg-6">
                        Delivery Charge
                    </div>
                    <div className="col-lg-6" style={{textAlign: "right"}}>
                        Rs. 300.00
                    </div>
                </div>
                <div className="row price-items total-fee">
                    <div className="col-lg-6">
                        Total Fee
                    </div>
                    <div className="col-lg-6" style={{textAlign: "right"}}>
                        <span className="price-tag">Rs. 1524.00</span>
                    </div>
                </div>
            </div>
            <div className="pay-button">
                <Button style={buttonStyle} href='/deliverydetails'>Pay</Button>
            </div>
        </div>
    );
}