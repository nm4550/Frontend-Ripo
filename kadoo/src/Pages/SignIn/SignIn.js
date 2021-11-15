import React from 'react'
import Background from '../../Images/SignIn/signInBG.png'
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core'
import { EmailRounded, VpnKey } from '@material-ui/icons'
import { useState } from 'react'
import history from '../../history'
import "./SignIn.css"

function SignIn() {
  const initialFormData = Object.freeze({
    email: '',
    password: '',
  })
  const [formData, updateFormData] = useState(initialFormData)
  const [flagData, setFlagData] = useState(true)
  const [errorData, updateErrorData] = useState(initialFormData);

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
      .then((response) => {
        if(response.status == 200)
        {
          return response.json()
        } 
        else
        {
          throw response;
        }
      })
      .catch( err => {
        flagData = false;
        err.text().then( errorMessage => {
          const errors = JSON.parse(errorMessage)
          console.log("e " + errors.email)
          if(errors.email !== undefined) {
            updateErrorData({
              ...errorData,
              email: errors.email,
            })
            return;
          }
          
          if(errors.password !== undefined) {
            updateErrorData({
              ...errorData,
              password: errors.password,
            })
            return;
          }
        })
      })
      .then((data) => {
        if(flagData == true)
        {
          localStorage.setItem('access_token', data.access)
          localStorage.setItem('refresh_token', data.refresh)
          alert("Welcome !")
        }
      })
  }
  return (
    <div>
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
            <div style={{ height: 20 }} style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 400,
              minWidth: 300,
            }} />
            <Button
              color='secondary'
              variant='contained'
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <div style={{ height: 20 }} />
            <Button href="/signup" color='secondary' variant='outlined' onClick={() => history.push("/signup")}>
              Sign Up
            </Button>
          </div>
          <div>
            <br/>
          <Grid container justifyContent='center' spacing={2} alignItems='center'>
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
          </div>        
        </Grid>
      </Grid>
    </div>
  )
}

export default SignIn
