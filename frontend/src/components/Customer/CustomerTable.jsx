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
import CustomerDelete from "./CustomerDelete/CustomerDelete";

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



export default function CustomerTable(){
    let count = 0;
    const classes = useStyles();

    const [customerList,setCustomers] = useState([]);

    useEffect(()=>{

        function getRiderList() {
            axios.get("http://localhost:8070/user/getAllCustomers")
                .then((response) => {
                    setCustomers(response.data)
                    console.log(response.data)
                })
                .catch((error) => {
                    alert(error)
                })
        }

        getRiderList()
    },[])

    return(
        <div>
            <br/>
                <TableContainer  component={Paper} >
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
                                customerList.map(customer=>(
                                    <TableRow key={customer._id}>
                                        <TableCell>{count=count+1}</TableCell>
                                        <TableCell>{customer.username}</TableCell>
                                        <TableCell>{customer.email}</TableCell>
                                        <TableCell>  <CustomerDelete customerID = {customer._id}/></TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}

