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
import { useState , useEffect } from "react";

function App() {
  const [page, setPage] = useState(1)
  const [allPage, setAllPage] = useState(1)
  const [products, setProducts] = useState([])

  const fetchPagination = () => {
    fetch('http://127.0.0.1:8000/api/allPagination/', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count: '6', page: `${page}` }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data)
        setAllPage(data.pageCount)
      })
  }

  useEffect(()=>{
    fetchPagination();
    console.log('1');
  },[])

  useEffect(()=>{
    console.log(products);
  },[products])

  return (
    <Router>
      <Topbar />
      <div className="containerAdmin">
        <Sidebar />
        <Switch>
          <Route exact path="/AdminHome">
            <AdminHome/>
          </Route>
          <Route path="/users">
            <UserList/>
          </Route>
          <Route exact path="/productsList">
            <AdminProduct/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;