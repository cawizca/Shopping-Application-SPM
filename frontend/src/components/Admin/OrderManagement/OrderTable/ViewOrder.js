import React, {useState} from "react";
import axios from "axios"
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {Label} from "@material-ui/icons";
import '../../../../styles/orderinfo.css'
import '../../../../styles/rider.css'
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

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
    backgroundColor: "#098d36",
    color: "#fafafa",

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

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function ViewOrder() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',

        },
    }));

    const classes = useStyles();

    const types = [
        {
            value: 'Van',
            label: 'Van',
        },
        {
            value: 'Three Wheel',
            label: 'Three Wheel',
        },
        {
            value: 'Lorry',
            label: 'Lorry',
        }


    ];


    return (
        <div>
            <Button style={buttonStyle} onClick={handleClickOpen}>
                VIEW
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose} className="form-background">
                    Order Info
                </DialogTitle>
                <form>
                    <DialogContent dividers className="form-background" className='order-info'>

                        <div className="input-set">
                            <div>
                                <label>Customer ID</label>
                                <label style={{marginRight: '95px'}}> - CS4521514</label>

                            </div>

                            <div>
                                <label>Address</label>
                                <label> - No 15/C Malabe</label>

                            </div>


                        </div>

                        <div className="input-set">
                            <div>
                                <label>Order ID</label>
                                <label> - OR1558456</label>
                            </div>

                            <div>
                                <label>Phone</label>
                                <label> - 0717458542</label>
                            </div>
                        </div>

                        <div className="input-set">
                            <div>
                                <label>Distance</label>
                                <label> - 25Km</label>
                            </div>


                        </div>
                        <div className='order-form' style={{marginTop:'-60px'}}>

                            <TableContainer component={Paper} style={{width: '350px'}}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Item ID</StyledTableCell>
                                            <StyledTableCell>name</StyledTableCell>
                                            <StyledTableCell>Price (Rs.)</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <TableRow>
                                            <TableCell>28542</TableCell>
                                            <TableCell>Watch</TableCell>
                                            <TableCell>500.00</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>28542</TableCell>
                                            <TableCell>Watch</TableCell>
                                            <TableCell>500.00</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>28542</TableCell>
                                            <TableCell>Watch</TableCell>
                                            <TableCell>500.00</TableCell>
                                        </TableRow>


                                        <TableRow className='other-charges'>
                                            <TableCell>Sub Total</TableCell>
                                            <TableCell></TableCell>
                                            <TableCell>2500.00</TableCell>
                                        </TableRow>

                                        <TableRow className='other-charges'>
                                            <TableCell>Shipping</TableCell>
                                            <TableCell></TableCell>
                                            <TableCell>170.00</TableCell>
                                        </TableRow>


                                        <TableRow className='final-total'>
                                            <TableCell>Total</TableCell>
                                            <TableCell></TableCell>
                                            <TableCell>4200.00</TableCell>
                                        </TableRow>


                                    </TableBody>
                                </Table>
                            </TableContainer>


                        </div>
                    </DialogContent>

                    <div className="input-set" style={{marginLeft: '20px' , marginTop:'-50px'}}>
                        <div>
                            <label>Rider</label>
                            <label> - Not Assigned</label>
                        </div>


                    </div>
                </form>


            </Dialog>


        </div>
    )
}