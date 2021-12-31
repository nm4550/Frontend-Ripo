import React, { useEffect, useState, useRef } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import AppBar from '../../Components/AppBar/AppBar'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import IconButton from '@mui/material/IconButton'
import Alert from '@mui/material/Alert'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import { makeStyles } from '@mui/styles'
import Skeleton from '@mui/material/Skeleton'
import Theme from '../../Theme/ThemeGenerator'

const Input = styled('input')({
  display: 'none',
})

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}))

function GreenHouseEdit(props) {
  ///const containerRef = React.useRef(null)
  const [openDrawer, setOpenDrawer] = React.useState([false])
  const [plantData, setPlantData] = React.useState([])
  const [plantId, setPlantId] = React.useState([])
  const [plantDataLoaded, setPlantDataLoaded] = React.useState(false)
  const [value, setValue] = React.useState(0)

  const classes = useStyles()

  const handleChange = (e) => {
    props.change(e)
  }

  return (
    <div>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{ pl: { xs: 2, sm: 10 }, pr: { xs: 2, sm: 10 } }}
      >
        <Grid
          container
          item
          justifyContent='center'
          sx={{ mt: { xs: 9, sm: 2, md: 3, lg: 5 } }}
          className='ProductPageProductContainer'
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            container
            justifyContent='center'
            alignItems='center'
            className='ProductPageImageContainer'
          >
            <Grid
              item
              container
              justifyContent='center'
              alignItems='center'
              sx={{ m: 2 }}
            >
              <Grid
                container
                item
                justifyContent='center'
                alignItems='center'
                direction='row'
              >
                {props.data.image === '' && props.preview === null && (
                  <Grid>
                    <Skeleton
                      variant='rectangular'
                      width={300}
                      height={300}
                      animation={false}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                )}
                {(props.data.image !== '' || props.preview !== null) && (
                  <img
                    className='ProductPageImage'
                    src={
                      !props.imageChange
                        ? 'http://127.0.0.1:8000' + props.data.image
                        : props.preview
                    }
                    alt={'alt'}
                    sx={{
                      width: { xs: '300px', sm: '400px' },
                      height: { xs: '300px', sm: '400px' },
                    }}
                  ></img>
                )}

                <Grid
                  container
                  item
                  justifyContent='center'
                  sx={{ p: 0.5, Color: '#12824C' }}
                  className='ProductPageTitle'
                >
                  {/*<label htmlFor='contained-button-file'>
                    <Input
                      accept='image/*'
                      id='contained-button-file'
                      multiple
                      type='file'
                    />
                    <Button variant='contained' component='span'>
                      Upload
                </Button>

                </label>*/}
                  <input
                    accept='image/jpeg'
                    className={classes.input}
                    id='faceImage'
                    type='file'
                    onChange={props.handleCapture}
                  />
                  <Tooltip title='Select Image'>
                    <label htmlFor='faceImage'>
                      <Button variant='contained' component='span'>
                        Upload
                      </Button>
                    </label>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={{ p: 2 }}>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                className='ProductPageTitle'
                sx={{ m: 1 }}
              >
                <TextField
                  fullWidth
                  label='Name'
                  id='name'
                  name='name'
                  defaultValue={props.data.name}
                  helperText={
                    props.errorData.name != '' ? props.errorData.name : ''
                  }
                  onChange={handleChange}
                />
                <Divider sx={{ mt: 1 }} />
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                spacing={1}
                className='ProductPageText'
                sx={{ m: 1 }}
              >
                <div className='ProductPageText'>
                  <TextField
                    fullWidth
                    id='description'
                    name='description'
                    label='Description'
                    multiline
                    maxRows={3}
                    defaultValue={props.data.description}
                    onChange={handleChange}
                  />
                </div>
              </Grid>

              {/*<Grid
                container
                item
                xs={12}
                className='ProductPageText'
                justifyContent='space-between'
                sx={{ m: 1, mt: 0 }}
              >
                <Grid item className='ProductPageText'>
                  <FormControl
                    fullWidth
                    sx={{ mt: 1, mb: 1, minWidth: '135px' }}
                  >
                    <InputLabel id='demo-simple-select-label'>Light</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Light'
                    >
                      <MenuItem value={'low'}>Low</MenuItem>
                      <MenuItem value={'medium'}>Medium</MenuItem>
                      <MenuItem value={'much'}>Much</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item className='ProductPageText'>
                  <FormControl
                    fullWidth
                    sx={{ mt: 1, mb: 1, minWidth: '135px' }}
                  >
                    <InputLabel id='demo-simple-select-label'>Water</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Light'
                    >
                      <MenuItem value={'low'}>Low</MenuItem>
                      <MenuItem value={'medium'}>Medium</MenuItem>
                      <MenuItem value={'much'}>Much</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item className='ProductPageText'>
                  <FormControl
                    fullWidth
                    sx={{ mt: 1, mb: 1, minWidth: '135px' }}
                  >
                    <InputLabel id='demo-simple-select-label'>
                      Growth
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Light'
                    >
                      <MenuItem value={'low'}>Low</MenuItem>
                      <MenuItem value={'medium'}>Medium</MenuItem>
                      <MenuItem value={'much'}>Much</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>*/}
              <Grid container item className='ProductPageText' sx={{ m: 1 }}>
                <FormControl fullWidth sx={{ minWidth: '135px' }}>
                  <InputLabel
                    id='demo-simple-select-label'
                    sx={{ Width: '100px' }}
                  >
                    Location
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='location'
                    name='location'
                    label='Light'
                    defaultValue={props.data.location}
                    onChange={handleChange}
                  >
                    <MenuItem value={'Living room'}>Living room</MenuItem>
                    <MenuItem value={'Kitchen'}>Kitchen</MenuItem>
                    <MenuItem value={'bedroom'}>Bedroom</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                className='ProductPageBuyContainer'
              >
                <Grid
                  container
                  item
                  justifyContent='flex-end'
                  sx={{ p: 0.5, Color: '#12824C' }}
                  className='ProductPageTitle'
                >
                  <Button
                    variant='contained'
                    className='productsPageAdd'
                    onClick={props.handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default GreenHouseEdit
