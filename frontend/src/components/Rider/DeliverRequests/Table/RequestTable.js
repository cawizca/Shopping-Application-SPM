
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
import ComplitionForm from "./ComplitionForm";

const buttonStyle = {
    backgroundColor: "#d5d5ce",
    color: "#000000",

}

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



export default function RequestTable(){

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
                                <StyledTableCell>Order Date</StyledTableCell>
                                <StyledTableCell>Order Request</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                                <StyledTableCell>Order Info</StyledTableCell>
                                <StyledTableCell>Mark As Complete</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                riderList.map(riderList=>(
                                    <TableRow key={riderList._id}>
                                        <TableCell>ORD012</TableCell>
                                        <TableCell>05/07/2021</TableCell>
                                        <TableCell>Pending</TableCell>
                                        <TableCell>  <Button variant="contained" color="secondary">Accepted</Button></TableCell>
                                        <TableCell>

                                            <Button variant="contained" color="primary">Declined</Button>

                                        </TableCell>
                                        <TableCell><ViewOrder/></TableCell>
                                        <TableCell>  <ComplitionForm/></TableCell>


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