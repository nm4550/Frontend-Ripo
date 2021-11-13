import React from 'react'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'

export default function Basket(props) {
  const { cartItems, toolCartItems, CheckoutCart } = props
  let itemsPrice = cartItems.reduce((a, c) => a + c.count * c.price, 0)
  itemsPrice += toolCartItems.reduce((a, c) => a + c.count * c.price, 0)
  const taxPrice = itemsPrice * 0.09
  const shippingPrice = itemsPrice > 300 ? 0 : 20
  const totalPrice = itemsPrice + taxPrice + shippingPrice
  return (
    <aside className='block col-1'>
      <Card sx={{ p: 1 }}>
        <h2>Cart Items</h2>
        <Box sx={{ p: 1 }}>
          <Typography variant='h5' sx={{ m: 0.5 }}>
            Plants
          </Typography>
          <Divider variant='middle' />
          {cartItems.length === 0 && (
            <Alert severity='error'>Plant Cart Is Empty!</Alert>
          )}
          {cartItems.map((item) => (
            <Box key={item.id} sx={{ display: 'flex', mr: 2, ml: 2, mt: 1 }}>
              <Typography
                component='div'
                variant='body'
                align='left'
                sx={{ flex: 1 }}
              >
                {item.name}
              </Typography>

              <div className='col-2 text-right'>
                {item.count} x ${item.price.toFixed(2)} = ${''}
                {item.count * item.price}
              </div>
            </Box>
          ))}
        </Box>

        <Box sx={{ p: 1 }}>
          <Typography variant='h5' sx={{ m: 0.5 }}>
            Tools
          </Typography>
          <Divider variant='middle' />
          {toolCartItems.length === 0 && (
            <Alert severity='error' sx={{ m: 1 }}>
              Tool Cart Is Empty!
            </Alert>
          )}
          {toolCartItems.map((item) => (
            <Box key={item.id} sx={{ display: 'flex', mr: 2, ml: 2, mt: 1 }}>
              <Typography
                component='div'
                variant='body'
                align='left'
                sx={{ flex: 1 }}
              >
                {item.name}
              </Typography>

              <div className='col-2 text-right'>
                {item.count} x ${item.price.toFixed(2)} = ${''}
                {item.count * item.price}
              </div>
            </Box>
          ))}
        </Box>
      </Card>

      <Card sx={{ p: 1, mt: 1.5 }}>
        <Box sx={{ p: 1 }}>
          {cartItems.length !== 0 && (
            <>
              <Box sx={{ display: 'flex', mr: 2, ml: 2, mt: 1 }}>
                <Typography
                  component='div'
                  variant='body'
                  align='left'
                  sx={{ flex: 1 }}
                >
                  Items Price
                </Typography>
                <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
              </Box>
              <Box sx={{ display: 'flex', mr: 2, ml: 2, mt: 1 }}>
                <Typography
                  component='div'
                  variant='body'
                  align='left'
                  sx={{ flex: 1 }}
                >
                  Tax Price
                </Typography>
                <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
              </Box>
              <Box sx={{ display: 'flex', mr: 2, ml: 2, mt: 1 }}>
                <Typography
                  component='div'
                  variant='body'
                  align='left'
                  sx={{ flex: 1 }}
                >
                  Shipping Price
                </Typography>
                <div className='col-1 text-right'>
                  ${shippingPrice.toFixed(2)}
                </div>
              </Box>
              <Divider textAlign='left' variant='middle' sx={{ m: 1 }}>
                {' '}
                +{' '}
              </Divider>
              <Box sx={{ display: 'flex', mr: 2, ml: 2, mt: 1 }}>
                <Typography
                  component='div'
                  variant='h5'
                  align='left'
                  sx={{ flex: 1 }}
                >
                  Total Price
                </Typography>
                <Typography variant='h5'>${totalPrice.toFixed(2)}</Typography>
              </Box>
            </>
          )}
        </Box>
      </Card>
      <Grid container direction='row' justifyContent='flex-end' className='row'>
        <Button
          variant='contained'
          onClick={() => CheckoutCart()}
          sx={{ m: 1.5 }}
        >
          Checkout
        </Button>
      </Grid>
    </aside>
  )
}
