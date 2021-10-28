import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from '../../Components/Sidebar/Sidebar'
import ShowProduct from '../../Components/ShowProduct/ShowProduct';

class Home extends React.Component {
    render() {
      return(
        <div>
        <Navbar/>
        
        <Box>
          <Grid container>
            <Grid xs={2}>
            <Sidebar/>
            </Grid>
            <Grid xs={10} >
            <ShowProduct/>
            </Grid>
          </Grid>
        </Box>
        
        
        </div>
      )
    }
  }

export default Home;