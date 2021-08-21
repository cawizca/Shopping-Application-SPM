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


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#5E4FA2',
        color: theme.palette.common.white,
        fontSize:20,
    },
    body: {
        fontSize:14,
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



export default function InsufficientProductTable(){
    let count = 0;
    const classes = useStyles();



    return(
        <div style={{width:'500px'}}>
           
            <br/>
                <TableContainer  component={Paper} style={{width:'1200px'}}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell >Product</StyledTableCell>
                                <StyledTableCell >Available Quantity</StyledTableCell>
                                <StyledTableCell >Minimum Quantity</StyledTableCell>
                                <StyledTableCell >Measuring Unit</StyledTableCell>
                                <StyledTableCell >Price</StyledTableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            
                                    <TableRow >
                                        <TableCell style={{fontSize:'80'}}> Nadu Rice</TableCell>
                                        <TableCell>90</TableCell>
                                        <TableCell>100</TableCell>
                                        <TableCell>Kg</TableCell>
                                        <TableCell>110</TableCell>
                                        
                                    

                                    </TableRow>
                                
                                    <TableRow >
                                        <TableCell > Chilli Powder</TableCell>
                                        <TableCell>40</TableCell>
                                        <TableCell>50</TableCell>
                                        <TableCell>Packets</TableCell>
                                        <TableCell>100</TableCell>
                                        
                                    

                                    </TableRow>

                            
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}
