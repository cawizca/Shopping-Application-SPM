import React, {useState, useEffect} from "react";
import axios from "axios";
import {withStyles, makeStyles} from '@material-ui/core/styles';
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
        backgroundColor: '#FA334E',
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
        backgroundColor: "white",
    },
});


export default function RequestTable() {

    const classes = useStyles();


    const [riderList, setRiderList] = useState([]);

    useEffect(() => {


        const access_token = localStorage.getItem('token')
        console.log(access_token)
        let config = {
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        }
        axios.get('http://localhost:8070/user/post',
            config)
            .then((response) => {
                if (response.data.message) {
                    alert(response.data.message)
                } else {

                    getRiderList(response.data.user._id)

                }

            })
            .catch()


        function getRiderList(userid) {
            axios.get(`http://localhost:8070/order/getOne/611e510c482c693d20e3b65d`)
                .then((response) => {
                    setRiderList(response.data)
                    console.log(response.data.data)
                })
                .catch((error) => {
                    alert(error)
                })

        }


    }, [])


    function accept(id) {
        const stateChanged = {
            request: "Accepted",
        }
        axios.put(`http://localhost:8070/order/update/${id}`, stateChanged)
            .then((res) => {
                alert("updated")
                window.location.reload(true)
            })
            .catch(error => {
                alert(error)
            })
    }

    function decline(id) {
        const stateChanged = {
            request: "Declined",
            riders:null
        }
        axios.put(`http://localhost:8070/order/update/${id}`, stateChanged)
            .then((res) => {
                alert("updated")
                window.location.reload(true)
            })
            .catch(error => {
                alert(error)
            })
    }


    // Kavishka pushed
    return (
        <div style={{zIndex: "-99"}}>
            <div>

                <TableContainer>
                    <Table aria-label="simple table" className="table-rows-style">
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



                            <TableBody style={{color: "white"}}>

                                {
                                    riderList.map(riderList => (
                                        <TableRow key={riderList._id}>
                                            <TableCell>{riderList._id}</TableCell>
                                            <TableCell>{riderList.orderDate}</TableCell>
                                            <TableCell>{riderList.request}</TableCell>
                                            <TableCell>
                                                <Button
                                                    style={{fontSize: '10px',}}
                                                    onClick={() => {
                                                        accept(riderList._id)
                                                    }}
                                                    variant="contained" color="secondary"
                                                    disabled={riderList.request == 'Accepted' }
                                                >Accepted
                                                </Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    style={{fontSize: '10px'}}
                                                    onClick={() => {
                                                        decline(riderList._id)
                                                    }}
                                                    variant="contained"
                                                    color="primary"
                                                    disabled={riderList.request == 'Accepted'}
                                                >Declined
                                                </Button>
                                            </TableCell>
                                            <TableCell><ViewOrder/></TableCell>
                                            <TableCell><ComplitionForm/></TableCell>


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