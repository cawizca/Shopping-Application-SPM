import React, { useState, useEffect } from 'react';
import ProfileMiddleSection from "./ProfileMiddleSection";
import NavBar from "../HomePage/NavBar/NavBar"
import axios from "axios";


function Profilecomponenet(){

    const [userType, setUserType] = useState('');

    useEffect(()=>{
        const getusertype = async () => {
            const access_token = localStorage.getItem('token')
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                }
            }
            axios.get('http://localhost:8070/user/post', config).then((response) => {
                if (response.data.message) {
                    alert(response.data.message)
                } else {
                    setUserType(response.data.user.usertype)
                }
            })
                .catch()
        };
        getusertype();
    });

    return(<div>
        <NavBar getUserType={userType}/>
        <ProfileMiddleSection />
    </div>);
}

export default  Profilecomponenet;