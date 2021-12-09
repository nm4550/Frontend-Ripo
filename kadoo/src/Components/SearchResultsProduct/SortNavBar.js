import React, { useEffect, useState, useRef } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Slide from '@mui/material/Slide'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

import Stack from '@mui/material/Stack'
import ProductIcon2 from '../productIcon/productIcon2'

function SortNavBar(props) {
  const [sortSelectMenu, setSortSelectMenu] = useState(0)
  const {
    handleSortKindPlants,
    handleSortOrderPlants,
    handleSortKindTools,
    handleSortOrderTools,
  } = props
  useEffect(() => {
    setSortSelectMenu(1)
  }, [])
  useEffect(() => {
    switch (sortSelectMenu) {
      case 1:
        handlePlantsSortBy_Name_ASC()
        handleToolsSortBy_Name_ASC()
        break
      case 2:
        handlePlantsSortBy_Name_DES()
        handleToolsSortBy_Name_DES()
        break
      case 3:
        handlePlantsSortBy_Price_ASC()
        handleToolsSortBy_Price_ASC()
        break
      case 4:
        handlePlantsSortBy_Price_DES()
        handleToolsSortBy_Price_DES()
        break
      case 5:
        handlePlantsSortBy_Time_ASC()
        handleToolsSortBy_Time_ASC()
        break
      case 6:
        handlePlantsSortBy_Time_DES()
        handleToolsSortBy_Time_DES()
        break
    }
  }, [sortSelectMenu])
  const handleChangeSelect = (event) => {
    setSortSelectMenu(event.target.value)
  }
  const handleChangeButtonMenu = (value) => {
    setSortSelectMenu(value)
  }
  ////////////////////// Sort Functions //////////////////////
  // 1) Sort By Name Plants
  const handlePlantsSortBy_Name_ASC = () => {
    handleSortKindPlants('name')
    handleSortOrderPlants('ASC')
  }
  const handlePlantsSortBy_Name_DES = () => {
    handleSortKindPlants('name')
    handleSortOrderPlants('DES')
  }
  // 2) Sort By Price Plants
  const handlePlantsSortBy_Price_ASC = () => {
    handleSortKindPlants('price')
    handleSortOrderPlants('ASC')
  }
  const handlePlantsSortBy_Price_DES = () => {
    handleSortKindPlants('price')
    handleSortOrderPlants('DES')
  }
  // 3) Sort By Time Plants
  const handlePlantsSortBy_Time_ASC = () => {
    handleSortKindPlants('time')
    handleSortOrderPlants('ASC')
  }
  const handlePlantsSortBy_Time_DES = () => {
    handleSortKindPlants('time')
    handleSortOrderPlants('DES')
  }
  // 4) Sort By Name Tools
  const handleToolsSortBy_Name_ASC = () => {
    handleSortKindTools('name')
    handleSortOrderTools('ASC')
  }
  const handleToolsSortBy_Name_DES = () => {
    handleSortKindTools('name')
    handleSortOrderTools('DES')
  }
  // 5) Sort By Price Tools
  const handleToolsSortBy_Price_ASC = () => {
    handleSortKindTools('price')
    handleSortOrderTools('ASC')
  }
  const handleToolsSortBy_Price_DES = () => {
    handleSortKindTools('price')
    handleSortOrderTools('DES')
  }
  // 6) Sort By Time Tools
  const handleToolsSortBy_Time_ASC = () => {
    handleSortKindTools('time')
    handleSortOrderTools('ASC')
  }
  const handleToolsSortBy_Time_DES = () => {
    handleSortKindTools('time')
    handleSortOrderTools('DES')
  }
  return (
    <div>
      <Grid container xs={12}>
        <Grid
          item
          container
          direction='row'
          alignContent='center'
          justifyContent='center'
          sx={{ minWidth: 240 }}
          sx={{ display: { xs: 'flex', sm: 'none' }, mt: 2, mb: 2 }}
        >
          <Grid item sx={{ flex: 1 }}>
            <Box>
              <FormControl fullWidth>
                <InputLabel sx={{ flex: 1 }} id='demo-simple-select-label'>
                  Sort by
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Sort by'
                  value={sortSelectMenu}
                  onChange={handleChangeSelect}
                >
                  <MenuItem value={1}>A to Z</MenuItem>
                  <MenuItem value={2}>Z to A</MenuItem>
                  <MenuItem value={3}>ACS Price</MenuItem>
                  <MenuItem value={4}>DES Price</MenuItem>
                  <MenuItem value={5}>ACS time</MenuItem>
                  <MenuItem value={6}>DES time</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        <Box
          block
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            display: { xs: 'none', sm: 'block' },
            mt: 2,
            mb: 2,
          }}
        >
          <Typography variant='body' gutterBottom sx={{ mr: 2 }}>
            Sort By:
          </Typography>
          <Button
            sx={{ mr: 1 }}
            variant={sortSelectMenu == 1 ? 'contained' : 'text'}
            onClick={() => {
              handleChangeButtonMenu(1)
            }}
            size='small'
          >
            {' '}
            A to Z{' '}
          </Button>
          <Button
            sx={{ mr: 1 }}
            variant={sortSelectMenu == 2 ? 'contained' : 'text'}
            onClick={() => {
              handleChangeButtonMenu(2)
            }}
            size='small'
          >
            {' '}
            Z to A{' '}
          </Button>
          <Button
            sx={{ mr: 1 }}
            variant={sortSelectMenu == 3 ? 'contained' : 'text'}
            onClick={() => {
              handleChangeButtonMenu(3)
            }}
            size='small'
          >
            {' '}
            ACS Price{' '}
          </Button>
          <Button
            sx={{ mr: 1 }}
            variant={sortSelectMenu == 4 ? 'contained' : 'text'}
            onClick={() => {
              handleChangeButtonMenu(4)
            }}
            size='small'
          >
            {' '}
            DES Price{' '}
          </Button>
          <Button
            sx={{ mr: 1 }}
            variant={sortSelectMenu == 5 ? 'contained' : 'text'}
            onClick={() => {
              handleChangeButtonMenu(5)
            }}
            size='small'
          >
            {' '}
            ACS time{' '}
          </Button>
          <Button
            sx={{ mr: 1 }}
            variant={sortSelectMenu == 6 ? 'contained' : 'text'}
            onClick={() => {
              handleChangeButtonMenu(6)
            }}
            size='small'
          >
            {' '}
            DES time{' '}
          </Button>
        </Box>
      </Grid>
    </div>
  )
}

export default SortNavBar
