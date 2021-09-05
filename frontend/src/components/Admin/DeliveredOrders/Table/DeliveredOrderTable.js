
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
import ViewOrder from "../../OrderManagement/OrderTable/ViewOrder";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";


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



export default function DeliveredOrderTable(){

    const classes = useStyles();


    const [completeList, setCompleteList] = useState([]);

    useEffect(()=>{


        function getCompleteList(userid) {
            axios.get(`http://localhost:8070/complete//all-orders`)
                .then((response) => {
                    setCompleteList(response.data)
                    console.log(response.data.data)
                })
                .catch((error) => {
                    alert(error)
                })
        }

        getCompleteList()
    },[])

    return(
        <div>
            <div>

                <Button variant='contained' color="secondary">Download Report</Button>
                <lable style={{marginLeft:'650px',marginRight:'25px' ,color:'red'}}>Search By Date</lable>
                <TextField type='date' style={{backgroundColor:'white'}}/>

                <br/><br/>
                <TableContainer  component={Paper} >
                    <Table  className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Order ID</StyledTableCell>
                                <StyledTableCell>Rider ID</StyledTableCell>
                                <StyledTableCell>Delivery Date</StyledTableCell>
                                <StyledTableCell>Time Released</StyledTableCell>
                                <StyledTableCell>Time Received</StyledTableCell>
                                <StyledTableCell>Order Info</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                completeList.map(completeList=>(
                                    <TableRow key={completeList._id}>
                                        <TableCell>{completeList.orderId}</TableCell>
                                        <TableCell>RID001</TableCell>
                                        <TableCell>{completeList.DeliveryDate}</TableCell>
                                        <TableCell>{completeList.TimeReleased}</TableCell>
                                        <TableCell>{completeList.TimeReceived}</TableCell>
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