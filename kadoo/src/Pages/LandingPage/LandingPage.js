import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./LandingPage.css"
import Background from '../../Images/Landing/Background.png'
import Background2 from '../../Images/Landing/Background2.png'
import Background3 from '../../Images/Landing/Background3.png'
import { Container } from '@mui/material';
import { Fade } from "react-awesome-reveal";
import AppBar from "../../Components/AppBar/AppBar";

export default function LandingPage() {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
         <AppBar/>
      </Box>
      <Box 
      style={{backgroundImage:`url(${Background})`, 
      backgroundPosition: 'center' ,
      height: '90vh' ,
      backgroundRepeat: 'no-repeat' ,
      backgroundSize: 'cover', 
      position: 'relative' ,
      display: 'flex' ,
      justifyContent: 'center' ,
      alignItems: 'center'}}
      alt='Background'
      >
        <Box className="Box1" flexDirection="column">
          <Fade>
            <h6 data-text="kadoo" className="KadooAnimation">kadoo</h6>
            <a href="/Homepage" className="Button">
              <span/>
              <span/>
              <span/>
              <span/>           
              Click here to start
            </a>
          </Fade>
        </Box>
      </Box>
      <Box 
      style={{backgroundImage:`url(${Background2})`, 
      backgroundPosition: 'center' ,
      height: '100vh' ,
      backgroundRepeat: 'no-repeat' ,
      backgroundSize: 'cover', 
      position: 'relative' ,
      display: 'flex' ,
      justifyContent: 'center' ,
      alignItems: 'center'}}
      alt='Background'>
        <Box>
          <p>We often don't think to buy plant online. But what if we tell you that you can now order the most beautiful plants right from home? Kadoo presents a broad range of Live Plants that can be bought online in Iran.</p>
        </Box>
      </Box>
      <Box 
      style={{backgroundImage:`url(${Background3})`, 
      backgroundPosition: 'center' ,
      height: '100vh' ,
      backgroundRepeat: 'no-repeat' ,
      backgroundSize: 'cover', 
      position: 'relative' ,
      display: 'flex' ,
      justifyContent: 'center' ,
      alignItems: 'center'}}
      alt='Background'
      className="background">
        <Box>
          
        </Box>
      </Box>
      <Container>

      </Container>
    </div>
  );
}