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
import NavBar from "../../HomePage/NavBar/NavBar";


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


export default function CustomerMyOrders(){

    const classes = useStyles();

    return(
        <div>
            <NavBar/>
            <h4 style={{color:"#fff"}}>My Orders</h4>
            <br/>
                <TableContainer  component={Paper} >
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Order ID</StyledTableCell>
                                <StyledTableCell>Order Items</StyledTableCell>
                                <StyledTableCell>Total</StyledTableCell>
                                <StyledTableCell>Order Date</StyledTableCell>
                                <StyledTableCell>Order Receved Date</StyledTableCell>
                                <StyledTableCell>Order State</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                    <TableRow>
                                        <TableCell>OR125487958</TableCell>
                                        <TableCell>Chicken</TableCell>
                                        <TableCell>900.00</TableCell>
                                        <TableCell>20/08/2021</TableCell>
                                        <TableCell>20/08/2021</TableCell>
                                        <TableCell>Pending</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>OR125485488</TableCell>
                                        <TableCell>Prawns</TableCell>
                                        <TableCell>500.00</TableCell>
                                        <TableCell>27/07/2021</TableCell>
                                        <TableCell>30/07/2021</TableCell>
                                        <TableCell>Completed</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>OR125487625</TableCell>
                                        <TableCell>Tomato</TableCell>
                                        <TableCell>340.00</TableCell>
                                        <TableCell>1/07/2021</TableCell>
                                        <TableCell>3/07/2021</TableCell>
                                        <TableCell>Completed</TableCell>
                                    </TableRow><TableRow>
                                        <TableCell>OR125488471</TableCell>
                                        <TableCell>Detergent</TableCell>
                                        <TableCell>400.00</TableCell>
                                        <TableCell>18/06/2021</TableCell>
                                        <TableCell>20/06/2021</TableCell>
                                        <TableCell>Completed</TableCell>
                                    </TableRow>
                                    
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}

