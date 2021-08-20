import NavBar from "./NavBar/NavBar";
import HomeMiddle from "./Middle Section/HomeMiddle";
import '../../styles/home.css';
import {useEffect, useState} from "react";
import axios from "axios";

function Homepage(){

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

    return(
        <div>
            <NavBar getUserType={userType}/>
            <HomeMiddle />
        </div>
    );
}

export default Homepage;