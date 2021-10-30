import React , {useState} from 'react';
import axiosInstance from '../../axios';
import Background from '../../Images/SignIn/Background.jpg';
import { Grid, TextField , Button , InputAdornment } from '@material-ui/core';
import { AccountCircle , VpnKey , EmailSharp , Create } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

function SignUp(){
    const history = useHistory();
    const initialFormData = Object.freeze({
        name:'',
        lastName:'',
        userName:'',
        email:'',
        password:''
    });
    const [formData , updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log("email:" + formData.email);
        console.log("username:" + formData.userName);
        console.log("Name:" + formData.name);
        console.log("Last name:" + formData.lastName);
        console.log("password:" + formData.password);
        console.log( JSON.stringify({
            "email": formData.email,
            "user_name": formData.userName,
            "first_name": formData.name,
            "last_name": formData.lastName,
            "password": formData.password,
        }))
        axiosInstance
            .post(`user/register/`, JSON.stringify({
                "email": formData.email,
                "user_name": formData.userName,
                "first_name": formData.name,
                "last_name": formData.lastName,
                "password": formData.password,
            }))
            .then((res) => {
                //history.push('/SignIn');
                console.log(res);
                //console.log(res.data);
            });
    };

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
                    <div/>
                    <div 
                    style={{
                        display:"flex" , 
                        flexDirection:"column" ,
                        maxWidth: 400,
                        minWidth: 300}}>
                        <TextField 
                        id="name"
                        name="name"
                        variant="standard"
                        label="Name" 
                        margin="normal"
                        required
                        InputProps={{startAdornment:<InputAdornment position="start"> <Create/> </InputAdornment>}}
                        onChange={handleChange} /> 
                        <TextField 
                        id="lastName"
                        name="lastName"
                        variant="standard"
                        label="Last name" 
                        margin="normal"
                        required
                        InputProps={{startAdornment:<InputAdornment position="start"> <AccountCircle/> </InputAdornment>}}
                        onChange={handleChange} /> 
                        <TextField 
                        id="userName"
                        name="userName"
                        variant="standard"
                        label="Username" 
                        margin="normal"
                        required
                        InputProps={{startAdornment:<InputAdornment position="start"> <AccountCircle/> </InputAdornment>}}
                        onChange={handleChange} /> 
                        <TextField 
                        id="email"
                        name="email"
                        variant="standard"
                        label="Email" 
                        margin="normal"
                        required
                        InputProps={{startAdornment:<InputAdornment position="start"> <EmailSharp/> </InputAdornment>}}
                        onChange={handleChange} /> 
                        <TextField 
                        id="password"
                        name="password"
                        variant="standard"
                        type="password"
                        label="Password" 
                        margin="normal"
                        required
                        InputProps={{startAdornment:<InputAdornment position="start"> <VpnKey/> </InputAdornment>}}
                        onChange={handleChange} />
                        <div style={{height: 20}}/> 
                        <Button color="secondary" variant="contained" onClick={handleSubmit}>
                            Sign Up
                        </Button>
                        <div style={{height: 20}}/> 
                        <Button color="secondary" variant="outlined">
                            Have an account ?
                        </Button>
                    </div>
                    <div/>
                </Grid>
            </Grid>
        </div>
    );
}

export default SignUp;