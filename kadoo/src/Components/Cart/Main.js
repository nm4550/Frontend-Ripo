import React from 'react'
import Product from './Product'
import ToolProduct from './ToolProduct'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

export default function Main(props) {
  const { plants, tools, onAddPlant, onAddTool, onRemovePlant, onRemoveTool } =
    props
  return (
    <Box align='left'>
      <Typography
        variant='h5'
        noWrap
        component='div'
        sx={{ color: 'secondary.main', m: 0.5, p: 2 }}
      >
        Plants
      </Typography>
      <Divider variant='middle' sx={{ m: 1 }} />
      <div>
        {plants.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddPlant={onAddPlant}
            onRemovePlant={onRemovePlant}
          ></Product>
        ))}
      </div>
      <Typography
        variant='h5'
        noWrap
        component='div'
        sx={{ color: 'secondary.main', m: 0.5, p: 2 }}
      >
        Tools
      </Typography>
      <Divider variant='middle' sx={{ m: 0.5 }} />
      <div>
        {tools.map((product) => (
          <ToolProduct
            key={product.id}
            product={product}
            onAddTool={onAddTool}
            onRemoveTool={onRemoveTool}
          ></ToolProduct>
        ))}
      </div>
    </Box>
  )
}
