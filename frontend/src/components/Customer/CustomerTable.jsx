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
import CustomerDelete from "./CustomerDelete/CustomerDelete";
import { UilSearch } from "@iconscout/react-unicons";
import {
    Card,
    Col,
    Container,
    Row,
    CardBody,
    Label,
    Input
} from 'reactstrap'

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
        minWidth: 200,
        backgroundColor: 'darkgray',
        color: '#ffffff',
    },
});



export default function CustomerTable() {
    let count = 0;
    const [getsearch, SetSearch] = useState("")
    const classes = useStyles();
    const [customerList, setCustomers] = useState([]);

    useEffect(() => {

        let config = {
            headers: {
              data:getsearch
            }
          }
    
        function getRiderList() {
            axios.get("http://localhost:8070/user/getAllCustomers" , config)
                .then((response) => {
                    setCustomers(response.data)
                    console.log(response.data)
                })
                .catch((error) => {
                    alert(error)
                })
        }

        getRiderList()
    }, [getsearch])

    return (
        <div>
            <Row className="mb-4-sm">
                <Col sm={9} className="mb-4-sm">
                </Col>
                <Col sm={3} className="mb-4-sm">
                    <Input
                        className="form-control-sm"
                        type="camel"
                        value={getsearch}
                        onChange={e => {
                            console.log(e.target.value)
                            SetSearch(e.target.value)
                        }}
                        placeholder="Search By Email"
                        style={{ textAlign: 'left' }}
                    />
                </Col>
                <div>
                </div>
            </Row>
            <br />
            <TableContainer component={Paper} >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>User Name</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            customerList.map(customer => (
                                <TableRow key={customer._id}>
                                    <TableCell>{count = count + 1}</TableCell>
                                    <TableCell>{customer.username}</TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>  <CustomerDelete customerID={customer._id} /></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

