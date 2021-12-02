import React, { useEffect, useState } from 'react';
import "./HomePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import ShowProduct from '../../Components/ShowProduct/ShowProduct';
import Pagination from '@mui/material/Pagination';

function HomePage(){
  const[page,setPage]=useState(1)
  const[products,setProducts]=useState([])
  //useEffect(()=>{fetchPagination()},[])
  useEffect(()=>{fetchPagination()},[page])
  const handleChange = (event, value) => {
    setPage(value)
    }
  const fetchPagination= ()=>{
    fetch('http://127.0.0.1:8000/api/allPagination/', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({count:'6' , page:`${page}` })
    }).then(res => res.json())
      .then(
        (data) => { 
          setProducts(data.data)
      })

  }
    
      return(
        <div className="home_elements">
        <Navbar/>
        <ShowProduct data={products}/>
        <Pagination className="pagination_center" count={3} page={page} onChange={handleChange}/>
        </div>
      )
  }

export default HomePage;