import React,{useEffect,useState} from 'react' ;
import "./ProductIcon.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import OpacityIcon from '@mui/icons-material/Opacity';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NatureIcon from '@mui/icons-material/Nature';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

function ProductIcon2(props){
    return( 
        <Box className="productIconLink" sx={{ width: '100%' }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
          <LightTooltip title={props.product.description}>
          <Link to = {'/ProductPlantsPage/'+ props.product.id}>
            <div className="productIconImageContainer"><img className="productIconImage" src={props.product.image}></img></div>
          </Link>
          </LightTooltip>
          </Grid>
          <Grid item xs={12}>
            <div className="productIconName"><a>{props.product.name}</a></div>
          </Grid>
          <Grid item xs={12}>
            <div className="productIconPrice">$ {props.product.price}
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="featButton">
            <WbSunnyIcon className="lightButton"/>
            <a className="Message" > {props.product.light} </a>
            <OpacityIcon className="waterButton"/>
            <a className="Message" > {props.product.water} </a>
            <NatureIcon className="growButton"/>
            <a className="Message" > {props.product.growthRate} </a>
            </div>
          </Grid>
        </Grid>
      </Box>
      
    )
}

export default ProductIcon2;