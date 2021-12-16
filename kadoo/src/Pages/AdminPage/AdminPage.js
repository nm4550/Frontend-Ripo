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

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <AdminHome />
          </Route>
          <Route path="/AdminUserList">
            <AdminUserList />
          </Route>
          <Route path="/AdminUser/:userId">
            <AdminUser />
          </Route>
          <Route path="/AdminNewUser">
            <AdminNewUser />
          </Route>
          <Route path="/AdminProductList">
            <AdminProductList />
          </Route>
          <Route path="/AdminProduct/:productId">
            <AdminProduct />
          </Route>
          <Route path="/AdminNewProduct">
            <AdminNewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;