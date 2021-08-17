import {BrowserRouter as Router,Route} from "react-router-dom";

import Homepage from "./components/HomePage/HomePage";
import CartComponent from "./components/Cart/CartComponent";

import LoginPageComponent from "./components/LoginPage/LoginPageComponent";
import RegistrationPagecomponent from "./components/RegistrationPage/RegistrationPagecomponent";  
import Profilecomponenet from "./components/ProfilePage/Profilecomponenet";

import AdminNavbar from "./components/Admin/AdminNavigation";

import Rider from "./components/Admin/Rider/Rider";
import ManageOrder from "./components/Admin/Rider/ManageOrder";
import DeleteRider from "./components/Admin/Rider/Table/DeleteRider";

import WishlistComponent from "./components/Wishlist/WishlistComponent";
import ManageProducts from "../src/components/ProductsComponent/adminProductManage"
import ShoppingProducts from '../src/components/ProductsComponent/CustomerAllShopping'




function App() {
  return (
    <div>
      <Router>

          <Route path="/" exact component={Homepage}/>
          <Route path="/cart" exact component={CartComponent}/>
          <Route path='/signin' exact component={LoginPageComponent}/>
          <Route path='/signup' exact component={RegistrationPagecomponent}/>
          <Route path='/profile' exact component={Profilecomponenet}/>
          <Route path="/admin" exact component={AdminNavbar} />

          <Route path="/rider" exact component={Rider} />
          <Route path="/orders" exact component={ManageOrder} />
          <Route path="/delete" exact component={DeleteRider} />

          <Route path="/wishlist" exact component={WishlistComponent} />
          <Route path="/productManage" exact component={ManageProducts} />
          <Route path="/ShoppingAll" exact component={ShoppingProducts} />


      </Router>
    </div>
  );
}

export default App;
