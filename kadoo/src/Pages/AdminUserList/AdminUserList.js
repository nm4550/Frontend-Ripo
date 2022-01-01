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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function UserList() {
  const [page, setPage] = useState(1)
  const [allPage, setAllPage] = useState(1)
  const [products, setProducts] = useState([])
  const [data, setData] = useState(productRows);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  
  const handleDelete = (id) => {
    fetch('http://127.0.0.1:8000/api/specialist/delete/:id', { method: 'DELETE' })
    .then(() => alert('Delete successful'));
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
    { field: "first_name", headerName: "First name", width: 180 , headerAlign: 'center',
    renderCell: (params) => {
      return (
        <div className="productListItem">
          {params.row.first_name}
        </div>
      );
    }, 
    },
    { field: "last_name", headerName: "Last name", width: 250 , headerAlign: 'center' ,
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
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.user_name}
          </div>
        );
      },
    },
    { 
      field: "email", headerName: "Email", width: 280 , headerAlign: 'center' ,
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
          <Link to="/AdminPage/user/:userId">
            <IconButton>
              <EditIcon/>
            </IconButton>
          </Link>
          <IconButton onClick={handleClickOpen}>
            <DeleteOutlineIcon/>
          </IconButton> 
          <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
            {"Delete confirmation"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this item?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                No
              </Button>
              <Button onClick={handleDelete} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
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
      <Link to="/AdminPage/newUser" className="LinkFab">
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