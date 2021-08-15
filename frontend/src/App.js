import {BrowserRouter as Router,Route} from "react-router-dom";

import Homepage from "./components/HomePage/HomePage";
import CartComponent from "./components/Cart/CartComponent";
import LoginPageComponent from "./components/LoginPage/LoginPageComponent";
import RegistrationPagecomponent from "./components/RegistrationPage/RegistrationPagecomponent";  
import Profilecomponenet from "./components/ProfilePage/Profilecomponenet";


function App() {
  return (
    <div>
      <Router>
          <Route path="/" exact component={Homepage}/>
          <Route path="/cart" exact component={CartComponent}/>
          <Route path='/signin' exact component={LoginPageComponent}/>
          <Route path='/signup' exact component={RegistrationPagecomponent}/>
          <Route path='/profile' exact component={Profilecomponenet}/>
          
      </Router>
    </div>
  );
}

export default App;
