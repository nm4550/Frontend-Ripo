import React, { useEffect, useState } from 'react'
import './UserDropDown.css'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import TodayIcon from '@mui/icons-material/Today'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import HistoryIcon from '@mui/icons-material/History'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PaymentIcon from '@mui/icons-material/Payment'
import ForumIcon from '@mui/icons-material/Forum'
import Badge from '@mui/material/Badge'
import ShowCoins from '../ShowCoins/ShowCoins'

function UserDropDown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [numberOfTicket, setNumberOfTicket] = useState(0)
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [userData, setUserData] = React.useState([])
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: 'JWT ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
      },
    }
    async function FetchCountCart() {
      await fetch(
        'http://127.0.0.1:8000/api/cart/user-count-cart/',
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setNumberOfItems(data)
          console.log(data)
        })
    }
    async function FetchUserData() {
      await fetch('http://127.0.0.1:8000/api/user/userinfo/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data)
          console.log(data)
        })
    }
    FetchUserData()
    FetchCountCart()
  }, [])

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title='Account settings'>
          <IconButton onClick={handleClick} size='small' sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> {userData.user_name}
        </MenuItem>
        <Divider />
        <MenuItem sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Box>
            <ListItemIcon>
              {numberOfItems !== 0 && (
                <Badge badgeContent={numberOfItems} color='secondary'>
                  <ShoppingCartIcon fontSize='small' />
                </Badge>
              )}
              {numberOfItems === 0 && <ShoppingCartIcon fontSize='small' />}
            </ListItemIcon>
            Cart
          </Box>
        </MenuItem>
        <MenuItem sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Box>
            <ListItemIcon>
              {numberOfTicket !== 0 && (
                <Badge badgeContent={numberOfTicket} color='secondary'>
                  <ForumIcon fontSize='small' />
                </Badge>
              )}
              {numberOfTicket === 0 && <ForumIcon fontSize='small' />}
            </ListItemIcon>
            Tickets
          </Box>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <TodayIcon fontSize='small' />
          </ListItemIcon>
          Reminder
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
        {/*<MenuItem>
          <ListItemIcon>
            <ShoppingCartIcon fontSize='small' />
          </ListItemIcon>
          Ongoing Orders
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <HistoryIcon fontSize='small' />
          </ListItemIcon>
          Purchase History
        </MenuItem>*/}
      </Menu>
    </React.Fragment>
  )
}

export default UserDropDown
