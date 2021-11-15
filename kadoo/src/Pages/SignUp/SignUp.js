import React, { useState } from 'react'
import Background from '../../Images/SignUp/SignUpBG.png'
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core'
import { AccountCircle, VpnKey, EmailSharp, Create } from '@material-ui/icons'
import history from '../../history'
import "./SignUp.css"

function SignUp() {
  const initialFormData = Object.freeze({
    name: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  })
  const [formData, updateFormData] = useState(initialFormData);
  const [errorData, updateErrorData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    console.log('email:' + formData.email)
    console.log('username:' + formData.userName)
    console.log('Name:' + formData.name)
    console.log('Last name:' + formData.lastName)
    console.log('password:' + formData.password)
    console.log(
      JSON.stringify({
        email: formData.email,
        user_name: formData.userName,
        first_name: formData.name,
        last_name: formData.lastName,
        password: formData.password,
      })
    )
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        user_name: formData.userName,
        first_name: formData.name,
        last_name: formData.lastName,
        password: formData.password,
      }),
    }
    fetch('http://127.0.0.1:8000/api/user/register/', requestOptions)
      .then((response) => {
        if(response.status === 201)
        {
          alert("User registered!")
        } 
        else
        {
          throw response;
        }
      })
      .catch( err => {
        err.text().then( errorMessage => {
          const errors = JSON.parse(errorMessage)
          console.log("e " + errors.email)
          
          if(errors.first_name !== undefined) {
            updateErrorData({
              ...errorData,
              name: errors.first_name,
            })
            return;
          }

          if(errors.last_name !== undefined) {
            updateErrorData({
              ...errorData,
              lastName: errors.last_name,
            })
            return;
          }

          if(errors.user_name !== undefined) {
            updateErrorData({
              ...errorData,
              userName: errors.user_name,
            })
            return;
          }

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
              id='name'
              name='name'
              variant='standard'
              label='Name'
              margin='normal'
              helperText={errorData.name != '' ? errorData.name : ''}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <Create />{' '}
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <TextField
              id='lastName'
              name='lastName'
              variant='standard'
              label='Last name'
              margin='normal'
              required
              helperText={errorData.lastName != '' ? errorData.lastName : ''}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <AccountCircle />{' '}
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <TextField
              id='userName'
              name='userName'
              variant='standard'
              label='Username'
              margin='normal'
              required
              helperText={errorData.userName != '' ? errorData.userName : ''}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <AccountCircle />{' '}
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <TextField
              id='email'
              name='email'
              variant='standard'
              label='Email'
              margin='normal'
              required
              helperText={errorData.email != '' ? errorData.email : ''}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <EmailSharp />{' '}
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <TextField
              id='password'
              name='password'
              variant='standard'
              type='password'
              label='Password'
              margin='normal'
              required
              helperText={errorData.password != '' ? errorData.password : ''}
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
              href="/"
            >
              Sign Up
            </Button>
            <div style={{ height: 20 }} />
            <Button href="/signin" color='secondary' variant='outlined' onClick={() => history.push("/signin")}>
              Have an account ?
            </Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  )
}

export default SignUp
