import React from "react";
import Search from '../../Images/Search/search.jpg'
import ShowProduct from "../ShowProduct/ShowProduct";
import { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import {TextField} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import { Home } from "@material-ui/icons";
import "./SearchResultProduct.css"
import history from "../../history";
import { Chip } from "@mui/material";
import { CircularProgress } from "@mui/material";

function SearchResultProduct(props){ 
    const [searchPlantData, setSearchPlantData] = useState([])
    const [searchToolData, setSearchToolData] = useState([])
    const [searchText , setSearchText] = useState('')

    function handleSearchClick()
    {
      if(searchText == '' || searchText == ' ')
      {
        updateSearch()
      }
      handleSearch(searchText);
    }
    function handleChange  (e) {
        setSearchText(e.target.value.trim());
      }
    const updateSearch = () => {
      async function fetchProductData() {
        await fetch('http://127.0.0.1:8000/api/plantsList/')
          .then((response) => response.json())
          .then((data) => {
            setSearchPlantData(data)
            console.log(data)
          })
      }
      async function fetchToolData() {
        await fetch('http://127.0.0.1:8000/api/toolsList/')
          .then((response) => response.json())
          .then((data) => {
            setSearchToolData(data)
            console.log(data)
          })
      }
      fetchProductData()
      fetchToolData()
    };
    const handleSearch = (name) => {
        console.log('0');
        function fetchSearchProductData() {
            fetch('http://127.0.0.1:8000/api/plantsByName/'+name+'/')
              .then((response) => response.json())
              .then((data) => {
                setSearchPlantData(data)
                console.log(data)
              })
          }
        function fetchSearchToolData() {
            fetch('http://127.0.0.1:8000/api/toolsByName/'+name+'/')
              .then((response) => response.json())
              .then((data) => {
                setSearchToolData(data)
                console.log(data)
              })
          }
          fetchSearchProductData()
          fetchSearchToolData()
      }

    useEffect(() => {
      async function fetchProductData() {
        await fetch('http://127.0.0.1:8000/api/plantsList/')
          .then((response) => response.json())
          .then((data) => {
            setSearchPlantData(data)
            console.log(data)
          })
      }
      async function fetchToolData() {
        await fetch('http://127.0.0.1:8000/api/toolsList/')
          .then((response) => response.json())
          .then((data) => {
            setSearchToolData(data)
            console.log(data)
          })
      }
      fetchProductData()
      fetchToolData()
    }, [])
    return(
        <div>
          <div style={{backgroundImage:`url(${Search})` , backgroundSize: 'cover', overflow: 'hidden', height:'8' , padding:5 , display: 'flex' }}>
          <Grid
              item xs={12}
              sm={6}
              display="flex"
              marginLeft={0}
              className="home"
            >  
            <TextField
              onChange={(e) => handleChange(e)}
              size="medium"
              id="outlined-search"
              name="SearchField"
              label="Search.."
              type="search">
            </TextField>
            <IconButton onClick={() => handleSearchClick()}>
              <SearchIcon
              className="Searchicon"
              fontSize="large"/>
            </IconButton>         
            <Chip label={"You searched for "+searchText} variant="outlined"/>
            </Grid>
            <Grid 
              item xs={12}
              sm={6}
              alignItems='flex-end'
              justifyContent='flex-end'
              className="searchBox">
              <IconButton onClick={() => history.push("/")}>
              <Home 
              fontSize="large"/>
              Home
            </IconButton>
            </Grid>
          </div>
            
            <br/>
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid item xs={6} sm={3} style={{ padding: 10 }}>                    
                </Grid>
                <Grid
                container
                item
                xs={18}
                sm={9}
                alignItems='flex-start'
                direction='column'
                justify='space-between'
                style={{ padding: 10 }}>
                  <ShowProduct plants = {searchPlantData} tools = {searchToolData}/>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default SearchResultProduct