import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ProductIcon1 from '../productIcon/productIcon1'
import ProductIcon2 from '../productIcon/productIcon2'
import './ShowProduct.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}))

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
})

function ShowProduct(props) {
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <div className='showProductSubs'>Products</div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {props.data.map((p) => (
            <Grid item xs={12} sm={6} md={4}>
              {p.kind == 'Plant' && (
                <Item className='showProductsIcons'>
                  <ProductIcon2 product={p} />
                </Item>
              )}

              {p.kind == 'Tool' && (
                <Item className='showProductsIcons'>
                  <ProductIcon1 product={p} />
                </Item>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default ShowProduct
