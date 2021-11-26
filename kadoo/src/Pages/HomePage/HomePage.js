import React, { useEffect, useState } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import ShowProduct from '../../Components/ShowProduct/ShowProduct';
import CategoryDrawer from "../../Components/CategoryDrawer/CategoryDrawer";
import { Drawer } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box'

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
class HomePage extends React.Component {
   
      constructor (props){
        super (props)
        this.state={
          open:true,
        }
      }
      render() {
      return(
        <div>
        <Navbar/> 
        
        
    <CategoryDrawer/>  
      <Main open={this.state.open}>
       <DrawerHeader/>
       <Box>
       <ShowProduct/>
       </Box>
       
      </Main>

        
        </div>
      )
    }
  }

export default HomePage;