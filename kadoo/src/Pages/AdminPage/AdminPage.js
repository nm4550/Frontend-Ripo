import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";
import "./AdminPage.css";
import AdminHome from "../../Pages/AdminHome/AdminHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminUserList from "../../Pages/AdminUserList/AdminUserList";
import AdminUser from "../../Pages/AdminUser/AdminUser";
import AdminNewUser from "../../Pages/AdminNewUser/AdminNewUser";
import AdminProductList from "../../Pages/AdminProductList/AdminProductList";
import AdminProduct from "../../Pages/AdminProduct/AdminProduct";
import AdminNewProduct from "../../Pages/AdminNewProduct/AdminNewProduct";
import UserList from "../../Pages/AdminUserList/AdminUserList";
import { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="containerAdmin">
        <Sidebar />
        <Switch>
          <Route exact path="/AdminPage/AdminHome">
            <AdminHome />
          </Route>
          <Route path="/AdminPage/specialist">
            <UserList />
          </Route>
          <Route path="/AdminPage/user/:userId/" component={AdminUser}/>
          <Route path="/AdminPage/newUser">
            <AdminNewUser />
          </Route>
          <Route exact path="/AdminPage/productsList">
            <AdminProductList />
          </Route>
          <Route path="/AdminPage/newProduct">
            <AdminNewProduct />
          </Route>
          <Route path="/AdminPage/product/:productId">
            <AdminProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
