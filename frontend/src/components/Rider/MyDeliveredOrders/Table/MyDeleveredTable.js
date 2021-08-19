
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
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ViewOrder from "../../../Admin/OrderManagement/OrderTable/ViewOrder";


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



export default function MyDeleveredTable(){

    const classes = useStyles();


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
            <div>

                <br/><br/>
                <TableContainer  component={Paper} >
                    <Table  className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Order ID</StyledTableCell>
                                <StyledTableCell>Rider ID</StyledTableCell>
                                <StyledTableCell>Location</StyledTableCell>
                                <StyledTableCell>Delivery Date</StyledTableCell>
                                <StyledTableCell>Time Released</StyledTableCell>
                                <StyledTableCell>Time Received</StyledTableCell>
                                <StyledTableCell>Order Info</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                riderList.map(riderList=>(
                                    <TableRow key={riderList._id}>
                                        <TableCell>ORD012</TableCell>
                                        <TableCell>RID001</TableCell>
                                        <TableCell>11/5/C Malabe</TableCell>
                                        <TableCell>15/08/2021</TableCell>
                                        <TableCell>8.00AM</TableCell>
                                        <TableCell>3.30PM</TableCell>
                                        <TableCell><ViewOrder/></TableCell>




                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    )
}