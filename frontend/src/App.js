import {BrowserRouter as Router,Route} from "react-router-dom";

import Homepage from "./components/HomePage/HomePage";
import CartComponent from "./components/Cart/CartComponent";
import AdminNavbar from "./components/Admin/AdminNavigation";


function App() {
  return (
    <div>
      <Router>
          <Route path="/" exact component={Homepage} />
          <Route path="/cart" exact component={CartComponent} />
          <Route path="/admin" exact component={AdminNavbar} />

      </Router>
    </div>
  );
}

export default App;
