import {FormControlLabel, FormLabel, Grid, MenuItem, Paper, Radio, RadioGroup, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import visa from '../../images/visa.png'
import master from '../../images/Master.png'
const paperStyle = {
    width: "30%",
    height: "auto",
    padding: "2.5%",

    marginTop: "5%",


}
const loginStyle = {
    width: '400px',
    heigth: 'auto',
    padding: '5% 10% 0%',

}

const loginButton = {
    margin: '5% 2.5% 5%',
    backgroundColor: '#5E4FA2',
    width: "100px",
    fontFamily: 'Poppins'
}

export default function Gateway() {

    const years = [
        {
            value: '2022',
            label: '2022',
        },
        {
            value: '2023',
            label: '2023',
        },
        {
            value: '2024',
            label: '2024',
        },
        {
            value: '2025',
            label: '2025',
        },
        {
            value: '2026',
            label: '2026',
        },
        {
            value: '2027',
            label: '2027',
        },
        {
            value: '2028',
            label: '2028',
        },
        {
            value: '2029',
            label: '2029',
        },
        {
            value: '2030',
            label: '2030',
        },
    ];

    const months = [
        {
            value: '01',
            label: '01',
        },
        {
            value: '02',
            label: '02',
        },
        {
            value: '03',
            label: '03',
        },
        {
            value: '04',
            label: '04',
        },
        {
            value: '05',
            label: '05',
        },
        {
            value: '06',
            label: '06',
        },
        {
            value: '07',
            label: '07',
        },
        {
            value: '08',
            label: '08',
        },
        {
            value: '09',
            label: '09',
        },
        {
            value: '10',
            label: '10',
        },
        {
            value: '11',
            label: '11',
        },
        {
            value: '12',
            label: '12',
        },
    ];

    const [currency, setCurrency] = React.useState('');

    const yearChange = (event) => {
        setCurrency(event.target.value);

    };

    const [month, setMonth] = React.useState('');

    const monthChange = (event) => {
        setMonth(event.target.value);

    };

    return (
        <div>
            <div className="container">

                <Grid container spacing={3} align="center" justify="center" alignItems="center">


                        <Grid style={{marginTop:'150px'}}>
                            <Paper elevation={7} style = {{width:"300px",marginTop:"2%", padding:"2% 0"}}>


                                <Typography variant="subtitle1"><strong>Pay Amount : Rs.12000/=</strong> </Typography>


                            </Paper>
                            <FormControl component="fieldset">



                                        <form>

                                            <Grid container spacing={2} align="center" justify="center"
                                                  alignItems="center">


                                                <Paper style={loginStyle} elevation={11} fullWidth>
                                                    <Grid align="left">
                                                        <Typography variant="h5" align="center" style={{ marginBottom: "5%", color: "#5E4FA2", fontFamily: 'Poppins', fontWeight: "700" }}>Select your Payment Method</Typography>
                                                    </Grid>

                                                    <Grid>
                                                        <FormControl component="fieldset">

                                                            <RadioGroup aria-label="userType" name="gender1" className='d-inline-block'>

                                                                <img src={visa} width="50px"/>
                                                                <FormControlLabel value="visa" control={<Radio/>}
                                                                                  label="Visa" onChange={(event) => {

                                                                }}></FormControlLabel>

                                                                <img src={master} width="50px"/>
                                                                <FormControlLabel value="master" control={<Radio/>}
                                                                                  label="Master"
                                                                                  onChange={(event) => {

                                                                                  }}/>

                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Grid>

                                                    <br/>
                                                    <Grid>
                                                        <TextField id="outlined-basic" label="Card Number"
                                                                   variant="outlined" color="secondary" size="small"
                                                                   fullWidth required pattern="[0-9]"
                                                                   onChange={(event) => {

                                                                   }}/> <br/>
                                                    </Grid>

                                                    <Grid >
                                                        <TextField
                                                            required
                                                            id="outlined-select-currency"
                                                            select
                                                            label="Year"
                                                            size="small"
                                                            onChange={yearChange}
                                                            variant="outlined"
                                                            style={{marginTop: "10%", width: "100px" ,marginRight:'90px'}}
                                                        >
                                                            {years.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>

                                                        <TextField
                                                            required
                                                            id="outlined-select-currency"
                                                            select
                                                            label="Month"

                                                            onChange={monthChange}
                                                            variant="outlined"
                                                            size="small"
                                                            style={{marginTop: "10%", width: "100px"}}
                                                        >
                                                            {months.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </Grid>

                                                    <Grid>
                                                        <TextField id="outlined-basic" label="CVV Number"
                                                                   variant="outlined"
                                                                   style={{marginTop: "10%", width: "130px"}}
                                                                   color="secondary" size="small" fullWidth required
                                                                   pattern="[0-9]"
                                                                   onChange={(event) => {


                                                                   }}/> <br/>
                                                    </Grid>
                                                    <Grid>
                                                        <Button type="submit" variant="contained" color="secondary"
                                                                size="large" style={loginButton}
                                                                size="small">
                                                            Pay

                                                        </Button>

                                                        <Button variant="contained" color="secondary" size="large"
                                                                style={loginButton} size="small">
                                                            Cancel
                                                        </Button>
                                                    </Grid>
                                                </Paper>

                                            </Grid>
                                        </form>






                            </FormControl>
                        </Grid>





                </Grid>
            </div>
        </div>
    )
}