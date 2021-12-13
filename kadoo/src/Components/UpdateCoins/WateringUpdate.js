import React, { useEffect, useState } from 'react'
import ShowCoins from '../ShowCoins/ShowCoins';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';

export default function WateringUpdate() {
    const[watering,setWatering]=useState(false)
    const[handle,setHandle]=useState(false)

    useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    }
    fetch('http://127.0.0.1:8000/api/coin/new-watering/', requestOptions)
    .then((response) => response.json())
    .then((data) => {
        setWatering(true)
    })
    }, [handle]);

    useEffect(() => {
    if(watering){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    }
    fetch('http://127.0.0.1:8000/api/coin/daily-watering-update/', requestOptions)
    .then((response) => response.json())
    .then((data) => {
    })}
    }, [watering]);

    const handleClick = () => {
        setHandle(handle? false:true)
      }
    
    return (
        <div style={{backgroundColor:'darkblue'}}>
        <Button variant="contained" onClick={handleClick}>TEST</Button>
        <ShowCoins/>
        </div>
        )}