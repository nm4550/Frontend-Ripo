import React from 'react';
import "./ProductIcon.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

function ProductIcon2(props){
    return(
        <Link to = {'/productPage2/'+ props.product.id}>
        <Box className="productIconLink" sx={{ width: '100%' }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <div className="productIconImageContainer"><img className="productIconImage" src={props.product.image}></img></div>
          </Grid>
          <Grid item xs={12}>
            <div className="productIconName">{props.product.name}</div>
          </Grid>
          <Grid item xs={6}>
            <div className="productIconPrice">${props.product.price}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="productIconAdd">
          <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon className="addToCartButton" />
          </IconButton>
            </div>
          </Grid>
        </Grid>
      </Box>
      </Link>
    )
}

export default ProductIcon2;