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
    const [searchPlantDataLoaded,setSearchPlantDataLoaded] = useState(false)
    const [searchToolDataLoaded,setSearchToolDataLoaded] = useState(false)
    const [searchPlantData, setSearchPlantData] = useState([])
    const [searchToolData, setSearchToolData] = useState([])
    //#########Plants
    //Search
    const [searchTextPlants , setSearchTextPlants] = useState('')
    //Sort
    const [sortKindPlants , setSortKindPlants] = useState('')
    const [sortOrderPlants , setSortOrderPlants] = useState('')
    //Filter
    const [filterPriceLowerPlants , setFilterPriceLowerPlants] = useState('')
    const [filterPriceHigherPlants , setFilterPriceHigherPlants] = useState('')
    const [fiterEnvironmentPlants , setFiterEnvironmentPlants] = useState('')
    const [filterWaterPlants , setFilterWaterPlants] = useState('')
    const [filterLightPlants , setFilterLightPlants] = useState('')
    const [filterGrowthRatePlants , setFilterGrowthRatePlants] = useState('')
    //Pagination
    const [paginationCountPlants , setPaginationCountPlants] = useState('')
    const [paginationPagePlants , setPaginationPagePlants] = useState('')

    //#########Tools
    //Search
    const [searchTextTools , setSearchTextTools] = useState('')
    //Sort
    const [sortKindTools , setSortKindTools] = useState('')
    const [sortOrderTools , setSortOrderTools] = useState('')
    //Filter
    const [filterPriceLowerTools , setFilterPriceLowerTools] = useState('')
    const [filterPriceHigherTools , setFilterPriceHigherTools] = useState('')
    const [fiterEnvironmentTools , setFiterEnvironmentTools] = useState('')
    const [filterWaterTools , setFilterWaterTools] = useState('')
    const [filterLightTools , setFilterLightTools] = useState('')
    const [filterGrowthRateTools , setFilterGrowthRateTools] = useState('')
    //Pagination
    const [paginationCountTools , setPaginationCountTools] = useState('')
    const [paginationPageTools , setPaginationPageTools] = useState('')


    function PlantsAdvanceSearch(){
      const requestOptions = {
        method: 'POST',
        headers: { 
          // 'Authorization': 'JWT ' + localStorage.getItem('access_token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         name:(searchTextPlants !== '' ? searchTextPlants:null) ,
          price: {
            lower:(filterPriceLowerPlants !== '' ? filterPriceLowerPlants:null),
            higher:(filterPriceHigherPlants !== '' ? filterPriceHigherPlants:null)
          },
          environment:(fiterEnvironmentPlants !== '' ? fiterEnvironmentPlants:null),
          water:(filterWaterPlants !== '' ? filterWaterPlants:null),
          light:(filterLightPlants !== '' ? filterLightPlants:null),
          growthRate:(filterGrowthRatePlants !== '' ? filterGrowthRatePlants:null),
          pagination:{
            count:(paginationCountPlants !== '' ? paginationCountPlants:null),
            page:(paginationPagePlants !== '' ? paginationPagePlants:null)
          },
          sort:{
            kind:(sortKindPlants !== '' ? sortKindPlants:null),
            order:(sortOrderPlants !== '' ? sortOrderPlants:null)
          },
        }),
      }
  
      console.log(requestOptions.body)
      setSearchPlantData([])
      setSearchPlantDataLoaded(false)
      setTimeout(async () => {
        const res = await fetch('http://127.0.0.1:8000/api/plantsAdvanceSearch/', requestOptions)
        const data = await res.json()
        setSearchPlantData(data)
        setSearchPlantDataLoaded(true)
        console.log('plantsData')
        console.log(data)
      }, 3000)
    }
    function ToolsAdvanceSearch(){
      const requestOptions = {
        method: 'POST',
        headers: { 
          // 'Authorization': 'JWT ' + localStorage.getItem('access_token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         name:(searchTextTools !== '' ? searchTextTools:null) ,
          price: {
            lower:(filterPriceLowerTools !== '' ? filterPriceLowerTools:null),
            higher:(filterPriceHigherTools !== '' ? filterPriceHigherTools:null)
          },
          environment:(fiterEnvironmentTools !== '' ? fiterEnvironmentTools:null),
          water:(filterWaterTools !== '' ? filterWaterTools:null),
          light:(filterLightTools !== '' ? filterLightTools:null),
          growthRate:(filterGrowthRateTools !== '' ? filterGrowthRateTools:null),
          pagination:{
            count:(paginationCountTools !== '' ? paginationCountTools:null),
            page:(paginationPageTools !== '' ? paginationPageTools:null)
          },
          sort:{
            kind:(sortKindTools !== '' ? sortKindTools:null),
            order:(sortOrderTools !== '' ? sortOrderTools:null)
          },
        }),
      }
  
      setSearchToolData([])
      setSearchToolDataLoaded(false)
      setTimeout(async () => {
        const res = await fetch('http://127.0.0.1:8000/api/toolsAdvanceSearch/', requestOptions)
        const data = await res.json()
        setSearchToolData(data)
        setSearchToolDataLoaded(true)
        console.log(data)
      }, 3000)
    }

    function handleSearchClick()
    {
      if(searchTextPlants == '' || searchTextPlants == ' ')
      {
        updateSearch()
      }
      handleSearch(searchTextPlants);
    }
    function handleChange  (e) {
        setSearchTextPlants(e.target.value.trim());
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
              item xs={20}
              sm={10}
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
            <Chip label={"You searched for "+searchTextPlants} variant="outlined"/>
            </Grid>
            <Grid 
              item xs={4}
              sm={2}
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