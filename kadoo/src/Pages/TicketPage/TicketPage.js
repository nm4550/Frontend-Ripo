import React, { useEffect, useState } from 'react'
import AppBar from '../../Components/AppBar/AppBar'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import ShowAllTickets from '../../Components/ShowTickets/ShowAllTickets'

export default function TicketPage() {
    const [ticketsData, setTicketsData] = React.useState([]);

    const allTickets=()=>{
      const requestOptions = {
        method: 'GET',
        headers: {
         'Authorization': 'JWT ' + localStorage.getItem('access_token'),
         'Content-Type': 'application/json',
        },
      }
    fetch('http://127.0.0.1:8000/api/ticket/inprogress-tickets/', requestOptions)
    .then((response) => response.json())
    .then((data) => {
        setTicketsData(data)
        console.log(data, "1111111111")
        
    })
    }

    useEffect(() => {
        allTickets()
        }, []);


    return(
        <div>
            <AppBar
            SearchOption={false}
            TicketOption={false}
            CartOption={false}
            AuthorizationOption={true}
            DrawerOption={true}
            />

            <Card
                style={{ backgroundColor: '#f5f4f4' }}
                sx={{
                  mt: { xs: 3, sm: 5 },
                  mb: { xs: 3, sm: 5 },
                  ml: { xs: 3, sm: 20 },
                  mr: { xs: 3, sm: 20 },
                  pl: { xs: 1, sm: 2, md: 5 },
                  pr: { xs: 1, sm: 2, md: 5 },
                  pt: 2,
                  pb: 2,
                }}
              >
                <Grid
                  container
                  direction='row'
                  justifyContent='center'
                  alignItems='flex-start'
                >
                    <Grid item>
                        <ShowAllTickets data={ticketsData} />
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}