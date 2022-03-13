import {useContext} from "react";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import {Redirect, Switch, Route} from "react-router-dom";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Login from "./component/Login";
import UserContext from "./context/UserContext";
function App() {
  const userCtx = useContext(UserContext);
  return (
    <>
      <Navbar />
      {userCtx.state.token ? (
        <Switch>
          {/* <Route exact path="/add-products/" component={Product} /> */}
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          {/* <Route exact path="/add-products" component={Product} /> */}
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      )}
    </>
  );
}

export default App;
