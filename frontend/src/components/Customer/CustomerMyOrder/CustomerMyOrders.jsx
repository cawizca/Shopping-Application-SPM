import React, { useState, useEffect } from "react";
import axios from "axios";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
        color: '#ffffff',
    },
});


export default function CustomerMyOrders() {

    const classes = useStyles();

    return (
        <div>
            <h4 style={{ color: "#fff", textAlign: "center" }}>My Orders</h4>
            <br />
            <div >
            <div style={{float:"center",marginLeft:"100px"}}>

                    <Table  aria-label="simple table" style={{ width: 1200 }} component={Paper} >
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


                        </TableBody>
                    </Table>
            
                </div>
            </div>
        </div>
    )
}

