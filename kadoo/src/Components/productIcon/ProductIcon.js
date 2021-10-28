import React from 'react';
import "./ProductIcon.css";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'

function ProductIcon(props){
    return(
        <a>
        <Box className="productIconLink" sx={{ width: '100%' }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <div className="productIconImageContainer"><img className="productIconImage" src={props.product.image}></img></div>
          </Grid>
          <Grid item xs={12}>
            <div className="productIconName">{props.product.name}</div>
          </Grid>
          <Grid item xs={12}>
            <div className="productIconPrice">{props.product.price}</div>
          </Grid>
        </Grid>
      </Box>
      </a>
    )
}

export default ProductIcon;