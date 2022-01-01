import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'
import { Button, Grid } from '@mui/material'
import StaticTimePicker from '@mui/lab/StaticTimePicker'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import TimePicker from '@mui/lab/TimePicker'

export default function Reminder() {
  const [value, setValue] = React.useState(null)
  const [num, setNum] = React.useState(1)
  const [satEnable, setSatEnable] = React.useState(false)
  const [sunEnable, setSunEnable] = React.useState(false)
  const [monEnable, setMonEnable] = React.useState(false)
  const [tueEnable, setTueEnable] = React.useState(false)
  const [wedEnable, setWedEnable] = React.useState(false)
  const [thuEnable, setThuEnable] = React.useState(false)
  const [friEnable, setFriEnable] = React.useState(false)

  const [timeEnable1, setTimeEnable1] = React.useState(true)
  const [timeEnable2, setTimeEnable2] = React.useState(false)
  const [timeEnable3, setTimeEnable3] = React.useState(false)
  const [timeEnable4, setTimeEnable4] = React.useState(false)

  const [time1, setTime1] = React.useState(null)
  const [time2, setTime2] = React.useState(null)
  const [time3, setTime3] = React.useState(null)
  const [time4, setTime4] = React.useState(null)

  const [timeFormat1, setTimeFormat1] = React.useState('')
  const [timeFormat2, setTimeFormat2] = React.useState('')
  const [timeFormat3, setTimeFormat3] = React.useState('')
  const [timeFormat4, setTimeFormat4] = React.useState('')

  function handleClick(index) {
    switch (index) {
      case 0:
        setSatEnable(satEnable ? false : true)
        break
      case 1:
        setSunEnable(sunEnable ? false : true)
        break
      case 2:
        setMonEnable(monEnable ? false : true)
        break
      case 3:
        setTueEnable(tueEnable ? false : true)
        break
      case 4:
        setWedEnable(wedEnable ? false : true)
        break
      case 5:
        setThuEnable(thuEnable ? false : true)
        break
      case 6:
        setFriEnable(friEnable ? false : true)
        break
    }
    console.log('You clicked the Chip.')
  }
  const updateText = () => {
    switch (num) {
      case 1:
        setTimeEnable1(true)
        setTimeEnable2(false)
        setTimeEnable3(false)
        setTimeEnable4(false)
        break
      case 2:
        setTimeEnable1(true)
        setTimeEnable2(true)
        setTimeEnable3(false)
        setTimeEnable4(false)
        break
      case 3:
        setTimeEnable1(true)
        setTimeEnable2(true)
        setTimeEnable3(true)
        setTimeEnable4(false)
        break
      case 4:
        setTimeEnable1(true)
        setTimeEnable2(true)
        setTimeEnable3(true)
        setTimeEnable4(true)
        break
    }
  }
  useEffect(() => {
    updateText()
  }, [num])
  var increaseBought = () => {
    if (num < 4) {
      setNum(num + 1)
    }
  }
  var decreaseBought = () => {
    if (num > 1) {
      setNum(num - 1)
    }
  }

  return (
    <Grid>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{
          pl: { xs: 2, sm: 5 },
          pr: { xs: 2, sm: 5 },
          pt: 5,
        }}
      >
        <Grid container justifyContent='center' alignItems='center'>
          <Typography
            variant='h5'
            gutterBottom
            component='div'
            align='center'
            noWra
          >
            Which days you want me to remind you?
          </Typography>
        </Grid>
        <Grid container justifyContent='center' alignItems='center'>
          <Stack direction='row' spacing={1}>
            <Chip
              label='SAT'
              onClick={() => handleClick(0)}
              color={satEnable ? 'primary' : 'default'}
            />
            <Chip
              label='SUN'
              onClick={() => handleClick(1)}
              color={sunEnable ? 'primary' : 'default'}
            />
            <Chip
              label='MON'
              onClick={() => handleClick(2)}
              color={monEnable ? 'primary' : 'default'}
            />
            <Chip
              label='TUE'
              onClick={() => handleClick(3)}
              color={tueEnable ? 'primary' : 'default'}
            />
            <Chip
              label='WED'
              onClick={() => handleClick(4)}
              color={wedEnable ? 'primary' : 'default'}
            />
            <Chip
              label='THU'
              onClick={() => handleClick(5)}
              color={thuEnable ? 'primary' : 'default'}
            />
            <Chip
              label='FRI'
              onClick={() => handleClick(6)}
              color={friEnable ? 'primary' : 'default'}
            />
          </Stack>
        </Grid>
        <Grid container justifyContent='center' alignItems='center'>
          <Divider sx={{ m: 2 }} style={{ width: '50%' }} />
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='center'
        ></Grid>
        <Grid item justifyContent='center' alignItems='center'>
          <Typography
            variant='h5'
            gutterBottom
            component='div'
            align='center'
            noWra
          >
            How many times day?
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems='center'
          justifyContent='center'
          direction='row'
        >
          <IconButton
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
            sx={{ color: 'error.main' }}
            onClick={decreaseBought}
          >
            <RemoveIcon />
          </IconButton>
          <div className='ProductPageCounterNum'>{num}</div>
          <IconButton
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
            sx={{ color: 'success.main' }}
            onClick={increaseBought}
          >
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid container justifyContent='center' alignItems='center'>
          <Divider sx={{ m: 2 }} style={{ width: '50%' }} />
        </Grid>
        <Grid container justifyContent='center' alignItems='center'>
          <Typography
            variant='h5'
            gutterBottom
            component='div'
            align='center'
            noWra
          >
            Pick your times?
          </Typography>
        </Grid>
        <Grid container justifyContent='center' alignItems='center'>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {timeEnable1 && (
              <Box sx={{ p: 1 }}>
                <TimePicker
                  sx={{ m: 1 }}
                  label='First time'
                  value={time1}
                  onChange={(newValue) => {
                    setTime1(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
            )}
            {timeEnable2 && (
              <Box sx={{ p: 1 }}>
                <TimePicker
                  sx={{ m: 1 }}
                  label='Second time'
                  value={time2}
                  onChange={(newValue) => {
                    setTime2(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
            )}
            {timeEnable3 && (
              <Box sx={{ p: 1 }}>
                <TimePicker
                  sx={{ m: 1 }}
                  label='Third time'
                  value={time3}
                  onChange={(newValue) => {
                    setTime3(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
            )}
            {timeEnable4 && (
              <Box sx={{ p: 1 }}>
                <TimePicker
                  sx={{ m: 1 }}
                  label='Fourth time'
                  value={time4}
                  onChange={(newValue) => {
                    setTime4(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
            )}
          </LocalizationProvider>
        </Grid>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ p: 3, Color: '#12824C' }}
          className='ProductPageTitle'
        >
          <Button
            variant='contained'
            className='productsPageAdd'
            sx={{ mr: 3 }}
          >
            ADD REMINDER
          </Button>
          <Button variant='contained' className='productsPageAdd'>
            CANSEL
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
