import React from 'react';
import "./ProductIcon.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


function ProductIcon1(props){
    return(
        <Box className="productIconLink" sx={{ width: '100%' }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
          <Link to = {'/ProductToolsPage/'+ props.product.id}>
            <div className="productIconImageContainer"><img className="productIconImage" src={props.product.image}></img></div>
          </Link>
          </Grid>
          <Grid item xs={12}>
            <div className="productIconName"><a>{props.product.name}</a></div>
          </Grid>
          <Grid item xs={12}>
            <div className="productIconPrice">${props.product.price}
            </div>
          </Grid>
        </Grid>
      </Box>
    )
}

export default ProductIcon1;