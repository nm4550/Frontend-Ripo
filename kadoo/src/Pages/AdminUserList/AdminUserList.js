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

export default function UserList() {
  const [page, setPage] = useState(1)
  const [allPage, setAllPage] = useState(1)
  const [products, setProducts] = useState([])
  const [data, setData] = useState(productRows);
  
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "name", headerName: "Name", width: 180 , headerAlign: 'center' ,
    renderCell: (params) => {
      return (
        <div className="productListItem">
          {params.row.name}
        </div>
      );
    }, 
    },
    {
      field: "image",
      headerName: "Image", 
      headerAlign: 'center' ,
      width: 80,
      renderCell: (params) => {
        console.log(params.row.name);
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
          </div>
        );
      },
    },
    { field: "price", headerName: "Price", width: 70 , headerAlign: 'center',
    renderCell: (params) => {
      return (
        <div className="productListItem">
          ${params.row.price}
        </div>
      );
    }, 
    },
    { field: "count", headerName: "Count", width: 80 , headerAlign: 'center' ,
    renderCell: (params) => {
      return (
        <div className="productListItem">
          {params.row.count}
        </div>
      );
    }, 
    },
    { field: "Actions", headerName: "Actions", width: 100 , headerAlign: 'center' ,
    renderCell: () => {
      return (
        <div>
          <IconButton>
            <EditIcon/>
          </IconButton>
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
    fetch('http://127.0.0.1:8000/api/allPagination/', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count: '999', page: `${page}` }),
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
    <div className="productList">
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