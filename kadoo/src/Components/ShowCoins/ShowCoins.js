import React, { useEffect, useState } from 'react'
import "./ShowCoins.css";
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import CoinsIcon from '../../Images/Coins/coins.png'

export default function ShowCoins(props) {

    const [coins, setCoinsNumber] = useState(0)
    useEffect(() => {

        const requestOptions = {
            method: 'GET',
            headers: {
             'Authorization': 'JWT ' + localStorage.getItem('access_token'),
             'Content-Type': 'application/json',
            },
      
          }
        fetch('http://127.0.0.1:8000/api/coin/get/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setCoinsNumber(data.coin_vlaue)
          console.log(data)
        })
    }, []);
    return (
        <Grid
        display='flex'
        alignItems='center'
        >
            <img src={CoinsIcon}/>
            <Typography className='coinText'>Coins: {coins}</Typography>
        </Grid>
        )}