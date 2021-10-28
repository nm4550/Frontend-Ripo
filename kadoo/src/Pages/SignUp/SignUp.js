import React from 'react';
import Background from '../../Images/SignIn/Background.jpg';
import { ButtonGroup, Fab, Grid, TextField , Button , InputAdornment } from '@material-ui/core';
import { AccountCircle , VpnKey , EmailSharp , Create } from '@material-ui/icons';

function SignUp(){
    return(
        <div BackgroundColor="secondary">
            <Grid container style={{minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img src={Background} style={{width: '100%' , height: '100%' , objectFit:'cover'}} alt="Background"/>
                </Grid>
                <Grid 
                container 
                item 
                xs={12} 
                sm={6}
                alignItems="center"
                direction="column"
                justify="space-between" 
                style={{padding: 10}}>
                    <Grid container justifyContent="flex-end">
                        <ButtonGroup disableElevation>
                            <Fab color="secondary" variant="contained" size="large">
                                Sign In
                            </Fab>
                            <Fab color="secondary" variant="contained" size="large">
                                Sign Up
                            </Fab>
                        </ButtonGroup>
                    </Grid>
                    <div 
                    style={{
                        display:"flex" , 
                        flexDirection:"column" ,
                        maxWidth: 400,
                        minWidth: 300}}>
                        <TextField 
                        variant="standard"
                        label="Name" 
                        margin="normal"
                        required
                        InputProps={{startAdornment:<InputAdornment position="start"> <Create/> </InputAdornment>}} /> 
                        <TextField 
                        variant="standard"
                        label="Last name" 
                        margin="normal"
                        required
                        InputProps={{startAdornment:<InputAdornment position="start"> <AccountCircle/> </InputAdornment>}} /> 
                        <TextField 
                        variant="standard"
                        label="Email" 
                        margin="normal"
                        required
                        InputProps={{startAdornment:<InputAdornment position="start"> <EmailSharp/> </InputAdornment>}} /> 
                        <TextField 
                        variant="standard"
                        type="password"
                        label="Password" 
                        margin="normal"
                        required
                        InputProps={{startAdornment:<InputAdornment position="start"> <VpnKey/> </InputAdornment>}}/>
                        <div style={{height: 20}}/> 
                        <Button color="secondary" variant="contained">
                            Sign Up
                        </Button>
                    </div>
                    <div/>
                </Grid>
            </Grid>
        </div>
    );
}

export default SignUp;