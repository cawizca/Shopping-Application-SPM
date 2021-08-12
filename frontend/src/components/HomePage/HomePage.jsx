import NavBar from "./NavBar/NavBar";
import HomeMiddle from "./Middle Section/HomeMiddle";
import '../../styles/home.css'

function Homepage(){
    return(
        <div>
            <NavBar />
            <HomeMiddle />
        </div>
    );
}

export default Homepage;