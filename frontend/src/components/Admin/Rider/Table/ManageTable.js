import React , {useState,useEffect} from "react";
import axios from "axios";
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Form from "../AddForm/Form";
import DeleteRider from "./DeleteRider";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#5E4FA2',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        color: theme.palette.common.white,
    },
}))(TableCell);



const useStyles = makeStyles({
    table: {
        minWidth: 650,
        backgroundColor: 'darkgray',
        color:'#ffffff',
    },
});


const useStyles2 = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
        },
    },
}));


export default function ManageTable(){
    let count = 0;
    const classes = useStyles();
    const classes2 = useStyles2();

    const [riderList,setRiderList] = useState([]);

    useEffect(()=>{

        function getRiderList() {
            axios.get("http://localhost:8070/rider/getAllRiders")
                .then((response) => {
                    setRiderList(response.data.data)
                    console.log(response.data.data)
                })
                .catch((error) => {
                    alert(error)
                })

        }

        getRiderList()
    },[])




    return(
        <div>
            <Form/>
            <br/>
                <TableContainer  component={Paper} >
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>Rider Name</StyledTableCell>
                                <StyledTableCell>NIC</StyledTableCell>
                                <StyledTableCell>Phone</StyledTableCell>
                                <StyledTableCell>Vehicle Type</StyledTableCell>
                                <StyledTableCell>Vehicle Number</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                riderList.map(riderList=>(
                                    <TableRow key={riderList._id}>
                                        <TableCell>{count=count+1}</TableCell>
                                        <TableCell>{riderList.riderName}</TableCell>
                                        <TableCell>{riderList.riderNic}</TableCell>
                                        <TableCell>{riderList.riderPhone}</TableCell>
                                        <TableCell>{riderList.vehicleType}</TableCell>
                                        <TableCell>{riderList.vehicleNumber}</TableCell>
                                        <TableCell>  <DeleteRider riderID = {riderList._id}/></TableCell>
                                        <TableCell> <div className={classes2.root} className="d-inline-block">
                                            <Button variant="contained" color="primary">Update</Button>
                                        </div></TableCell>

                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}

