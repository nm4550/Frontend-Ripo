import React, { useRef, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from "swiper/react";
import './swiper.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';
import apartmentPlants from '../../Images/Landing/apartmentPlants.jpg';
import GardenPlants from '../../Images/Landing/GardenPlants.jpg';
import YardPlants from '../../Images/Landing/YardPlants.jpg';
SwiperCore.use([EffectCoverflow,Pagination]);

export default function App() {
  return (
    <>
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true
        }} pagination={true} className="mySwiper">
        <SwiperSlide>
            <Card className="Card" >            
                <CardMedia
                className="Media"
                image={apartmentPlants}
                alt="Apartment Plants"
                sx={{ maxWidth: {sm: 400 , xs: 400 , md: 400} , height: { sm: 270 , xs:400 , md: 300}}}/>
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
        </SwiperSlide>
        <SwiperSlide>
            <Card className="Card">            
                <CardMedia
                className="Media"
                image={GardenPlants}
                alt="Garden Plants"
                sx={{ maxWidth: {sm: 400 , xs: 400 , md: 400} , height: { sm: 270 , xs:400 , md: 300}}}/>
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
        </SwiperSlide>
        <SwiperSlide>
            <Card className="Card">            
                <CardMedia
                className="Media"
                image={YardPlants}
                alt="Yard Plants"
                sx={{ maxWidth: {sm: 400 , xs: 400 , md: 400} , height: { sm: 270 , xs:400 , md: 300}}}/>
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
        </SwiperSlide>
    </Swiper>
    </>
  )
}