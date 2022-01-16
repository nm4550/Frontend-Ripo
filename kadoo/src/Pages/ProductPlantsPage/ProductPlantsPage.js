import * as React from 'react'
import Grid from '@mui/material/Grid'
import Navbar from '../../Components/Navbar/Navbar'
import Basket from '../../Components/Cart/Basket'
import Button from '@mui/material/Button'
import './ProductPlantsPage.css'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import IconButton from '@mui/material/IconButton'
import Alert from '@mui/material/Alert'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Card from '@mui/material/Card'
import AppBar from '../../Components/AppBar/AppBar'
import Image from 'mui-image'

class ProductPlantsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      tags: [],
      id: this.props.match.params.id,
      numberOfBuy: 0,
      totalPrice: 0,
      album: [],
      currentImage: 0,
      imageName: [],
    }
  }

  componentDidMount() {
    console.log('http://127.0.0.1:8000/api/plantsRUD/' + this.state.id)
    fetch('http://127.0.0.1:8000/api/plantsRUD/' + this.state.id + '/')
      .then((response) => response.json())
      .then((data) => this.setState({ product: data }))

    fetch('http://127.0.0.1:8000/api/plantTags/' + this.state.id + '/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ tags: data })
        console.log(this.state.tags)
      })
    fetch('http://127.0.0.1:8000/api/plantAlbumImages/' + this.state.id + '/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ album: data })
        this.setState({ imageName: data[0] })
        console.log(this.state.album)
        console.log(this.state.imageName.image)
      })
  }

  render() {
    var increaseBought = () => {
      var nob = this.state.numberOfBuy
      this.setState({
        numberOfBuy: nob + 1,
        totalPrice: (nob + 1) * this.state.product.price,
      })
    }
    var decreaseBought = () => {
      var nob = this.state.numberOfBuy
      if (nob > 0) {
        this.setState({
          numberOfBuy: nob - 1,
          totalPrice: (nob - 1) * this.state.product.price,
        })
      }
    }
    var backWardImageClick = () => {
      if (this.state.currentImage == 0) {
        this.setState({ currentImage: this.state.album.length - 1 })
      } else {
        this.setState({ currentImage: this.state.currentImage - 1 })
      }
      this.setState({ imageName: this.state.album[this.state.currentImage] })
    }
    var forWardImageClick = () => {
      if (this.state.currentImage == this.state.album.length - 1) {
        this.setState({ currentImage: 0 })
      } else {
        this.setState({ currentImage: this.state.currentImage + 1 })
      }
      this.setState({ imageName: this.state.album[this.state.currentImage] })
    }
    var addToBasket = () => {
      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: 'JWT ' + localStorage.getItem('access_token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.product.id,
          count: `${this.state.numberOfBuy}`,
        }),
      }
      console.log(requestOptions.body)
      fetch(
        'http://127.0.0.1:8000/api/cart/add-plant-to-cart/',
        requestOptions
      ).then((response) => {
        console.log(response.status)
        if (response.status === 201) {
          alert('successfully add!')
        } else if (response.status === 401) {
          console.log(response)
          alert('You are not login!')
        } else if (response.status === 400) {
          console.log(response)
          alert('This Plant is already in the Basket!')
        }
      })
    }

    return (
      <Grid container style={{ minHeight: '100vh' }} sx={{ pb: 2 }}>
        <Box style={{ width: '100%' }}>
          <AppBar
            SearchOption={true}
            TicketOption={true}
            CartOption={true}
            AuthorizationOption={true}
            DrawerOption={false}
          />
        </Box>

        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ pl: { xs: 2, md: 5 }, pr: { xs: 2, nd: 5 } }}
          style={{ height: '100%' }}
        >
          <Grid>
            <Grid
              container
              item
              justifyContent='center'
              alignItems='center'
              sx={{ mt: 0 }}
              className='ProductPageProductContainer'
            >
              <Grid
                item
                xs={12}
                md={5}
                lg={5}
                container
                justifyContent='center'
                alignItems='center'
                sx={{ height: { xs: 'auto', md: '62vh' } }}
              >
                <Card
                  sx={{ boxShadow: 2, height: { xs: 'auto', md: '62vh' } }}
                  className='ProductPageImageContainer'
                >
                  <Grid
                    item
                    container
                    justifyContent='center'
                    alignItems='center'
                    sx={{ height: { xs: 'auto', md: '62vh' } }}
                  >
                    <Grid item container className='blurred'>
                      <Image
                        src={this.state.imageName.image}
                        width='100%'
                        height='100%'
                        fit='cover'
                      />
                    </Grid>
                    <Grid
                      className='front'
                      item
                      container
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Grid
                        container
                        item
                        justifyContent='center'
                        alignItems='center'
                        direction='row'
                        className='widthResize'
                        sx={{ mr: { md: 1.5, xs: 0 } }}
                      >
                        <Grid
                          item
                          sx={{ display: { xs: 'none', md: 'flex' } }}
                          md={1}
                          alignItems='center'
                          justifyContent='center'
                        >
                          <IconButton
                            size='small'
                            aria-label='show 4 new mails'
                            color='primary'
                            onClick={backWardImageClick}
                          >
                            <ArrowBackIosIcon />
                          </IconButton>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={10}
                          alignItems='center'
                          justifyContent='center'
                          sx={{
                            display: 'flex',
                            height: { xs: '70%', md: '100%' },
                          }}
                        >
                          <Image
                            src={this.state.imageName.image}
                            className='mainImage'
                            shift='bottom'
                            shiftDuration={320}
                            fit='cover'
                          />
                        </Grid>
                        <Grid
                          item
                          sx={{ display: { xs: 'none', md: 'flex' } }}
                          md={1}
                          alignItems='center'
                          justifyContent='flex-start'
                        >
                          <IconButton
                            sx={{ m: 1 }}
                            size='small'
                            aria-label='show 4 new mails'
                            color='primary'
                            onClick={forWardImageClick}
                          >
                            <ArrowForwardIosIcon />
                          </IconButton>
                        </Grid>
                        <Grid
                          item
                          sx={{ display: { xs: 'flex', md: 'none' }, p: 1 }}
                          xs={6}
                          alignItems='center'
                          justifyContent='flex-end'
                        >
                          <IconButton
                            sx={{ display: { xs: 'flex', md: 'none' }, p: 1 }}
                            size='small'
                            aria-label='show 4 new mails'
                            color='primary'
                            onClick={backWardImageClick}
                          >
                            <ArrowBackIosIcon />
                          </IconButton>
                        </Grid>
                        <Grid
                          item
                          sx={{ display: { xs: 'flex', md: 'none' }, p: 1 }}
                          xs={6}
                          alignItems='center'
                          justifyContent='flex-start'
                        >
                          <IconButton
                            sx={{ m: 1 }}
                            size='small'
                            aria-label='show 4 new mails'
                            color='primary'
                            onClick={forWardImageClick}
                          >
                            <ArrowForwardIosIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
                lg={7}
                sx={{ p: 2, ml: -5 }}
                className='BringFront'
              >
                <Card sx={{ boxShadow: 3 }}>
                  <Grid container spacing={1} style={{ minHeight: '75vh' }}>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      className='ProductPageTitle'
                    >
                      <div className='productPageTitle'>
                        {this.state.product.name}
                      </div>
                      <hr />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      spacing={1}
                      className='ProductPageText'
                    >
                      <div className='ProductPageText'>
                        {' '}
                        <b>Description:</b> {this.state.product.description}{' '}
                      </div>
                      <Box sx={{ mt: 0.5, mb: 1.5 }}>
                        {this.state.tags.length !== 0 && (
                          <Box>
                            <b>Tags: </b>
                            {this.state.tags.map((item) => (
                              <Chip
                                sx={{ mr: 0.5 }}
                                label={item.name}
                                variant='outlined'
                              />
                            ))}
                          </Box>
                        )}
                      </Box>
                      <hr />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={6}
                      className='ProductPageText'
                    >
                      <div className='ProductPageText'>
                        {' '}
                        <b>Environment:</b> {this.state.product.environment}{' '}
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={6}
                      className='ProductPageText'
                    >
                      <div className='ProductPageText'>
                        {' '}
                        <b>Water:</b> {this.state.product.water}
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={6}
                      className='ProductPageText'
                    >
                      <div className='ProductPageText'>
                        {' '}
                        <b>Light:</b> {this.state.product.light}{' '}
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={6}
                      className='ProductPageText'
                    >
                      <div className='ProductPageText'>
                        {' '}
                        <b>GrowthRate:</b> {this.state.product.growthRate}{' '}
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      className='ProductPageBuyContainer'
                    >
                      <Grid container spacing={0} alignItems='center'>
                        <Grid item container className='ProductPageTitle'>
                          <div className='productPagePrice'>
                            {' '}
                            <b>Price:{this.state.product.price}$</b>
                          </div>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={6}
                          md={6}
                          lg={4}
                          sx={{
                            justifyContent: { xs: 'flex-end', sm: 'center' },
                          }}
                          className='ProductPageCounter'
                        >
                          <Grid
                            item
                            container
                            alignItems='center'
                            direction='row'
                          >
                            <IconButton
                              size='large'
                              aria-label='show 4 new mails'
                              color='inherit'
                              sx={{ color: 'error.main' }}
                              onClick={decreaseBought}
                            >
                              <RemoveIcon />
                            </IconButton>
                            <div className='ProductPageCounterNum'>
                              {this.state.numberOfBuy}
                            </div>
                            <IconButton
                              size='large'
                              aria-label='show 4 new mails'
                              color='inherit'
                              sx={{ color: 'success.main' }}
                              onClick={increaseBought}
                            >
                              <AddIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                        <Grid item sm={6} className='ProductPageTitle'>
                          Total Price : {this.state.totalPrice}$
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        justifyContent='flex-end'
                        sx={{ p: 3, Color: '#12824C' }}
                        className='ProductPageTitle'
                      >
                        <Button
                          variant='contained'
                          className='productsPageAdd'
                          onClick={addToBasket}
                        >
                          Add To Bascket
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default ProductPlantsPage
