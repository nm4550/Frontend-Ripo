import React from 'react'
import Background from '../../Images/SignIn/Background.jpg'
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core'
import { EmailRounded, VpnKey } from '@material-ui/icons'
import { useHistory } from 'react-router'
import { useState } from 'react'

function SignIn() {
  const history = useHistory()
  const initialFormData = Object.freeze({
    email: '',
    password: '',
  })
  const [formData, updateFormData] = useState(initialFormData)

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    }
    fetch('http://127.0.0.1:8000/api/user/token/', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('access_token', data.access)
        localStorage.setItem('refresh_token', data.refresh)
      })
  }
  return (
    <div BackgroundColor='secondary'>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6}>
          <img
            src={Background}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt='Background'
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems='center'
          direction='column'
          justify='space-between'
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <TextField
              variant='standard'
              name='email'
              label='Email'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <EmailRounded />{' '}
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <TextField
              variant='standard'
              type='password'
              name='password'
              label='Password'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <VpnKey />{' '}
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <div style={{ height: 20 }} />
            <Button
              color='secondary'
              variant='contained'
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <div style={{ height: 20 }} />
            <Button color='secondary' variant='outlined'>
              Sign Up
            </Button>
          </div>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item>
              <Button variant='outlined' color='secondary'>
                Go to community page
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='secondary'>
                Forgot password
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignIn
