import Button from '@material-ui/core/Button';
import { UilImport } from '@iconscout/react-unicons';
import TextField from "@material-ui/core/TextField";
import { UilSearch } from '@iconscout/react-unicons'

export default function PriceList() {
    return(
        <div>
            <div>
                <div className="row receipt">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-4">
                        <Button className="contactButton">Invoice <UilImport /></Button>
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
                    Delivery District
                </div>
                <div className="col-lg-6" style={{textAlign: "right"}}>
                    <TextField placeholder="District"/>
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
                <Button className="contactButton">Pay</Button>
            </div>
        </div>
    );
}