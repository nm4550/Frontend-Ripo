import Search from '../../Images/Search/search.jpg'
import ShowPlants from '../../Components/ShowProduct/ShowPlants'
import ShowTools from '../../Components/ShowProduct/ShowTools'
import SkeletonArticle from '../../Components/Cart/SkeletonArticle'
import SearchIcon from '@mui/icons-material/Search'
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { Home } from '@mui/icons-material'
import './SearchResultProduct.css'
import history from '../../history'
import { Chip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ProductIcon1 from '../productIcon/productIcon1'
import ProductIcon2 from '../productIcon/productIcon2'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}))

function SearchResultProduct(props) {
  const [searchPlantDataLoaded, setSearchPlantDataLoaded] = useState(false)
  const [searchToolDataLoaded, setSearchToolDataLoaded] = useState(false)
  const [searchPlantData, setSearchPlantData] = useState([])
  const [searchToolData, setSearchToolData] = useState([])
  const [sortSelectMenu, setSortSelectMenu] = useState(0)
  const [searchText, setSearchText] = useState('')
  ///////////////////// Advance Serach States /////////////////////
  //#########Plants
  //Search
  const [searchTextPlants, setSearchTextPlants] = useState('')
  //Sort
  const [sortKindPlants, setSortKindPlants] = useState('')
  const [sortOrderPlants, setSortOrderPlants] = useState('')
  //Filter
  const [filterPriceLowerPlants, setFilterPriceLowerPlants] = useState('')
  const [filterPriceHigherPlants, setFilterPriceHigherPlants] = useState('')
  const [fiterEnvironmentPlants, setFiterEnvironmentPlants] = useState('')
  const [filterWaterPlants, setFilterWaterPlants] = useState('')
  const [filterLightPlants, setFilterLightPlants] = useState('')
  const [filterGrowthRatePlants, setFilterGrowthRatePlants] = useState('')
  //Pagination
  const [paginationCountPlants, setPaginationCountPlants] = useState('')
  const [paginationPagePlants, setPaginationPagePlants] = useState('')
  const [resultPaginationPagePlants, setResultPaginationPagePlants] =
    useState(0)

  //#########Tools
  //Search
  const [searchTextTools, setSearchTextTools] = useState('')
  //Sort
  const [sortKindTools, setSortKindTools] = useState('')
  const [sortOrderTools, setSortOrderTools] = useState('')
  //Filter
  const [filterPriceLowerTools, setFilterPriceLowerTools] = useState('')
  const [filterPriceHigherTools, setFilterPriceHigherTools] = useState('')
  //Pagination
  const [paginationCountTools, setPaginationCountTools] = useState('')
  const [paginationPageTools, setPaginationPageTools] = useState('')
  const [resultPaginationPageTools, setResultPaginationPageTools] = useState(0)

  function PlantsAdvanceSearch() {
    const requestOptions = {
      method: 'POST',
      headers: {
        // 'Authorization': 'JWT ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: searchTextPlants !== '' ? searchTextPlants : null,
        price: {
          lower: filterPriceLowerPlants !== '' ? filterPriceLowerPlants : null,
          higher:
            filterPriceHigherPlants !== '' ? filterPriceHigherPlants : null,
        },
        environment:
          fiterEnvironmentPlants !== '' ? fiterEnvironmentPlants : null,
        water: filterWaterPlants !== '' ? filterWaterPlants : null,
        light: filterLightPlants !== '' ? filterLightPlants : null,
        growthRate:
          filterGrowthRatePlants !== '' ? filterGrowthRatePlants : null,
        pagination: {
          count: paginationCountPlants !== '' ? paginationCountPlants : null,
          page: paginationPagePlants !== '' ? paginationPagePlants : null,
        },
        sort: {
          kind: sortKindPlants !== '' ? sortKindPlants : null,
          order: sortOrderPlants !== '' ? sortOrderPlants : null,
        },
      }),
    }

    console.log(requestOptions.body)
    console.log(1)
    setSearchPlantData([])
    setSearchPlantDataLoaded(false)
    console.log(2)
    setTimeout(async () => {
      const res = await fetch(
        'http://127.0.0.1:8000/api/plantsAdvanceSearch/',
        requestOptions
      )
      const data = await res.json()
      console.log(3)
      setSearchPlantData(data.data)
      setResultPaginationPagePlants(data.pageCount)
      setSearchPlantDataLoaded(true)
      console.log('plantsData')
      console.log(data)
    }, 3000)
  }
  function ToolsAdvanceSearch() {
    const requestOptions = {
      method: 'POST',
      headers: {
        // 'Authorization': 'JWT ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: searchTextTools !== '' ? searchTextTools : null,
        price: {
          lower: filterPriceLowerTools !== '' ? filterPriceLowerTools : null,
          higher: filterPriceHigherTools !== '' ? filterPriceHigherTools : null,
        },
        pagination: {
          count: paginationCountTools !== '' ? paginationCountTools : null,
          page: paginationPageTools !== '' ? paginationPageTools : null,
        },
        sort: {
          kind: sortKindTools !== '' ? sortKindTools : null,
          order: sortOrderTools !== '' ? sortOrderTools : null,
        },
      }),
    }
    console.log(requestOptions.body)
    setSearchToolData([])
    setSearchToolDataLoaded(false)
    setTimeout(async () => {
      const res = await fetch(
        'http://127.0.0.1:8000/api/toolsAdvanceSearch/',
        requestOptions
      )
      const data = await res.json()
      setSearchToolData(data.data)
      setResultPaginationPageTools(data.pageCount)
      setSearchToolDataLoaded(true)
      console.log(data)
    }, 3000)
  }

  function handleSearchClick() {
    if (searchTextPlants == '' || searchTextPlants == ' ') {
      updateSearch()
    }
    handleSearch(searchTextPlants)
  }
  function handleChange(e) {
    setSearchText(e.target.value.trim())
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
  }
  const handleSearch = (name) => {
    console.log('0')
    function fetchSearchProductData() {
      fetch('http://127.0.0.1:8000/api/plantsByName/' + name + '/')
        .then((response) => response.json())
        .then((data) => {
          setSearchPlantData(data)
          console.log(data)
        })
    }
    function fetchSearchToolData() {
      fetch('http://127.0.0.1:8000/api/toolsByName/' + name + '/')
        .then((response) => response.json())
        .then((data) => {
          setSearchToolData(data)
          console.log(data)
        })
    }
    fetchSearchProductData()
    fetchSearchToolData()
  }
  ////////////////////// Sort Functions //////////////////////
  // 1) Sort By Name Plants
  const handlePlantsSortBy_Name_ASC = () => {
    setSortSelectMenu(1)
    setSortKindPlants('name')
    setSortOrderPlants('ASC')
  }
  const handlePlantsSortBy_Name_DES = () => {
    setSortSelectMenu(2)
    setSortKindPlants('name')
    setSortOrderPlants('DES')
  }
  // 2) Sort By Price Plants
  const handlePlantsSortBy_Price_ASC = () => {
    setSortSelectMenu(3)
    setSortKindPlants('price')
    setSortOrderPlants('ASC')
  }
  const handlePlantsSortBy_Price_DES = () => {
    setSortSelectMenu(4)
    setSortKindPlants('price')
    setSortOrderPlants('DES')
  }
  // 3) Sort By Time Plants
  const handlePlantsSortBy_Time_ASC = () => {
    setSortSelectMenu(5)
    setSortKindPlants('time')
    setSortOrderPlants('ASC')
  }
  const handlePlantsSortBy_Time_DES = () => {
    setSortSelectMenu(6)
    setSortKindPlants('time')
    setSortOrderPlants('DES')
  }
  // 4) Sort By Name Tools
  const handleToolsSortBy_Name_ASC = () => {
    
    setSortKindTools('name')
    setSortOrderTools('ASC')
  }
  const handleToolsSortBy_Name_DES = () => {
    
    setSortKindTools('name')
    setSortOrderTools('DES')
  }
  // 5) Sort By Price Tools
  const handleToolsSortBy_Price_ASC = () => {
    
    setSortKindTools('price')
    setSortOrderTools('ASC')
  }
  const handleToolsSortBy_Price_DES = () => {
    
    setSortKindTools('price')
    setSortOrderTools('DES')
  }
  // 6) Sort By Time Tools
  const handleToolsSortBy_Time_ASC = () => {
    
    setSortKindTools('time')
    setSortOrderTools('ASC')
  }
  const handleToolsSortBy_Time_DES = () => {
    
    setSortKindTools('time')
    setSortOrderTools('DES')
  }
  ////////////////////// Search Functions //////////////////////
  // 1) Serach Plants By Name
  const handleSearchPlantsByName = (name) => {
    setSearchTextPlants(name)
  }
  // 2) Serach Tools By Name
  const handleSearchToolsByName = (name) => {
    setSearchTextTools(name)
  }
  ////////////////////// Filter Functions //////////////////////
  // 1) Filter By Price Plants
  const handleFilterPricePlants = (lower, higher) => {
    setFilterPriceLowerPlants(lower)
    setFilterPriceHigherPlants(higher)
  }
  // 2) Filter By Water Plants
  const handleFilterWater = (value) => {
    setFilterWaterPlants(value)
  }
  // 3) Filter By Light Plants
  const handleFilterLight = (value) => {
    setFilterLightPlants(value)
  }
  // 4) Filter By Growthrate Plants
  const handleFilterGrowthrate = (value) => {
    setFilterGrowthRatePlants(value)
  }
  // 5) Filter By Growthrate Plants
  const handleFilterEnvironment = (value) => {
    setFiterEnvironmentPlants(value)
  }
  // 6) Filter By Price Tools
  const handleFilterPriceTools = (lower, higher) => {
    setFilterPriceLowerTools(lower)
    setFilterPriceHigherTools(higher)
  }
  ////////////////////// Pagination Functions //////////////////////
  // 1) Pagination Plants
  const handlePaginationPlants = (count, page) => {
    setPaginationCountPlants(count)
    setPaginationPagePlants(page)
  }
  // 2) Pagination Tools
  const handlePaginationTools = (count, page) => {
    setPaginationCountTools(count)
    setPaginationPageTools(page)
  }

  useEffect(() => {
    if (sortKindPlants !== '' && sortOrderPlants !== '') {
      PlantsAdvanceSearch()
    }
    if (sortKindTools !== '' && sortOrderTools !== '') {
      ToolsAdvanceSearch()
    }
    if (
      filterGrowthRatePlants !== '' &&
      filterLightPlants !== '' &&
      fiterEnvironmentPlants !== '' &&
      filterWaterPlants !== '' &&
      filterPriceHigherPlants !== '' &&
      filterPriceLowerPlants !== ''
    ) {
      PlantsAdvanceSearch()
    }
    if (filterPriceHigherTools !== '' && filterPriceLowerTools !== '') {
      ToolsAdvanceSearch()
    }
    if (searchTextPlants !== '') {
      PlantsAdvanceSearch()
    }
    if (searchTextTools !== '') {
      ToolsAdvanceSearch()
    }
    if (paginationCountPlants !== '' && paginationPagePlants !== '') {
      PlantsAdvanceSearch()
    }
    if (paginationCountTools !== '' && paginationPageTools !== '') {
      ToolsAdvanceSearch()
    }
  }, [
    sortKindPlants,
    sortOrderPlants,
    sortKindTools,
    sortOrderTools,
    filterGrowthRatePlants,
    filterLightPlants,
    fiterEnvironmentPlants,
    filterPriceHigherPlants,
    filterPriceHigherTools,
    filterPriceLowerPlants,
    filterPriceLowerTools,
    filterWaterPlants,
    searchTextPlants,
    searchTextTools,
    paginationCountPlants,
    paginationCountTools,
    paginationPagePlants,
    paginationPageTools,
  ])

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
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Search})`,
          backgroundSize: 'cover',
          overflow: 'hidden',
          padding: 5,
          display: 'flex',
        }}
      >
        <Grid
          item
          xs={20}
          sm={10}
          display='flex'
          marginLeft={0}
          className='home'
        >
          <TextField
            onChange={(e) => handleChange(e)}
            size='small'
            id='outlined-search'
            name='SearchField'
            label='Search..'
            type='search'
          ></TextField>
          {/* ////////////////////////// Samples ////////////////////////// */}
          {/* /////// Search /////// */}
          {/* <Button onClick={() => handleSearchPlantsByName(searchText)}></Button> */} 
         

          <IconButton>
            <SearchIcon className='Searchicon' fontSize='large' />
          </IconButton>
          <Chip
            label={'You searched for ' + searchTextPlants}
            variant='outlined'
          />
        </Grid>
        <Grid
          item
          xs={4}
          sm={2}
          alignItems='flex-end'
          justifyContent='flex-end'
          className='searchBox'
        >
          <IconButton href='/' onClick={() => history.push('/')}>
            <Home fontSize='large' />
            Home
          </IconButton>
        </Grid>
      </div>

      <br />
      <Grid container style={{ minHeight: '100vh' }} xs={24}>
        <Grid item xs={6} sm={3} style={{ padding: 10 }}>
          {/* ////////////////////////// Sidbar For Filter ////////////////////////// */}
          {/* /////// Filter /////// */}
          {/* <Button onClick={() => handleFilterEnvironment(VALUEFROMUSER)}></Button> */}
        </Grid>
        <Grid
          container
          item
          xs={18}
          sm={9}
          alignItems='flex-start'
          justify='space-between'
          style={{ padding: 10 }}
        >
          <div>
            <Box sx={{ width: '100%' }}>
               
                <Stack direction="row" spacing={2}>
        <Typography variant="body" gutterBottom>
              	Sort By:</Typography>
                <Button variant= { sortSelectMenu==1 ? 'contained' : 'text'} onClick={( )=>{handlePlantsSortBy_Name_ASC( )  ;handleToolsSortBy_Name_ASC( )}  } size="small">  A to Z </Button>
                <Button variant={ sortSelectMenu==2 ? 'contained' : 'text'} onClick={( ) => {handlePlantsSortBy_Name_DES( ) ;handleToolsSortBy_Name_DES( )}}size="small">  Z to A </Button>
                <Button variant={sortSelectMenu==3 ? 'contained' : 'text'} onClick={( )=> {handlePlantsSortBy_Price_ASC( )  ;handleToolsSortBy_Price_ASC()}}size="small">  ACS Price </Button>
                <Button variant={ sortSelectMenu==4 ? 'contained' : 'text'} onClick={( )=> {handlePlantsSortBy_Price_DES( ) ;handleToolsSortBy_Price_DES() }}size="small"> DES Price </Button>
                <Button variant={ sortSelectMenu==5 ? 'contained' : 'text'} onClick={( )=>{handlePlantsSortBy_Time_ASC( )   ;handleToolsSortBy_Time_ASC() } }size="small"> ACS time  </Button>
                <Button variant={ sortSelectMenu==6 ? 'contained' : 'text'} onClick={( )=>{handlePlantsSortBy_Time_DES( )   ;handleToolsSortBy_Time_DES( ) }}size="small"> DES time  </Button>

                
               
               
                </Stack>    
              <Box>
                {/*<div className='showProductSubs'>Plants</div>
                <Divider variant='middle' />*/}
                {( Array.isArray(searchPlantData) && searchPlantData.length != 0) && (
                  <div>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <ShowPlants data={searchPlantData} />
                    </Grid>
                  </div>
                )}
                
                { ( Array.isArray(searchPlantData) && searchPlantData.length === 0) && (
                  <div>
                    {searchPlantDataLoaded === true && (
                      <Alert severity='error'>
                        There is NO plant right now! Come Back soon ...
                      </Alert>
                    )}
                    {searchPlantDataLoaded === false && (
                      <Stack sx={{ m: 2 }}>
                        <SkeletonArticle />
                      </Stack>
                    )}
                  </div>
                )}
              </Box>
              <Box>
                {/*<div className='showProductSubs'>Tools</div>
                <Divider variant='middle' />*/}
                {( Array.isArray(searchToolData) && searchToolData.length  != 0) && (
                  <div>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <ShowTools tooldata={searchToolData} />
                    </Grid>
                  </div>
                )}
                { ( Array.isArray(searchToolData) && searchToolData.length === 0) && (
                  <div>
                    {searchToolDataLoaded === true && (
                      <Alert severity='error'>
                        There is NO plant right now! Come Back soon ...
                      </Alert>
                    )}
                    {searchToolDataLoaded === false && (
                      <Stack sx={{ m: 2 }}>
                        <SkeletonArticle />
                      </Stack>
                    )}
                  </div>
                )}
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
      {/* ////////////////////////// Samples ////////////////////////// */}
      {/* /////// Pagination /////// */}
      {/* <Button onClick={() => handlePaginationPlants(Count, Page)}></Button> */}
    </div>
  )
}

export default SearchResultProduct
