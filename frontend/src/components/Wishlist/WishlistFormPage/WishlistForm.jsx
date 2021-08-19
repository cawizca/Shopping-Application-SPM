import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const buttonStyle = {
    color: "#fff",
    backgroundColor: "#FA334E",
    fontFamily: 'Poppins',
    fontWeight: 400,
    borderRadius: '6px',
    width: '100px',
    boxShadow: '0px 0px 3px #FA334E',
    textTransform: 'capitalize'
}

export default function WishlistForm(){

    const classes = useStyles();
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <div className="wishlist-form">
            <h4>Try to make a list for future purchases.</h4>

            <div className="wishlist-text">
                <TextField placeholder="Name" color="secondary" fullWidth/>
            </div>
            <div className="wishlist-text">
                <TextField id="standard-basic" placeholder="Description" color="secondary" fullWidth/>
            </div>
            <div className="wishlist-text">
                <FormControl className={classes.formControl} fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={"Vegetable"}>Vegetable</MenuItem>
                        <MenuItem value={"Meat"}>Meat</MenuItem>
                        <MenuItem value={"SeaFoods"}>SeaFoods</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="wishlist-text">
                <TextField placeholder="Products" color="secondary" fullWidth/>
            </div>

            <div className="wishlist-button">
                <Button style={buttonStyle}>Create</Button>
            </div>
        </div>
    );
}