import * as React from 'react'
import './ToolsCart.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings'

export default function ToolsCart(props) {
  return (
    <Card>
      <CardActionArea>
        <Link to={'/ProductToolsPage/' + props.product.id}>
          <Grid className='productIconImageContainer' sx={{ p: 1 }}>
            <CardMedia
              component='img'
              height='200'
              image={props.product.image}
              alt='picture'
              className='toolIconImage'
            />
          </Grid>
        </Link>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.product.name}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            $ {props.product.price}
          </Typography>
          <div className='featButton'>
            <SettingsIcon className='toolIcon' />
            <a className='Message'>Tools</a>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
