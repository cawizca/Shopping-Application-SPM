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

export default function (props) {
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


    //set Data to useStates
    // const [riderName,setRiderName] = useState(props.riderName);
    // const [nic,setNic] = useState("");
    // const [phone,setPhone] = useState("");
    // const [type,setType] = useState("");
    // const [number,setNumber] = useState("");


    let id = props.id;
    let riderName = props.riderName;
    let nic = props.nic;
    let phone = props.phone;
    let type = props.type;
    let number = props.number;

    let [data, setData] = useState({
        riderName: riderName,
        nic: nic,
        phone: phone,
        type: type,
        number: number
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function onSubmit(e) {


        const RiderObject = {
            riderName: data.riderName,
            riderNic: data.nic,
            riderPhone: data.phone,
            vehicleType: data.type,
            vehicleNumber: data.number
        }

        axios.put(`http://localhost:8070/rider/update/${props.id}`, RiderObject)
            .then((res) => {
                alert("saved successfully")
            })
            .catch(error => {
                alert(error)
            })
    }

    // const vehicleTypeChange=(event)=>{
    //     setType(event.target.value);
    // }




    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Update
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose} className="form-background">
                    Update Rider
                </DialogTitle>
                <form onSubmit={onSubmit}>
                    <DialogContent dividers className="form-background">
                        <Typography>

                            <TextField type="text"
                                       name="riderName"
                                       label="Rider Name"
                                       placeholder="W.P. Kumara"
                                       className={classes.textField}
                                       helperText="Enter Rider Name"
                                       margin="dense"
                                       variant="outlined"
                                       value={data.riderName}
                                       onChange={handleChange}
                            />

                            <TextField
                                name="nic"
                                label="Rider NIC"
                                placeholder="984511452V"
                                className={classes.textField}
                                helperText="Enter Rider NIC"
                                margin="dense"
                                variant="outlined"
                                value={data.nic}
                                onChange={handleChange}
                            />


                            <TextField
                                name="phone"
                                label="Rider Phone"

                                placeholder="0717845412"
                                className={classes.textField}
                                helperText="Enter Rider Phone"
                                margin="dense"
                                variant="outlined"
                                value={data.phone}
                                onChange={handleChange}
                            />

                            <TextField
                                name="number"
                                label="Vehicle Number"
                                placeholder="PA-5684"
                                className={classes.textField}
                                helperText="Enter Vehicle Number"
                                margin="dense"
                                variant="outlined"
                                value={data.number}
                                onChange={handleChange}
                            />

                            <TextField
                                name="type"
                                className={classes.textField}
                                required
                                id="outlined-select-currency"
                                value={data.type}
                                label="Select Vehicle Type"
                                margin="dense"
                                variant="outlined"

                                onChange={handleChange}
                            >
                                {types.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Typography>

                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" color="primary">
                            Update
                        </Button>
                    </DialogActions>

                </form>
            </Dialog>
        </div>
    )
}

