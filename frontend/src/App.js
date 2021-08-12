import {BrowserRouter as Router,Route} from "react-router-dom";

import Homepage from "./components/HomePage/HomePage";
import CartComponent from "./components/Cart/CartComponent";

function App() {
  return (
    <div>
      <Router>
          <Route path="/" exact component={Homepage} />
          <Route path="/cart" exact component={CartComponent} />
      </Router>
    </div>
  );
}

export default App;
