import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Shopping Cart
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size='large'
              aria-label='show 4 new mails'
              color='inherit'
              onClick={() =>
                document.getElementById('basket-part').scrollIntoView()
              }
            >
              <Badge badgeContent={props.countCartItems} color='error'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
