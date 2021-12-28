import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbars/topbar";
import "./App.css"
import Home from "./components/page/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/page/userList/userList";
import User from "./components/page/user/User";
import NewUser from "./components/page/newuser/newuser";
import Product from "./components/page/product/Product";
import NewProduct from "./components/page/newProduct/NewProduct";



function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <Switch>
          <Route path="/newproduct">
             <NewProduct/>
            </Route>
            <Route path="/product">
             <Product/>
            </Route>
          <Route path="/newuser">
              <NewUser/>
            </Route>
            <Route path="/users/:UserId">
              <User />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

      </div>

    </Router>
  );
}

export default App;
