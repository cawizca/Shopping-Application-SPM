import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';


const buttonStyle = {
    backgroundColor: "#f7312a",
    color: "#fafafa",
    fontWeight: 700,
    fontSize: "18px",
    fontFamily: 'Montserrat',
    height: "50px",
    width: "500px",
    borderRadius: "8px",
    zIndex: "99",
    marginTop: "5%"
}

const buttonSignUp = {
    color: "#5E4FA2",
    fontWeight: 700,
    fontSize: "18px",
    fontFamily: 'Montserrat',
    height: "50px",
    width: "500px",
    borderRadius: "8px",
    border: "3px solid #5E4FA2",
}

const inputBoxStyle = {
    width: "500px",
    marginTop: "3%"
}

const hrStyle = {
    marginBottom: "10%",
    marginTop: "10%",
    border: "1px solid #5E4FA2",
    opacity: "23%"
}

const h1Style = {
    color: "#5E4FA2",
    fontSize: "45px",
    fontWeight: "600",
    fontFamily: "Montserrat"
}

const pStyle = {
    color: "#5E4FA2",
    fontSize: "25px",
    fontWeight: "400"
}


function MiddleSection() {

    const location = useLocation();
    const [username, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword,setConPassword] = useState("")
    const [usertype, setUser] = useState("")
    const [check, setCheck] = useState("")
    const [userType, setUserType] = useState('Customer')
    const history = useHistory()


    function register(e) {
        e.preventDefault();

        const newUser = {
            username,
            email,
            password,
            userType
        }
        if (check != "true") {
            alert("Accept terms and conditions")
        } else if(password != cpassword){
            alert("Password dosent match")
        }
        else {
            axios.post("http://localhost:8070/user/register", newUser).then((response) => {
                console.log(newUser)
                if (response.data.Error) {
                    alert(response.data.Error)
                    document.getElementById("myForm").reset();
                } else {
                    alert(response.data.message)
                    document.getElementById("myForm").reset();
                    history.push("/signin")
                }
            }).catch((err) => {
                alert(err.message)
            })
        }
    }


    return (
        <div>
            <Container fluid>
                <Row>
                    <Col lg={5} sm={12} style={{ backgroundColor: "#ECE6F2", paddingTop: "5%" }}>
                        

                    </Col>

                    <Col lg={7} sm={12} className="wholeColumn">
                        <div className="container">

                            <hr width="20%" align="left" className="hrStyle" />
                            <p className="pStyle" >
                                Create your Account
                            </p>

                            <form id="myForm">

                                <div className="form-group">
                                    <TextField variant="outlined" fullWidth size="small" label="Username" style={inputBoxStyle} type="text" className="form-control" id="username"
                                        onChange={(event) => {
                                            setName(event.target.value)
                                        }} />
                                </div>
                                <div className="form-group">
                                    <TextField variant="outlined" fullWidth size="small" label="Email" style={inputBoxStyle} type="text" className="form-control" id="age"
                                        onChange={(event) => {
                                            setEmail(event.target.value)
                                        }} />
                                </div>
                                <div className="form-group">
                                    <TextField variant="outlined" fullWidth size="small" label="Password" style={inputBoxStyle} type="text" className="form-control" id="age"
                                        onChange={(event) => {
                                            setPassword(event.target.value)
                                        }} />
                                </div>
                                <div className="form-group">
                                    <TextField variant="outlined" fullWidth size="small" label="Confirm Password" style={inputBoxStyle} type="text" className="form-control" id="age"
                                        onChange={(event) => {
                                            setConPassword(event.target.value)
                                        }} />
                                </div>

                                <div className="form-group">
                                    <input type="checkbox" value="true" id="flexCheckDefault" onChange={(event) => {
                                        setCheck(event.target.value)
                                    }} />
                                    <label style={{ marginLeft: "2%" , color: "white" , marginTop: "3%"} }>
                                        I agreed terms and conditions.
                                    </label>
                                    <br />
                                </div>

                                <Button style={buttonStyle} type="submit" className="btn btn-primary" onClick={register}>Sign In</Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default MiddleSection;
