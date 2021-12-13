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
    margin: '-48px 32px 0 auto',
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
  return (
    <ThemeProvider theme={Theme}>
      <Card className={cx(cardStyles.root, shadowStyles.root)}>
        <Link to={'/ProductPlantsPage/' + props.data.id}>
          <Grid className='productIconImageContainer' sx={{ p: 1 }}>
            <CardMedia
              classes={mediaStyles}
              image={props.data.image}
              className='productIconImage'
            />
          </Grid>
        </Link>
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
                <div className='featButton'>
                  <WbSunnyIcon className='lightButton' />
                  <a className='Message'> {props.data.light} </a>
                  <OpacityIcon className='waterButton' />
                  <a className='Message'> {props.data.water} </a>
                  <NatureIcon className='growButton' />
                  <a className='Message'> {props.data.growthRate} </a>
                </div>
              </div>
            }
          />
        </CardContent>
        <Box px={2} pb={2} mt={-1}>
          <IconButton size='small'>
            <EditIcon />
          </IconButton>
          <IconButton size='small'>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Card>
    </ThemeProvider>
  )
}

export default GreenHouseCard
