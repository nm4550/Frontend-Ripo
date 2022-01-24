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
import CircularProgress from '@mui/material/CircularProgress'
import { green } from '@mui/material/colors'

export default function Reminder(props) {
  const [value, setValue] = React.useState(null)
  const [num, setNum] = React.useState(1)
  const [enable, setEnable] = React.useState(false)
  const [satEnable, setSatEnable] = React.useState(false)
  const [sunEnable, setSunEnable] = React.useState(false)
  const [monEnable, setMonEnable] = React.useState(false)
  const [tueEnable, setTueEnable] = React.useState(false)
  const [wedEnable, setWedEnable] = React.useState(false)
  const [thuEnable, setThuEnable] = React.useState(false)
  const [friEnable, setFriEnable] = React.useState(false)

  const [dates, setDates] = React.useState([])
  const [endDates, setEndDates] = React.useState([])
  const [dateTimes, setDateTimes] = React.useState([])
  const [infoCount, setInfoCount] = React.useState(0)
  const [count, setCount] = React.useState(0)

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

  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const timer = React.useRef()

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  }

  useEffect(() => {
    if (infoCount > 0) {
      switch (num) {
        case 1:
          if (time1 !== null) {
            setEnable(true)
          } else {
            setEnable(false)
          }
          break
        case 2:
          if (time1 !== null && time2 !== null) {
            setEnable(true)
          } else {
            setEnable(false)
          }
          break
        case 3:
          if (time1 !== null && time2 !== null && time3 !== null) {
            setEnable(true)
          } else {
            setEnable(false)
          }
          break
        case 4:
          if (
            time1 !== null &&
            time2 !== null &&
            time3 !== null &&
            time4 !== null
          ) {
            setEnable(true)
          } else {
            setEnable(false)
          }
          break
      }
    } else {
      setEnable(false)
    }
  }, [num, time1, time2, time3, time4, infoCount])

  function handleClick(index) {
    switch (index) {
      case 0:
        if (satEnable) {
          setInfoCount(infoCount - 1)
        } else {
          setInfoCount(infoCount + 1)
        }
        setSatEnable(satEnable ? false : true)
        break
      case 1:
        if (sunEnable) {
          setInfoCount(infoCount - 1)
        } else {
          setInfoCount(infoCount + 1)
        }
        setSunEnable(sunEnable ? false : true)
        break
      case 2:
        if (monEnable) {
          setInfoCount(infoCount - 1)
        } else {
          setInfoCount(infoCount + 1)
        }
        setMonEnable(monEnable ? false : true)
        break
      case 3:
        if (tueEnable) {
          setInfoCount(infoCount - 1)
        } else {
          setInfoCount(infoCount + 1)
        }
        setTueEnable(tueEnable ? false : true)
        break
      case 4:
        if (wedEnable) {
          setInfoCount(infoCount - 1)
        } else {
          setInfoCount(infoCount + 1)
        }
        setWedEnable(wedEnable ? false : true)
        break
      case 5:
        if (thuEnable) {
          setInfoCount(infoCount - 1)
        } else {
          setInfoCount(infoCount + 1)
        }
        setThuEnable(thuEnable ? false : true)
        break
      case 6:
        if (friEnable) {
          setInfoCount(infoCount - 1)
        } else {
          setInfoCount(infoCount + 1)
        }
        setFriEnable(friEnable ? false : true)
        break
    }
    console.log('You clicked the Chip.')
  }

  function SetReminder() {
    Promise.all(
      dateTimes.map((p, index) => {
        setTimeout(async () => {
          const requestOptions = {
            method: 'POST',
            headers: {
              Authorization: 'JWT ' + localStorage.getItem('access_token'),
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              summary: props.summary,
              location: props.location,
              description: props.description,
              start: {
                dateTime: p,
              },
              end: {
                dateTime: p,
              },
              recurrence: ['RRULE:FREQ=WEEKLY;COUNT=52'],
              reminders: {
                useDefault: false,
                overrides: [
                  { method: 'email', minutes: 60 },
                  { method: 'popup', minutes: 10 },
                ],
              },
            }),
          }
          console.log(requestOptions.body)
          fetch('http://127.0.0.1:8000/api/reminder/', requestOptions)
            .then(async (response) => {
              const isJson = response.headers
                .get('content-type')
                ?.includes('application/json')
              const data = isJson ? await response.json() : null
              console.log(data)
              // check for error response
              console.log(response.status)
              if (!response.ok) {
                // get error message from body or default to response status
                const error = response.status

                return Promise.reject(error)
              }
              console.log(data)
            })
            .catch((error) => {
              if (error === 401) {
                alert('You should login first!')
                return
              }
              console.error('There was an error!', error)
            })
        }, index * 2000)
      })
    ).then(() => {
      const requestOptions = {
        method: 'GET',
        headers: {
          Authorization: 'JWT ' + localStorage.getItem('access_token'),
          'Content-Type': 'application/json',
        },
      }
      fetch(
        'http://127.0.0.1:8000/api/makeHaveCalendarTrue/' + props.id + '/',
        requestOptions
      )
        .then((response) => {
          response.json()
        })
        .then((data) => {
          console.log('data')
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }

  useEffect(() => {
    if (infoCount !== 0) {
      if (num * infoCount === dateTimes.length) {
        SetReminder()
        if (!loading) {
          setSuccess(false)
          setLoading(true)
          timer.current = window.setTimeout(() => {
            setSuccess(true)
          }, dateTimes.length * 2000 + 500)
        }
      }
    }
  }, [dateTimes])

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setLoading(false)
        props.onClose()
      }, 3000)
    }
  }, [success])

  useEffect(() => {
    console.log(infoCount)
  }, [infoCount])

  useEffect(() => {
    console.log(count)
  }, [count])

  useEffect(() => {
    console.log(dateTimes)
  }, [dateTimes])

  useEffect(() => {
    if (dates.length === infoCount) {
      SetTimes()
      setCount(0)
    }
    console.log(dates)
  }, [dates])

  const SetTimes = () => {
    for (let i = 0; i < dates.length; i++) {
      const element = dates[i]
      if (timeEnable1) {
        setDateTimes((prestate) => [
          ...prestate,
          element +
            'T' +
            time1.toISOString().split('T')[1].split('.')[0] +
            '-00:00',
        ])
      }
      if (timeEnable2) {
        setDateTimes((prestate) => [
          ...prestate,
          element +
            'T' +
            time2.toISOString().split('T')[1].split('.')[0] +
            '-00:00',
        ])
      }
      if (timeEnable3) {
        setDateTimes((prestate) => [
          ...prestate,
          element +
            'T' +
            time3.toISOString().split('T')[1].split('.')[0] +
            '-00:00',
        ])
      }
      if (timeEnable4) {
        setDateTimes((prestate) => [
          ...prestate,
          element +
            'T' +
            time4.toISOString().split('T')[1].split('.')[0] +
            '-00:00',
        ])
      }
    }
  }

  const SetDates = () => {
    if (satEnable) {
      setDates((prestate) => [
        ...prestate,
        getNextDayOfWeek(6, Date.now()).toISOString().split('T')[0],
      ])
    }
    if (sunEnable) {
      setDates((prestate) => [
        ...prestate,
        getNextDayOfWeek(0, Date.now()).toISOString().split('T')[0],
      ])
    }
    if (monEnable) {
      setDates((prestate) => [
        ...prestate,
        getNextDayOfWeek(1, Date.now()).toISOString().split('T')[0],
      ])
    }
    if (tueEnable) {
      setDates((prestate) => [
        ...prestate,
        getNextDayOfWeek(2, Date.now()).toISOString().split('T')[0],
      ])
    }
    if (wedEnable) {
      setDates((prestate) => [
        ...prestate,
        getNextDayOfWeek(3, Date.now()).toISOString().split('T')[0],
      ])
    }
    if (thuEnable) {
      setDates((prestate) => [
        ...prestate,
        getNextDayOfWeek(4, Date.now()).toISOString().split('T')[0],
      ])
    }
    if (friEnable) {
      setDates((prestate) => [
        ...prestate,
        getNextDayOfWeek(5, Date.now()).toISOString().split('T')[0],
      ])
    }
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

  function getNextDayOfWeek(dayOfWeek) {
    // Code to check that date and dayOfWeek are valid left as an exercise ;)
    /*let nowDate = new Date(Date.now())
    console.log(nowDate.getDate() + 1)
    console.log(nowDate.getDay())
    return new Date(
      nowDate.getDate() + ((7 + dayOfWeek - nowDate.getDay()) % 7)
    )*/
    let nowDate = new Date(Date.now())
    return new Date(
      Date.now() + ((7 + dayOfWeek - nowDate.getDay()) % 7) * 86400000
    )
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: 'JWT ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
      },
    }
    fetch('http://127.0.0.1:8000/api/reminder/', requestOptions)
      .then((response) => {
        if (response.status == 401) {
          throw response
        }
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          alert(errorMessage)
        })
      })
  }, [])

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
          <Box sx={{ m: 1, position: 'relative' }}>
            <Button
              variant='contained'
              className='productsPageAdd'
              sx={{ mr: 3 }}
              onClick={SetDates}
              disabled={!enable || loading}
              sx={buttonSx}
            >
              ADD REMINDER
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Box>

          <Button
            variant='contained'
            className='productsPageAdd'
            onClick={props.onClose}
          >
            CANCEL
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
