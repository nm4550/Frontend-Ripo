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
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import './Categorieslist.css'
import ProductTabs from '../../Components/ProductTabs/TabPanel'
import Button from '@mui/material/Button'
import SkeletonArticle from '../Cart/SkeletonArticle'

const BoxItem = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Categorieslist(props) {
  const [plantSelectedId, setPlantSelectedId] = React.useState(0)
  const [toolSelectedId, setToolSelectedId] = React.useState(0)

  const [plantTagsData, setPlantTagsData] = useState([])
  const [toolTagsData, setToolTagsData] = useState([])

  const [plantsData, setPlnatsData] = useState([])
  const [toolsData, setToolsData] = useState([])
  const [plantsDataLoaded, setPlnatsDataLoaded] = useState(false)
  const [toolsDataLoaded, setToolsDataLoaded] = useState(false)

  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleReset = () => {
    props.bindall()
    setPlantSelectedId(0)
    setToolSelectedId(0)
  }

  const handlePlantListItemClick = (event, Id, name) => {
    setToolSelectedId(0)
    setPlantSelectedId(Id)
    //setPlnatsData([])
    //setPlnatsDataLoaded(false)
    setTimeout(async () => {
      fetchPlantsPagination(name, props.givenpage)
    }, 0)
  }
  const handleToolListItemClick = (event, Id, name) => {
    setPlantSelectedId(0)
    setToolSelectedId(Id)
    //setToolsData([])
    //setToolsDataLoaded(false)
    setTimeout(async () => {
      fetchToolsPagination(name, props.givenpage)
    }, 0)
  }

  const handlePlantListItemClickAll = () => {
    //setPlnatsData([])
    setToolSelectedId(0)
    //setPlnatsDataLoaded(false)
    setPlantSelectedId(1)
    setTimeout(async () => {
      const res = await fetch(
        'http://127.0.0.1:8000/api/plantsAdvanceSearch/',
        {
          method: 'Post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: null,
            price: { lower: null, higher: null },
            pagination: { count: '6', page: '1' },
            sort: { kind: null, order: null },
          }),
        }
      )

      const data = await res.json()
      props.bindplants(data.data)
      props.setpageall(data.pageCount)
      props.settext('All plants')
      props.setgivenpage(1)
      //setPlnatsDataLoaded(true)
      console.log(data)
    }, 0)
  }

  const handleToolListItemClickAll = () => {
    //setToolsData([])
    //setToolsDataLoaded(false)
    setPlantSelectedId(0)
    setToolSelectedId(1)
    setTimeout(async () => {
      const res = await fetch('http://127.0.0.1:8000/api/toolsAdvanceSearch/', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: null,
          price: { lower: null, higher: null },
          pagination: { count: '6', page: '1' },
          sort: { kind: null, order: null },
        }),
      })

      const data = await res.json()
      props.bindtools(data.data)
      props.setpageall(data.pageCount)
      props.settext('All tools')
      props.setgivenpage(1)
      //setToolsDataLoaded(true)
      console.log(data)
    }, 0)
  }

  const fetchPlantsPagination = (name, page) => {
    console.log(
      JSON.stringify({
        name: null,
        price: { lower: null, higher: null },
        tags: [`${name}`],
        pagination: { count: '6', page: '1' },
        sort: { kind: null, order: null },
      })
    )
    fetch('http://127.0.0.1:8000/api/plantsAdvanceSearch/', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: null,
        price: { lower: null, higher: null },
        tags: [`${name}`],
        pagination: { count: '6', page: '1' },
        sort: { kind: null, order: null },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        props.bindplants(data.data)
        props.setpageall(data.pageCount)
        props.settext(name)
        props.setgivenpage(1)
      })
  }
  const fetchToolsPagination = (name, page) => {
    fetch('http://127.0.0.1:8000/api/toolsAdvanceSearch/', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: null,
        price: { lower: null, higher: null },
        tags: [`${name}`],
        pagination: { count: '6', page: '1' },
        sort: { kind: null, order: null },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        props.bindtools(data.data)
        props.setpageall(data.pageCount)
        props.settext(name)
        props.setgivenpage(1)
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

    fetchPlantTagsData()
    fetchToolTagsData()
  }, [])

  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <Grid container spacing={0} justifyContent='center' alignItems='flex-end'>
        <Grid item xs={12} md={12} sx={{ mr: 2 }}>
          <BoxItem>
            <Box sx={{ width: '100%', mt: 1.2 }}>
              <List component='nav'>
                <ListItemButton
                  selected={plantSelectedId === 0 && toolSelectedId === 0}
                  onClick={handleReset}
                >
                  <ListItemText primary='All Products' />
                </ListItemButton>
              </List>
              <Typography
                align='left'
                sx={{ width: '100%', pl: 1, pb: 1, mt: 1 }}
              >
                Plant Categories
              </Typography>
              <Divider />
              <List component='nav'>
                <ListItemButton
                  selected={plantSelectedId === 1}
                  onClick={() => handlePlantListItemClickAll()}
                >
                  <ListItemText primary='Only plants' />
                </ListItemButton>
                {plantTagsData.map((item) => (
                  <ListItemButton
                    selected={plantSelectedId === item.id}
                    onClick={(event) =>
                      handlePlantListItemClick(event, item.id, item.name)
                    }
                  >
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                ))}
              </List>
              <Typography
                align='left'
                sx={{ width: '100%', flexShrink: 0, pl: 1, pb: 1, mt: 1 }}
              >
                Tool Categories
              </Typography>
              <Divider />
              <List component='nav'>
                <ListItemButton
                  selected={toolSelectedId === 1}
                  onClick={() => handleToolListItemClickAll()}
                >
                  <ListItemText primary='Only tools' />
                </ListItemButton>
                {toolTagsData.map((item) => (
                  <ListItemButton
                    selected={toolSelectedId === item.id}
                    onClick={(event) =>
                      handleToolListItemClick(event, item.id, item.name)
                    }
                  >
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </BoxItem>
        </Grid>
      </Grid>
    </Box>
  )
}
