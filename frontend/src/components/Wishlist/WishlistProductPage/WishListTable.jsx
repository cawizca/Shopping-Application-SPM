
import React , {useState,useEffect} from "react";
import axios from "axios";
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RiderBackground from "../../../images/riderBackfround.png";



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
        backgroundColor: 'white',
        fontWeight:"600 !important"
    },
});



export default function WishListTable(){

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
        <div >
            <div className="container" style={{marginTop:"5%"}}>
                <div className="wishlist-title" style={{marginBottom:"5%"}}>
                    Chocolate List report.
                </div>
                <TableContainer >
                    <Table aria-label="simple table" className="table-rows-style">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Item ID</StyledTableCell>
                                <StyledTableCell>Product Name</StyledTableCell>
                                <StyledTableCell>Product Category</StyledTableCell>
                                <StyledTableCell>Price</StyledTableCell>
                                <StyledTableCell>Quantity</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{backgroundColor:riderList.request=='pending'? '#d7c5c5': ''}}>ITEM1234568</TableCell>
                                <TableCell>Tomato</TableCell>
                                <TableCell>Vegetables</TableCell>
                                <TableCell>Rs.100.00</TableCell>
                                <TableCell>100</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>ITEM1234568</TableCell>
                                <TableCell>Tomato</TableCell>
                                <TableCell>Vegetables</TableCell>
                                <TableCell>Rs.100.00</TableCell>
                                <TableCell>100</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>ITEM1234568</TableCell>
                                <TableCell>Tomato</TableCell>
                                <TableCell>Vegetables</TableCell>
                                <TableCell>Rs.100.00</TableCell>
                                <TableCell>100</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>ITEM1234568</TableCell>
                                <TableCell>Tomato</TableCell>
                                <TableCell>Vegetables</TableCell>
                                <TableCell>Rs.100.00</TableCell>
                                <TableCell>100</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>ITEM1234568</TableCell>
                                <TableCell>Tomato</TableCell>
                                <TableCell>Vegetables</TableCell>
                                <TableCell>Rs.100.00</TableCell>
                                <TableCell>100</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <img src={RiderBackground} className="cart-background-right"/>
        </div>
    )
}