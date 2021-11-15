import Search from '../../Images/Search/search.jpg'
import SearchIcon from '@mui/icons-material/Search';
import {TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Home } from "@mui/icons-material";
import "./SearchResultProduct.css"
import history from "../../history";
import { Chip } from "@mui/material";
import React,{useEffect,useState} from 'react' ;
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductIcon1 from "../productIcon/productIcon1";
import ProductIcon2 from "../productIcon/productIcon2";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center'
}));

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
          <div style={{backgroundImage:`url(${Search})` , backgroundSize: 'cover', overflow: 'hidden' , padding:5 , display: 'flex' }}>
          <Grid
              item xs={12}
              sm={6}
              display="flex"
              marginLeft={0}
              className="home"
            >  
            <TextField
              onChange={(e) => handleChange(e)}
              size="small"
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
              <IconButton href="/" onClick={() => history.push("/")}>
              <Home 
              fontSize="large"/>
              Home
            </IconButton>
            </Grid>
          </div>
            
            <br/>
            <Grid container style={{ minHeight: '100vh' }} xs={24}>
                <Grid item xs={6} sm={3} style={{ padding: 10 }}>                    
                </Grid>
                <Grid
                container
                item
                xs={18}
                sm={9}
                alignItems='flex-start'
                justify='space-between'
                style={{ padding: 10 }}>
                  <div>
        <Box sx={{ width: '100%' }}>
        <div className="showProductSubs">
          Plants
        </div>
        <Grid  container spacing={2}>
          {searchPlantData.map(
            p => 
            <Grid  item xs={12} sm={4} md={3}>
            <Item className="showProductsIcons">
              <ProductIcon2 key = {p.id} product={p}/>
            </Item>
          </Grid>
          )}
        </Grid>
        </Box>
        <Box sx={{ width: '100%' }}>
        <div className="showProductSubs">
          Tools 
        </div>
        <Grid  container spacing={2}>
        {searchToolData.map(
            Tool => 
            <Grid  item xs={12} sm={4} md={3}>
            <Item className="showProductsIcons">
              <ProductIcon1 product={Tool}/>
            </Item>
          </Grid>
          )}
        </Grid>
      </Box>
      </div>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default SearchResultProduct