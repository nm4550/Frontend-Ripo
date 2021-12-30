import "./AdminUserList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from "../../dummyData";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';

export default function UserList() {
  const [page, setPage] = useState(1)
  const [allPage, setAllPage] = useState(1)
  const [products, setProducts] = useState([])
  const [data, setData] = useState(productRows);
  
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { 
      field: "id", headerName: "ID", width: 80 , headerAlign: 'center' ,
      renderCell: (params) => {
      return (
        <div className="productListItem">
          {params.row.id}
        </div>
      );
    }, 
    },
    { field: "first_name", headerName: "First name", width: 120 , headerAlign: 'center',
    renderCell: (params) => {
      return (
        <div className="productListItem">
          {params.row.first_name}
        </div>
      );
    }, 
    },
    { field: "last_name", headerName: "Last name", width: 120 , headerAlign: 'center' ,
    renderCell: (params) => {
      return (
        <div className="productListItem">
          {params.row.last_name}
        </div>
      );
    }, 
    },
    {
      field: "user_name",
      headerName: "User name", 
      headerAlign: 'center' ,
      width: 120,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.user_name}
          </div>
        );
      },
    },
    { 
      field: "email", headerName: "Email", width: 180 , headerAlign: 'center' ,
      renderCell: (params) => {
      return (
        <div className="productListItem">
          {params.row.email}
        </div>
      );
    }, 
    },  
    { field: "Actions", headerName: "Actions", width: 100 , headerAlign: 'center' ,
    renderCell: () => {
      return (
        <div>
          <Link to="/user/:userId">
            <IconButton>
              <EditIcon/>
            </IconButton>
          </Link>
          <IconButton>
            <DeleteOutlineIcon/>
          </IconButton> 
        </div>
              
      );
    }, 
    },
  ];
  // const rows = [
  //   {
  //     id:1 , id:"Elnaz"
  //   }
  // ];
  const fetchPagination = () => {
    fetch('http://127.0.0.1:8000/api/specialist/all-primary/', {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
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
    <div className="productList">
      <Link to="/newUser" className="LinkFab">
        <Fab variant="extended" className="userAddButton">
          <AddIcon sx={{ mr: 1 }} />
          Add Specialist
        </Fab>
      </Link>
      <DataGrid
        align= 'center'
        textCenter
        className="DataTable"
        rows={products}
        disableSelectionOnClick
        columns={columns}
        pageSize={6}
        checkboxSelection
      />
    </div>
  );
}