import React, { useEffect, useState, useRef } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Slide from '@mui/material/Slide'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ProductIcon2 from '../productIcon/productIcon2'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import ContentHeader from '../../Components/Header/ContentHeader'
import Pagination from '@mui/material/Pagination'
import ShowPlants from '../../Components/ShowProduct/ShowPlants'
import ShowTools from '../../Components/ShowProduct/ShowTools'
import ShowProduct from '../../Components/ShowProduct/ShowProduct'
import ProductTabs from '../../Components/ProductTabs/TabPanel'
import Button from '@mui/material/Button'
import Categorieslist from '../Catergories/Categorieslist'

function ProductWithCategory(props) {
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
      <Card
        style={{ backgroundColor: '#f5f4f4' }}
        sx={{
          m: { xs: 3, sm: 5 },
          pl: { xs: 1, sm: 2, md: 2 },
          pr: { xs: 1, sm: 2, md: 8 },
          pt: 2,
          pb: 2,
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='flex-start'
        >
          <Grid item xs={12} sm={2}>
            <Categorieslist
              bindplants={handlePlantsData}
              bindtools={handleToolsData}
              settext={handleCategoryText}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
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
            <Grid
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
              sx={{ mt: 3, mb: 1 }}
            >
              <Grid item>
                <Pagination
                  className='pagination_center'
                  count={3}
                  page={page}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default ProductWithCategory
