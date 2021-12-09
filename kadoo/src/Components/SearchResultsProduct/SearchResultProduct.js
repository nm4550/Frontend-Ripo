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
import Pagination from '@mui/material/Pagination'
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
import Navbar2 from '../../Components/NavbarHome/Navbar2'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import AppBar from '../../Components/AppBar/AppBar'
import Slider from '@mui/material/Slider'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import SortNavBar from './SortNavBar'
import SearchBar from './SearchBar'
import useMediaQuery from '@mui/material/useMediaQuery'
import ShowProduct from '../../Components/ShowProduct/ShowProduct'

const drawerWidth = 340

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
)

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'left',
}))

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}))

function SearchResultProduct(props) {
  const xsScreen = useMediaQuery('(min-width: 900px)')

  const [searchPlantDataLoaded, setSearchPlantDataLoaded] = useState(false)
  const [searchToolDataLoaded, setSearchToolDataLoaded] = useState(false)
  const [searchProductDataLoaded, setSearchProductDataLoaded] = useState(false)
  const [searchProductData, setSearchProductData] = useState([])
  const [searchPlantData, setSearchPlantData] = useState([])
  const [searchToolData, setSearchToolData] = useState([])
  const [openDrawer, setOpenDrawer] = React.useState(false)
  ///////////////////// Advance Serach States /////////////////////
  //#########Plants
  //Search
  const [searchTextPlants, setSearchTextPlants] = useState('')
  //Sort
  const [sortKindPlants, setSortKindPlants] = useState('')
  const [sortOrderPlants, setSortOrderPlants] = useState('')
  //Filter
  const [filterPriceLowerPlants, setFilterPriceLowerPlants] = useState('')
  const [filterPricePlants, setFilterPricePlants] = useState('')
  const [filterPriceHigherPlants, setFilterPriceHigherPlants] = useState('')
  const [fiterEnvironmentPlants, setFiterEnvironmentPlants] = useState('')
  const [filterWaterPlants, setFilterWaterPlants] = useState('')
  const [filterLightPlants, setFilterLightPlants] = useState('')
  const [filterGrowthRatePlants, setFilterGrowthRatePlants] = useState('')
  const [filterType, setFilterType] = useState(0)
  //Pagination
  const [paginationCountPlants, setPaginationCountPlants] = useState(6)
  const [paginationPagePlants, setPaginationPagePlants] = useState(1)
  const [resultPaginationPagePlants, setResultPaginationPagePlants] =
    useState(0)

  //#########Tools
  //Search
  const [searchTextProducts, setSearchTextProducts] = useState('')
  //Sort
  const [sortKindProducts, setSortKindProducts] = useState('')
  const [sortOrderProducts, setSortOrderProducts] = useState('')
  //Filter
  const [filterPriceLowerProducts, setFilterPriceLowerProducts] = useState('')
  const [filterPriceHigherProducts, setFilterPriceHigherProducts] = useState('')
  //Pagination
  const [paginationCountProducts, setPaginationCountProducts] = useState(6)
  const [paginationPageProducts, setPaginationPageProducts] = useState(1)
  const [resultPaginationPageProducts, setResultPaginationPageProducts] =
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
  const [paginationCountTools, setPaginationCountTools] = useState(6)
  const [paginationPageTools, setPaginationPageTools] = useState(1)
  const [resultPaginationPageTools, setResultPaginationPageTools] = useState(0)

  const handleChangePlant = (event, value) => {
    setPaginationPagePlants(value)
  }
  const handleChangeTool = (event, value) => {
    setPaginationPageTools(value)
  }
  const handleChangeProduct = (event, value) => {
    setPaginationPageProducts(value)
  }

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
    console.log(openDrawer)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
    console.log(openDrawer)
  }

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
  function ProductsAdvanceSearch() {
    const requestOptions = {
      method: 'POST',
      headers: {
        // 'Authorization': 'JWT ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: searchTextProducts !== '' ? searchTextProducts : null,
        price: {
          lower:
            filterPriceLowerProducts !== '' ? filterPriceLowerProducts : null,
          higher:
            filterPriceHigherProducts !== '' ? filterPriceHigherProducts : null,
        },
        pagination: {
          count:
            paginationCountProducts !== '' ? paginationCountProducts : null,
          page: paginationPageProducts !== '' ? paginationPageProducts : null,
        },
        sort: {
          kind: sortKindProducts !== '' ? sortKindProducts : null,
          order: sortOrderProducts !== '' ? sortOrderProducts : null,
        },
      }),
    }
    console.log('body : ' + requestOptions.body)
    setSearchProductData([])
    setSearchProductDataLoaded(false)
    setTimeout(async () => {
      const res = await fetch(
        'http://127.0.0.1:8000/api/allAdvanceSearch/',
        requestOptions
      )
      const data = await res.json()
      setSearchProductData(data.data)
      console.log('product page: ' + data.pageCount)
      setResultPaginationPageProducts(data.pageCount)
      setSearchProductDataLoaded(true)
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
  const FuncSortKindPlants = (name) => {
    setSortKindPlants(name)
  }
  const FuncSortOrderPlants = (name) => {
    setSortOrderPlants(name)
  }
  const FuncSortKindTools = (name) => {
    setSortKindTools(name)
  }
  const FuncSortOrderTools = (name) => {
    setSortOrderTools(name)
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
    console.log('sara eshghe mne')
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
  // 7) Filter By Type of data
  const handleChangeTypeData = (event) => {
    if (event.target.value === 'plant') {
      setFilterType(1)
    } else if (event.target.value === 'tool') {
      setFilterType(2)
    } else if (event.target.value === 'all') {
      setFilterType(0)
    }
  }
  // 8) Filter handel change water
  const handleChangeWater = (event) => {
    handleFilterWater(event.target.value)
  }
  // 9) Filter handel change light
  const handleChangeLight = (event) => {
    handleFilterLight(event.target.value)
  }
  // 10) Filter handel change price
  const handleChangePrice = (event) => {
    handleFilterPricePlants(event.target.value[0], event.target.value[1])
    handleFilterPriceTools(event.target.value[0], event.target.value[1])
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
  const handlePaginationProducts = (count, page) => {
    setPaginationCountProducts(count)
    setPaginationPageProducts(page)
  }

  useEffect(() => {
    if (sortKindPlants !== '' && sortOrderPlants !== '') {
      PlantsAdvanceSearch()
    }
    if (sortKindTools !== '' && sortOrderTools !== '') {
      ToolsAdvanceSearch()
    }
    if (sortKindProducts !== '' && sortOrderProducts !== '') {
      ToolsAdvanceSearch()
    }
    if (
      filterGrowthRatePlants !== '' ||
      filterLightPlants !== '' ||
      fiterEnvironmentPlants !== '' ||
      filterWaterPlants !== '' ||
      filterPriceHigherPlants !== '' ||
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
    if (filterPriceHigherProducts !== '' && filterPriceLowerProducts !== '') {
      ProductsAdvanceSearch()
    }
    if (searchTextProducts !== '') {
      ProductsAdvanceSearch()
    }
    if (paginationCountProducts !== '' && paginationPageProducts !== '') {
      ProductsAdvanceSearch()
    }
  }, [
    sortKindPlants,
    sortOrderPlants,
    sortKindTools,
    sortOrderTools,
    sortKindProducts,
    sortOrderProducts,
    filterGrowthRatePlants,
    filterLightPlants,
    fiterEnvironmentPlants,
    filterPriceHigherPlants,
    filterPriceHigherTools,
    filterPriceLowerPlants,
    filterPriceLowerTools,
    filterPriceHigherProducts,
    filterPriceLowerProducts,
    filterWaterPlants,
    searchTextPlants,
    searchTextTools,
    searchTextProducts,
    paginationCountPlants,
    paginationCountTools,
    paginationPagePlants,
    paginationPageTools,
    paginationCountProducts,
    paginationPageProducts,
  ])

  useEffect(() => {
    if (filterType === 0) {
      ProductsAdvanceSearch()
    }
    if (filterType === 1) {
      PlantsAdvanceSearch()
    }
    if (filterType === 2) {
      ToolsAdvanceSearch()
    }
  }, [paginationPagePlants, paginationPageTools, paginationPageProducts])

  useEffect(() => {
    ProductsAdvanceSearch()
  }, [])
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant='persistent'
          anchor='left'
          open={openDrawer}
        >
          <DrawerHeader>
            <Typography variant='h6' noWrap component='div'>
              Filters
            </Typography>
          </DrawerHeader>
          <Grid item style={{ padding: 10 }}>
            {/* ////////////////////////// Sidbar For Filter ////////////////////////// */}
            {/* /////// Filter /////// */}
            {/* <Button onClick={() => handleFilterEnvironment(VALUEFROMUSER)}></Button> */}

            <FormControl component='fieldset' sx={{ mb: 1 }}>
              <FormLabel component='sort'>Type of data</FormLabel>
              <RadioGroup
                aria-label='gender'
                name='controlled-radio-buttons-group'
                value={searchPlantData}
                onChange={handleChangeTypeData}
              >
                <FormControlLabel
                  checked={filterType === 0}
                  value={'all'}
                  control={<Radio />}
                  label='All'
                />
                <FormControlLabel
                  checked={filterType === 1}
                  value={'plant'}
                  control={<Radio />}
                  label='Plants'
                />
                <FormControlLabel
                  checked={filterType === 2}
                  value={'tool'}
                  control={<Radio />}
                  label='Tools'
                />
              </RadioGroup>
            </FormControl>
            {filterType === 1 && (
              <Box>
                <hr />
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <InputLabel id='demo-simple-select-label'>Water</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={filterWaterPlants}
                    label='Water'
                    onChange={handleChangeWater}
                  >
                    <MenuItem value={'low'}>Low</MenuItem>
                    <MenuItem value={'medium'}>Medium</MenuItem>
                    <MenuItem value={'much'}>Much</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
                  <InputLabel id='demo-simple-select-label'>Light</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={filterLightPlants}
                    label='Light'
                    onChange={handleChangeLight}
                  >
                    <MenuItem value={'low'}>Low</MenuItem>
                    <MenuItem value={'medium'}>Medium</MenuItem>
                    <MenuItem value={'much'}>Much</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}

            <hr />
            <Box sx={{ mt: 1, ml: 2, mr: 2 }}>
              <Typography id='input-slider' gutterBottom sx={{ ml: -2 }}>
                Range of Price
              </Typography>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={[
                  filterPriceLowerPlants,
                  filterPriceHigherPlants === '' ? 30 : filterPriceHigherPlants,
                ]}
                onChange={handleChangePrice}
                valueLabelDisplay='auto'
                min={4}
                $
                max={30}
                $
              />
            </Box>
          </Grid>
        </Drawer>
        {/* <br />
      <Grid container style={{ minHeight: '100vh' }} xs={24}>
        <Grid item xs={6} sm={3} style={{ padding: 10 }}>
        <Grid
          item
          xs={20} 
          sm={10}
          display='flex'
          marginLeft={0}
          direction='column'
        >
          <Grid>
          <TextField
            onChange={(e) => handleChange(e)}
            size='small'
            id='outlined-search'
            name='SearchField'
            label='Search..'
            type='search'>
          </TextField>
          
          <IconButton onClick={() => {handleSearchPlantsByName(searchText) ;handleSearchToolsByName(searchText) }}>
            <SearchIcon className='Searchicon' fontSize='large' />
          </IconButton>
          </Grid>
          
          <Chip
            width="10px"
            label={'You searched for ' + searchTextPlants}
            variant='outlined'
          />
        </Grid>
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
      </div> */}
        <Main open={openDrawer}>
          <Box>
            <AppBar
              SearchOption={false}
              TicketOption={true}
              CartOption={true}
              AuthorizationOption={true}
              DrawerOption={true}
              isopen={openDrawer}
              OpenMenu={handleDrawerOpen}
              CloseMenu={handleDrawerClose}
            />
            <Grid container style={{ minHeight: '100vh' }} xs={24}>
              <Grid
                container
                item
                xs={24}
                alignItems='flex-start'
                justify='space-between'
                style={{ padding: 10 }}
              >
                <div>
                  <Box sx={{ width: '100%' }}>
                    {/* ////////////////////////// NavBar Sort ////////////////////////// */}
                    <Grid
                      container
                      alignItems={xsScreen ? 'center' : 'left'}
                      direction={xsScreen ? 'row' : 'column'}
                    >
                      <Grid item>
                        {!xsScreen && (
                          <SearchBar
                            sx={{ pt: 5, pb: 5 }}
                            funcSearchPlantsByName={handleSearchPlantsByName}
                            funcSearchToolsByName={handleSearchToolsByName}
                          />
                        )}
                      </Grid>
                      <Grid item>
                        <SortNavBar
                          handleSortKindPlants={FuncSortKindPlants}
                          handleSortOrderPlants={FuncSortOrderPlants}
                          handleSortKindTools={FuncSortKindTools}
                          handleSortOrderTools={FuncSortOrderTools}
                        />
                      </Grid>
                      <Grid item>
                        {xsScreen && (
                          <SearchBar
                            funcSearchPlantsByName={handleSearchPlantsByName}
                            funcSearchToolsByName={handleSearchToolsByName}
                          />
                        )}
                      </Grid>
                    </Grid>

                    {/* ////////////////////////// Samples ////////////////////////// */}
                    {/* /////// Sort /////// */}
                    {/* <Button onClick={() => handleToolsSortBy_Name_ASC()}></Button> */}
                    <Box sx={{ width: '100%' }}>
                      {searchProductData.length != 0 && filterType === 0 && (
                        <div>
                          {/*<div className='showProductSubs'>Products</div>
                          <Divider variant='middle' />*/}
                          <Grid container spacing={2} sx={{ p: 2 }}>
                            <ShowProduct data={searchProductData} />
                          </Grid>
                        </div>
                      )}
                      {searchProductData.length === 0 && filterType === 1 && (
                        <div>
                          {searchProductDataLoaded === true && (
                            <Alert severity='error'>
                              There is NO Product right now! Come Back soon ...
                            </Alert>
                          )}
                          {searchProductDataLoaded === false && (
                            <Grid container item>
                              <SkeletonArticle />
                            </Grid>
                          )}
                        </div>
                      )}
                    </Box>
                    <Box sx={{ width: '100%' }}>
                      {searchPlantData.length != 0 && filterType === 1 && (
                        <div>
                          {/*<div className='showProductSubs'>Plants</div>
                          <Divider variant='middle' />*/}
                          <Grid container spacing={2} sx={{ p: 2 }}>
                            <ShowProduct data={searchPlantData} />
                          </Grid>
                        </div>
                      )}
                      {searchPlantData.length === 0 && filterType === 1 && (
                        <div>
                          {searchPlantDataLoaded === true && (
                            <Alert severity='error'>
                              There is NO plant right now! Come Back soon ...
                            </Alert>
                          )}
                          {searchPlantDataLoaded === false && (
                            <Grid container item sx={{ m: 2, flex: 1 }}>
                              <SkeletonArticle />
                            </Grid>
                          )}
                        </div>
                      )}
                    </Box>
                    <Box>
                      {searchToolData.length != 0 && filterType === 2 && (
                        <div>
                          {/*<div className='showProductSubs'>Tools</div>
                          <Divider variant='middle' />*/}
                          <Grid container spacing={2} sx={{ p: 2 }}>
                            <ShowProduct data={searchToolData} />
                          </Grid>
                        </div>
                      )}
                      {searchToolData.length === 0 && filterType === 2 && (
                        <div>
                          {searchToolDataLoaded === true && (
                            <Alert severity='error'>
                              There is NO plant right now! Come Back soon ...
                            </Alert>
                          )}
                          {searchToolDataLoaded === false && (
                            <Grid sx={{ m: 2 }}>
                              <SkeletonArticle />
                            </Grid>
                          )}
                        </div>
                      )}
                    </Box>
                  </Box>
                  <Grid item>
                    {filterType === 0 && (
                      <Pagination
                        className='pagination_center'
                        count={resultPaginationPageProducts}
                        page={paginationPageProducts}
                        onChange={handleChangeProduct}
                      />
                    )}
                    {filterType === 1 && (
                      <Pagination
                        className='pagination_center'
                        count={resultPaginationPagePlants}
                        page={paginationPagePlants}
                        onChange={handleChangePlant}
                      />
                    )}
                    {filterType === 2 && (
                      <Pagination
                        className='pagination_center'
                        count={resultPaginationPageTools}
                        page={paginationPageTools}
                        onChange={handleChangeTool}
                      />
                    )}
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Main>

        {/* ////////////////////////// Samples ////////////////////////// */}
        {/* /////// Pagination /////// */}
        {/* <Button onClick={() => handlePaginationPlants(Count, Page)}></Button> */}
      </Box>
    </div>
  )
}

export default SearchResultProduct
