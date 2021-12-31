import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@mui/styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope'
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01'
import TextInfoContent from '@mui-treasury/components/content/textInfo'
import NatureIcon from '@mui/icons-material/Nature'
import OpacityIcon from '@mui/icons-material/Opacity'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Link } from 'react-router-dom'
import './GreenHouseCard.css'
import Fab from '@mui/material/Fab'
// Import Theme Files
import { ThemeProvider } from '@mui/material/styles'
import Theme from '../../Theme/ThemeGenerator'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '440px',
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-62px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}))

function GreenHouseCard(props) {
  const cardStyles = useStyles()
  const mediaStyles = useSlopeCardMediaStyles()
  const shadowStyles = useSoftRiseShadowStyles()
  const textCardContentStyles = useN01TextInfoContentStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        Authorization: 'JWT ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
      },
    }

    setTimeout(async () => {
      fetch(
        'http://127.0.0.1:8000/api/myPlantsRUD/' + props.data.id + '/',
        requestOptions
      ).then(async (response) => {
        let isJson = response.headers
          .get('content-type')
          ?.includes('application/json')
        let data = isJson ? await response.json() : null
        props.reloadFunc()
      })
    }, 3000)
  }

  return (
    <ThemeProvider theme={Theme}>
      <Card className={cx(cardStyles.root, shadowStyles.root)}>
        <div className='layer'>
          <Grid className='layer' container justifyContent=' flex-end'>
            <Grid className='layer' item>
              <IconButton
                className='layer'
                aria-label='more'
                id='long-button'
                aria-controls='long-menu'
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup='true'
                onClick={handleClick}
                sx={{ mt: 1, mr: 1 }}
              >
                <MoreVertIcon style={{ color: 'white' }} />
              </IconButton>
            </Grid>
          </Grid>

          <Menu
            id='long-menu'
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: '20ch',
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose()
                handleDelete()
              }}
            >
              <Box>
                <IconButton sx={{ mr: 2 }} size='small'>
                  <DeleteIcon />
                </IconButton>
                Delete
              </Box>
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleClose()
                props.OpenDialog(props.data)
              }}
            >
              <Box>
                <IconButton sx={{ mr: 2 }} size='small'>
                  <EditIcon />
                </IconButton>
                Edit
              </Box>
            </MenuItem>
          </Menu>
        </div>
        <Grid sx={{ p: 1, mt: -6 }}>
          <CardMedia
            classes={mediaStyles}
            image={'http://127.0.0.1:8000' + props.data.image}
            className='productIconImage'
          />
        </Grid>
        <Avatar className={cardStyles.avatar}>
          <Fab color='primary' aria-label='add'>
            <OpacityIcon />
          </Fab>
        </Avatar>
        <CardContent className={cardStyles.content} className='FontRight'>
          <TextInfoContent
            className='FontRight'
            classes={textCardContentStyles}
            heading={props.data.name}
            body={
              <div>
                <div className='lighWeightFont'>
                  {props.data.description.length > 99
                    ? props.data.description.substring(0, 99) + ' ...'
                    : props.data.description}
                </div>
              </div>
            }
          />
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default GreenHouseCard
