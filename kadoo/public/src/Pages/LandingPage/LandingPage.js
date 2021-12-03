import * as React from 'react';
import "./LandingPage.css"
import Background from '../../Images/Landing/Background.png'
import Background2 from '../../Images/Landing/Background2.png'
import apartmentPlants from '../../Images/Landing/apartmentPlants.jpg';
import GardenPlants from '../../Images/Landing/GardenPlants.jpg';
import YardPlants from '../../Images/Landing/YardPlants.jpg';
import Amir from '../../Images/Landing/Amirmohammad.jpg';
import Hooriye from '../../Images/Landing/Hoorie.jpg';
import Elnaz from '../../Images/Landing/Elnaz.jpg';
import Navid from '../../Images/Landing/Navid.jpg';
import Sara from '../../Images/Landing/Sara.jpg';
import Deniz from '../../Images/Landing/Deniz.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Fade } from "react-awesome-reveal";
import AppBar from "../../Components/AppBar/AppBar";
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';

export default function LandingPage() {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
         <AppBar/>
      </Box>
      <Box 
      style={{backgroundImage:`url(${Background})`, 
      backgroundPosition: 'center' ,
      height: '100vh' ,
      backgroundRepeat: 'no-repeat' ,
      backgroundSize: 'cover', 
      position: 'relative' ,
      display: 'flex' ,
      justifyContent: 'center' ,
      flexDirection:"column",
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
        <Grid className="Introduction">
          <p>We often don't think to buy plant online. But what if we tell you that you can now order the most beautiful plants right from home? Kadoo presents a broad range of Live Plants that can be bought online in Iran.</p>
        </Grid>
      </Box>
      <Grid style={{backgroundImage:`url(${Background2})` ,
      backgroundPosition: 'center' ,
      height: '200vh' ,
      backgroundRepeat: 'no-repeat' ,
      backgroundSize: 'cover', 
      position: 'relative' ,
      display: 'flex' ,
      justifyContent: 'center' ,
      alignItems: 'center'}}>
      <Container className="Container"  maxWidth="lg" >
        <Typography variant="h4" className="TypographyKadoo">
          <h4>Why<span className="Span"> kadoo</span> :</h4>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="Card" >            
              <CardMedia
              className="Media"
              image={apartmentPlants}
              alt="Apartment Plants"
              sx={{ maxWidth: {sm: 400 , xs: 400 , md: 400} , height: { sm: 300 , xs:250 , md: 200}}}/>
              <CardContent >
                <Typography gutterBottom color="#212121" varient="h5" component="h2">
                  Apartment plants
                </Typography>
                <Typography color="#7FC7AD" variant="body2" component="p">
                  Fill your living space with houseplants to making your apartment feel more
                  welcoming and also for help clean the air.
                </Typography>
              </CardContent>
            </Card>         
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="Card">            
              <CardMedia
              className="Media"
              image={GardenPlants}
              alt="Garden Plants"
              sx={{ maxWidth: {sm: 400 , xs: 400 , md: 400} , height: { sm: 300 , xs:250 , md: 200}}}/>
              <CardContent >
                <Typography gutterBottom color="#212121" varient="h5" component="h2">
                  Garden plants
                </Typography>
                <Typography color="#7FC7AD" variant="body2" component="p">
                  Buying Garden Plants online is easy from Kadoo, as the leading online 
                  garden nursery, our plant selection is first to none.
                </Typography>
              </CardContent>
            </Card>        
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="Card">            
              <CardMedia
              className="Media"
              image={YardPlants}
              alt="Yard Plants"
              sx={{ maxWidth: {sm: 400 , xs: 400 , md: 400} , height: { sm: 300 , xs:250 , md: 200}}}/>
              <CardContent >
                <Typography gutterBottom color="#212121" varient="h5" component="h1">
                  Yard plants
                </Typography>
                <Typography color="#7FC7AD" variant="body2" component="p">
                  With a pinch of effort , you can have the lush, beautiful garden of your 
                  dreams. The secret is to choose your plants from Kadoo.
                </Typography>
              </CardContent>
            </Card>         
          </Grid>
        </Grid>
        <Grid className="GridContactUs">
          <Typography variant="h4" className="TypographyContactUs">
            <h4>About<span className="Span"> Us</span> :</h4>
          </Typography>
        </Grid>
        <Grid container spacing={3} justifyContent="center"  className="Avatars">
          <Grid item>
            <Avatar
            alt="Amirmohammad Sohrabi"
            src={Amir}
            sx={{ width: {sm: 90 , xs: 30 }, height: { sm: 90 , xs:30 }}}
          />
          </Grid>
          <Grid item>
            <Avatar
            alt="Hooriye Sabzevari"
            src={Hooriye}
            sx={{ width: {sm: 90 , xs: 30}, height: { sm: 90 , xs:30 }}}
          />
          </Grid>
          <Grid item>
            <Avatar
            alt="Elnaz Rezaee"
            src={Elnaz}
            sx={{ width: {sm: 90 , xs: 30}, height: { sm: 90 , xs:30 }}}
          />
          </Grid>
          <Grid item>
            <Avatar
            alt="Navid Moosavizade"
            src={Navid}
            sx={{ width: {sm: 90 , xs: 30}, height: { sm: 90 , xs:30 }}}
          />
          </Grid>
          <Grid item>
            <Avatar
            alt="Sara Yoonesi"
            src={Sara}
            sx={{ width: {sm: 90 , xs: 30}, height: { sm: 90 , xs:30 }}}
          />
          </Grid>
          <Grid item>
            <Avatar
            alt="Deniz Ahmadi"
            src={Deniz}
            sx={{ width: {sm: 90 , xs: 30}, height: { sm: 90 , xs:30 }}}
          />
          </Grid>
        </Grid>
        <Grid className="GridContactUs">
          <Typography variant="h4" className="TypographyContactUs">
            <h4>Contact<span className="Span"> Us</span> :</h4>
          </Typography>
        </Grid>
        <Grid container spacing={3} justifyContent="center" className="Avatars">
          <Grid item >
            <IconButton>
              <TelegramIcon  sx={{ width: {sm: 90 , xs: 30}, height: { sm: 90 , xs:30 }}}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <WhatsAppIcon  sx={{ width: {sm: 90 , xs: 30}, height: { sm: 90 , xs:30 }}}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <TwitterIcon  sx={{ width: {sm: 90 , xs: 30}, height: { sm: 90 , xs:30 }}}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <AlternateEmailIcon  sx={{ width: {sm: 90 , xs: 30}, height: { sm: 90 , xs:30 }}}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <PhoneIcon  sx={{ width: {sm: 90 , xs: 30}, height: { sm: 90 , xs:30 }}}/>
            </IconButton>  
          </Grid>
        </Grid>
      </Container>
      </Grid>
      

    </div>
  );
}