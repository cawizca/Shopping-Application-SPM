import React, {useState} from "react";
import axios from "axios"
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

import '../../../../styles/orderinfo.css'
import TableCell from '@material-ui/core/TableCell';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#5E4FA2',
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
        color: theme.palette.common.white,
    },
}))(TableCell);

const buttonStyle = {
    backgroundColor: "#d5d5ce",
    color: "#000000",

}


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


export default function ComplitionForm(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [DeliveryDate, setDeliveryDate] = useState();
    const [TimeRelease, setTimeRelease] = useState();
    const [TimeReceived, setTimeReceived] = useState();

    function changeRequest(id) {
        const stateChanged = {
            request: "Completed",
        }
        axios.put(`http://localhost:8070/order/update/${id}`, stateChanged)
            .then((res) => {
                alert("updated")
                window.location.reload(true)
            })
            .catch(error => {
                alert(error)
            })
    }


    function onSubmit(e){
        e.preventDefault();

        const orderObject={
            DeliveryDate : DeliveryDate,
            TimeReleased :TimeRelease,
            TimeReceived : TimeReceived,
            orders:   props.orderId,
            riders:props.riderId,
            orderId:props.order
        }

        axios.post("http://localhost:8070/complete/create/",orderObject)
            .then((res) => {
                alert("inserted")
                changeRequest(props.orderId)
            })
            .catch(error => {
                alert(error)
            })

    }




    return (
        <div>
            <Button    variant="contained"
                       color="primary" onClick={handleClickOpen}  disabled={props.state=="Completed" ||props.state=="pending" || props.state=="Declined"}>
                Mark As Complete
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}
                    className='completion-info'>
                <DialogTitle id="customized-dialog-title" onClose={handleClose} className="form-background">
                    Order Info
                </DialogTitle>
                <form onSubmit={onSubmit}>
                    <DialogContent dividers className="form-background">

                        <div className="input-set">
                            <div>
                                <label>Order ID</label>
                                <label style={{marginRight: '95px'}}> - ORD845545415</label>

                            </div>

                            <div>
                                <label>Location</label>
                                <label> - No 15/C Malabe</label>

                            </div>


                        </div>

                        <div className="input-set">
                            <div>
                                <label>Rider ID</label>
                                <label> - EMP4555555</label>
                            </div>

                        </div>

                        <div className="completion-form" style={{marginTop: '-60px'}}>


                            <div className="completion-text">
                                <label>Delivery date : </label>
                                <TextField type='date' name="date" color="secondary" fullWidth
                                           onChange={(event) => {
                                               setDeliveryDate(event.target.value);
                                           }}/>
                            </div>
                            <div className="completion-text">
                                <label>Time Released: </label>
                                <TextField type='time' id="standard-basic" placeholder="Description" color="secondary"
                                           fullWidth
                                           onChange={(event) => {
                                               setTimeRelease(event.target.value);
                                           }}/>
                            </div>
                            <div className="completion-text">
                                <label>Time Received : </label>
                                <TextField type='time' placeholder="Category" color="secondary" fullWidth
                                           onChange={(event) => {
                                               setTimeReceived(event.target.value);
                                           }}
                                />
                            </div>

                            <div className="completion-button">
                                <Button type="submit" className="contactButton">Send</Button>
                            </div>
                        </div>


                    </DialogContent>


                </form>


            </Dialog>


        </div>
    )
}