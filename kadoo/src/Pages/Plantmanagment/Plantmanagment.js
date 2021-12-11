import React, { useEffect, useState, useRef } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Slide from '@mui/material/Slide'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ProductIcon2 from '../../Components/productIcon/productIcon2'
import AppBar from '../../Components/AppBar/AppBar'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import ShowPlants from '../../Components/ShowProduct/ShowPlants'
import SkeletonArticle from '../../Components/Cart/SkeletonArticle'


function Plantmanagment(props) {
  
  ///const containerRef = React.useRef(null)
  const [openDrawer, setOpenDrawer] = React.useState(false) 
  const [plantData, setPlantData] = React.useState(false) 
  const [plantDataLoaded, setPlantDataLoaded] = React.useState(false) 

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
  }
  useEffect(() =>{  
     
    const requestOptions = {
      method: 'GET',
      headers: {
       'Authorization': 'JWT ' + localStorage.getItem('access_token'),
       'Content-Type': 'application/json',
      },

    }

    setPlantData([])
    setPlantDataLoaded ( false ) 
    console.log ('chera kharabi') 
    setTimeout(async () => {


      fetch('http://127.0.0.1:8000/api/myPlants/', requestOptions)
      .then(async (response) => {
    const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson ? await response.json() : null;

        // check for error response
        console.log(response.status)
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        setPlantData(data)
          setPlantDataLoaded(true)
          console.log(data) 


      })
      .catch(error => {
        
        console.error('There was an error!', error);
    }); 

    
   
  }, [ ])
  return (
    <div>
     

<AppBar
              SearchOption={true}
              TicketOption={true}
              CartOption={true}
              AuthorizationOption={true}
              isopen={openDrawer}
              OpenMenu={handleDrawerOpen}
              CloseMenu={handleDrawerClose}
            />

             {(plantData.length != 0 ) && (
                  <div>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <ShowPlants data={plantData} />
                    </Grid>
                  </div>
                )}
                {plantData.length === 0 && (
                  <div>
                    {plantDataLoaded === true && (
                      <Alert severity='error'>
                        There is NO plant right now! Come Back soon ...
                      </Alert>
                    )}
                    {plantDataLoaded === false && (
                      <Stack sx={{ m: 2 }}>
                        <SkeletonArticle />
                      </Stack>
                    )}
                    </div>
                )}

    </div>
  )
}


export default Plantmanagment
