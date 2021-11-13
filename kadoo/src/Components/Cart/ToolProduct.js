import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { ShoppingCart } from '@mui/icons-material'
import InvertColorsIcon from '@mui/icons-material/InvertColors'
import LightModeIcon from '@mui/icons-material/LightMode'
import NatureIcon from '@mui/icons-material/Nature'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import ButtonGroup from '@mui/material/ButtonGroup'
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export default function Product(props) {
  const { product, onAddTool, onRemoveTool } = props
  const theme = useTheme()

  return (
    <Card sx={{ m: 1.5, p: 1 }}>
      <Grid container sx={{ display: 'flex', m: 1 }}>
        <Grid
          item
          container
          xs={12}
          sm={6}
          md={4}
          justifyContent='center'
          alignItems='center'
        >
          <CardMedia
            component='img'
            image={product.image}
            alt={product.name}
            sx={{ m: 1 }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <CardContent align='Left'>
            <Box sx={{ display: 'flex' }}>
              <Typography component='div' variant='h5' sx={{ flex: 1 }}>
                {product.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton
                  size='large'
                  aria-label='show 4 new mails'
                  color='inherit'
                  sx={{ color: 'error.main' }}
                  onClick={() => onRemoveTool(product)}
                >
                  <RemoveIcon />
                </IconButton>
                <TextField
                  id='outlined-number'
                  size='small'
                  sx={{ width: 50 }}
                  InputLabelProps={{ shrink: true }}
                  value={product.count}
                />
                <IconButton
                  size='large'
                  color='inherit'
                  sx={{ color: 'success.main' }}
                  onClick={() => onAddTool(product)}
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
            <Typography component='div' variant='body' sx={{ flex: 1, mt: 1 }}>
              {product.description}
            </Typography>
          </CardContent>
          <Grid container direction='row' justifyContent='flex-end'>
            <Chip
              label={product.price + '  $'}
              color='success'
              variant='outlined'
              style={{ fontSize: '1.1rem' }}
              sx={{ pt: 0.5, pb: 0.5, pr: 1.5, pl: 1.5, m: 1, mr: 4 }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}
