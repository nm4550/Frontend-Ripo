import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ListItemButton from '@mui/material/ListItemButton'
import Grid from '@mui/material/Grid'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Alert from '@mui/material/Alert'
import './Categorieslist.css'

const BoxItem = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function SelectedListItem() {
  const [plantSelectedId, setPlantSelectedId] = React.useState(1)
  const [toolSelectedId, setToolSelectedId] = React.useState(1)

  const [plantTagsData, setPlantTagsData] = useState([])
  const [toolTagsData, setToolTagsData] = useState([])

  const [plantsData, setPlnatsData] = useState([])
  const [toolsData, setToolsData] = useState([])

  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const handlePlantListItemClick = (event, Id) => {
    setPlantSelectedId(Id)
    async function fetchPlantsData() {
      fetch('http://127.0.0.1:8000/api/plantsWithTag/' + Id + '/')
        .then((response) => response.json())
        .then((data) => {
          setPlnatsData(data)
          console.log(data)
        })
    }
    fetchPlantsData()
  }
  const handleToolListItemClick = (event, Id) => {
    setToolSelectedId(Id)
    async function fetchToolsData() {
      fetch('http://127.0.0.1:8000/api/toolsWithTag/' + Id + '/')
        .then((response) => response.json())
        .then((data) => {
          setToolsData(data)
          console.log(data)
        })
    }
    fetchToolsData()
  }

  const handlePlantListItemClickAll = () => {
    fetch('http://127.0.0.1:8000/api/plantsList/')
      .then((response) => response.json())
      .then((data) => {
        setPlnatsData(data)
        setPlantSelectedId(1)
        console.log(data)
      })
  }

  const handleToolListItemClickAll = () => {
    fetch('http://127.0.0.1:8000/api/toolsList/')
      .then((response) => response.json())
      .then((data) => {
        setToolsData(data)
        setToolSelectedId(1)
        console.log(data)
      })
  }

  useEffect(() => {
    async function fetchPlantTagsData() {
      await fetch('http://127.0.0.1:8000/api/plantsTags/')
        .then((response) => response.json())
        .then((data) => {
          setPlantTagsData(data)
          console.log(data)
        })
    }

    async function fetchToolTagsData() {
      await fetch('http://127.0.0.1:8000/api/toolsTags/')
        .then((response) => response.json())
        .then((data) => {
          setToolTagsData(data)
          console.log(data)
        })
    }

    async function fetchPlantsDataInint() {
      fetch('http://127.0.0.1:8000/api/plantsList/')
        .then((response) => response.json())
        .then((data) => {
          setPlnatsData(data)
          console.log(data)
        })
    }

    async function fetchToolsDataInint() {
      fetch('http://127.0.0.1:8000/api/toolsList/')
        .then((response) => response.json())
        .then((data) => {
          setToolsData(data)
          console.log(data)
        })
    }

    fetchPlantTagsData()
    fetchToolTagsData()
    fetchPlantsDataInint()
    fetchToolsDataInint()
  }, [])

  return (
    <Box sx={{ flexGrow: 1, m: 4 }}>
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item s={12} md={4}>
          <BoxItem>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1bh-content'
                  id='panel1bh-header'
                >
                  <Typography sx={{ width: '100%' }}>
                    Plant Categories
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List component='nav'>
                    <ListItemButton
                      selected={plantSelectedId === 1}
                      onClick={() => handlePlantListItemClickAll()}
                    >
                      <ListItemText primary='All' />
                    </ListItemButton>
                    {plantTagsData.map((item) => (
                      <ListItemButton
                        selected={plantSelectedId === item.id}
                        onClick={(event) =>
                          handlePlantListItemClick(event, item.id)
                        }
                      >
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1bh-content'
                  id='panel1bh-header'
                >
                  <Typography sx={{ width: '100%', flexShrink: 0 }}>
                    Tool Categories
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List component='nav'>
                    <ListItemButton
                      selected={toolSelectedId === 1}
                      onClick={() => handleToolListItemClickAll()}
                    >
                      <ListItemText primary='All' />
                    </ListItemButton>
                    {toolTagsData.map((item) => (
                      <ListItemButton
                        selected={toolSelectedId === item.id}
                        onClick={(event) =>
                          handleToolListItemClick(event, item.id)
                        }
                      >
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            </Box>
          </BoxItem>
        </Grid>
        <Grid item s={12} md={8}>
          <BoxItem>
            <Box>
              <Typography variant='h5' sx={{ m: 0.5 }}>
                Plants
              </Typography>
              <Divider variant='middle' />
              {plantsData.length === 0 && (
                <Alert severity='error'>
                  There is NO plant in this category right now! Come Back soon
                  ...
                </Alert>
              )}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {plantsData.map((item) => (
                  <Grid item md={4}>
                    <Card>
                      <CardMedia
                        component='img'
                        height='140'
                        image={item.image}
                        alt={item.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                          {item.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant='h5' sx={{ m: 0.5 }}>
                Tools
              </Typography>
              <Divider variant='middle' />
              {plantsData.length === 0 && (
                <Alert severity='error'>
                  There is NO Tool in this category right now! Come Back soon
                  ...
                </Alert>
              )}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {toolsData.map((item) => (
                  <Grid item md={4}>
                    <Card>
                      <Grid
                        sx={{ height: 200, p: 5, m: 1 }}
                        container
                        justifyContent='center'
                        alignItems='center'
                      >
                        <Grid item>
                          <CardMedia
                            component='img'
                            className='image-media'
                            image={item.image}
                            alt={item.name}
                          />
                        </Grid>
                      </Grid>
                      <CardContent sx={{ mt: 5 }}>
                        <Typography gutterBottom variant='h5' component='div'>
                          {item.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </BoxItem>
        </Grid>
      </Grid>
    </Box>
  )
}
