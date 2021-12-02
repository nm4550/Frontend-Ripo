import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ShowProduct from '../../Components/ShowProduct/ShowProduct'
//import CategoryDrawer from '../../Components/CategoryDrawer/CategoryDrawer'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Categorieslist from '../../Components/Catergories/Categorieslist'
import ShowPlants from '../../Components/ShowProduct/ShowPlants'
import ShowTools from '../../Components/ShowProduct/ShowTools'
import Pagination from '@mui/material/Pagination'
import Chip from '@mui/material/Chip'
const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
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
  justifyContent: 'flex-end',
}))

export default function HomePage() {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  const [plantsData, setPlantsData] = React.useState([])
  const [toolsData, setToolsData] = React.useState([])
  const [isplant, setIsPlant] = React.useState(0)
  const [categoryText, setCategoryText] = React.useState('')
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState([])
  const handlePlantsData = (value) => {
    setPlantsData(value)
    setIsPlant(1)
  }

  const handleCategoryText = (value) => {
    setCategoryText(value)
  }
  const handleDrawerOpen = () => {
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
  }

  const handleDelete = () => {
    setIsPlant(0)
  }

  const handleToolsData = (value) => {
    setToolsData(value)
    setIsPlant(2)
  }

  useEffect(() => {
    fetchPagination()
  }, [page])
  const handleChange = (event, value) => {
    setPage(value)
  }
  const fetchPagination = () => {
    fetch('http://127.0.0.1:8000/api/allPagination/', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count: '6', page: `${page}` }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data)
      })
  }

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
            {/* <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>*/}
          </DrawerHeader>
          <Categorieslist
            bindplants={handlePlantsData}
            bindtools={handleToolsData}
            settext={handleCategoryText}
          />
        </Drawer>
        <Main open={openDrawer}>
          <Box>
            <Navbar
              closemenue={handleDrawerClose}
              openmenue={handleDrawerOpen}
            />
            <Pagination
              className='pagination_center'
              count={3}
              page={page}
              onChange={handleChange}
            />
            {isplant !== 0 && (
              <Chip
                label={categoryText}
                variant='outlined'
                sx={{ mt: 2, ml: 2 }}
                onDelete={handleDelete}
              />
            )}

            {isplant === 0 && <ShowProduct data={products} />}
            {isplant === 1 && <ShowPlants data={plantsData} />}
            {isplant === 2 && <ShowTools tooldata={toolsData} />}
          </Box>
        </Main>
      </Box>
    </div>
  )
}
