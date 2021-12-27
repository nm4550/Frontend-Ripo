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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TimePicker from '@mui/lab/TimePicker';

export default function Reminder() {
  function handleClick(index){
    if(weekDays[index]){
      setWeekDays((pre)=>[{...pre ,[pre[index]]:false}])
      // setPlantData((prestate) => [...prestate, data])
    }
    // else{
    //   setWeekDays((pre)=>[{...pre ,[pre[index]]:true}])
    // }
    console.log('You clicked the Chip.');
  };
  const [value, setValue] = React.useState(null);
  const [weekDays,setWeekDays] = React.useState([false,false,false,false,false,false,false])
// render() {
//             var increaseBought=()=>{
//           var nob=this.state.numberOfBuy
//               this.setState({
//                   numberOfBuy:nob+1,
//                   totalPrice:(nob+1)*this.state.product.price
//           })
//       }
//       var decreaseBought=()=>{
//           var nob=this.state.numberOfBuy
//           if (nob > 0){
//               this.setState({
//                   numberOfBuy:nob-1,
//                   totalPrice:(nob-1)*this.state.product.price
//           })
//           }
//       }
// }
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
        }}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'>
            <Typography
              variant='h5'
              gutterBottom
              component='div'
              align='center'
              noWra
              >Which days you want me to remind you? 
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent='center'
            alignItems='center'>
            <Stack direction="row" spacing={1}>
              <Chip label="SAT" onClick={() => handleClick(0)} color={weekDays[0]?'primary':'default'} />
              <Chip label="SUN" onClick={handleClick(1)} color={weekDays[1]?'primary':'default'} />
              <Chip label="MON" onClick={handleClick(2)} color={weekDays[2]?'primary':'default'} />
              <Chip label="TUE" onClick={handleClick(3)} color={weekDays[3]?'primary':'default'} />
              <Chip label="WED" onClick={handleClick(4)} color={weekDays[4]?'primary':'default'} />
              <Chip label="THU" onClick={handleClick(5)} color={weekDays[5]?'primary':'default'} />
              <Chip label="FRI" onClick={handleClick(6)} color={weekDays[6]?'primary':'default'} />
            </Stack>
          </Grid>
          <Grid container justifyContent='center' alignItems='center'>
            <Divider sx={{m:2}} style={{width:'50%'}}/>
          </Grid>
          <Grid 
            justifyContent='center'
            alignItems='center'>
            <Typography
              variant='h5'
              gutterBottom
              component='div'
              align='center'
              noWra
              >How many times day? 
            </Typography>
          </Grid>
        <Grid justifyContent='center' alignItems='center'>
          <IconButton 
              size='large'
              aria-label='show 4 new mails'
              color='inherit'
              sx={{ color: 'error.main' }}
              // onClick={decreaseBought}
              >
              <RemoveIcon />
          </IconButton>
          {/* <div className="ProductPageCounterNum">
              {this.state.numberOfBuy}
          </div> */}
          <IconButton 
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
            sx={{ color: 'success.main' }}
            // onClick={increaseBought}
            >
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid container justifyContent='center' alignItems='center'>
          <Divider sx={{m:2}} style={{width:'50%'}}/>
        </Grid>
        <Grid
          container
          justifyContent='center'
          alignItems='center'>
          <Typography
            variant='h5'
            gutterBottom
            component='div'
            align='center'
            noWra
            >Pick your times? 
          </Typography>
        </Grid>
        <Grid          
          container
          justifyContent='center'
          alignItems='center'>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid container justifyContent='center' alignItems='center' sx={{p:3 , Color: '#12824C'}} className="ProductPageTitle">
          <Button variant="contained" className="productsPageAdd" sx={{mr:3}}>
            ADD REMINDER          
          </Button>
          <Button variant="contained" className="productsPageAdd">
            CANSEL         
          </Button>
        </Grid>
      </Grid>
    </Grid>
)
}
