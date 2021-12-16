import "./AdminProductList.css";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductList(props) {

  const columns = [
    { field: "id", headerName: "ID", width: 90 ,
    renderCell: (params) => {
      return (
        <div className="productListItem">
          {params.row.id}
        </div>
      );
    }, 
    },
    {
      field: "image",
      headerName: "image",
      width: 200,
      renderCell: (params) => {
        console.log(params.row.name);
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
          </div>
        );
      },
    },
    { field: "name", headerName: "name", width: 200 , 
    renderCell: (params) => {
      return (
        <div className="productListItem">
          {params.row.name}
        </div>
      );
    }, 
    },
  ];
  
  return (
    <div className="productList">
      <DataGrid
        rows={props.products}
        disableSelectionOnClick
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
  );
}