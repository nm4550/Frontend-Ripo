import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDateTimePicker from '@mui/lab/StaticDateTimePicker';
import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography'



export default function Reminder() {
  const [value, setValue] = React.useState(new Date());

  function DenizJoonReminder(){
      console.log(value)
    
  }
  return (
    <Grid container justifyContent = "center" alignItems = "center" sx={{pl : {xs:2 , sm:10} , pr : {xs:2 , sm:10}}}>
        <Grid item container justifyContent = "center" alignItems = "center">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateTimePicker
                displayStaticWrapperAs="desktop"
                openTo="year"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
        </Grid>
        <Grid container item justifyContent="flex-end" sx={{p:3 , Color: '#12824C'}} className="ProductPageTitle">
            <Button variant="contained" className="productsPageAdd" onClick={DenizJoonReminder}>
                Add To value
            </Button>
        </Grid>
    </Grid>
  );
}