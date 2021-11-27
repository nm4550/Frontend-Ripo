import * as React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from "../../Components/Navbar/Navbar";
import Button from '@mui/material/Button';
import "./ProductPlantsPage.css";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

class ProductPlantsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          product : [] , 
          tags : [],
          id : this.props.match.params.id,
          numberOfBuy:0,
          totalPrice:0,
          album:[],
          currentImage:0,
        };
    }
    
    componentDidMount() {
      console.log('http://127.0.0.1:8000/api/plantDetail/' + this.state.id)
        fetch('http://127.0.0.1:8000/api/plantDetail/' + this.state.id + '/')
          .then(response => response.json())
          .then(data => this.setState({ product: data }));

        fetch('http://127.0.0.1:8000/api/plantTags/' + this.state.id + '/')
          .then(response => response.json())
          .then(data => { 
              this.setState({ tags: data })
              console.log(this.state.tags)
            });
        fetch('http://127.0.0.1:8000/api/albumImages/' + this.state.id + '/')
          .then(response => response.json())
          .then(data => this.setState({ album: data }));
    }
    
    

    render() {
          var increaseBought=()=>{
        var nob=this.state.numberOfBuy
            this.setState({
                numberOfBuy:nob+1,
                totalPrice:(nob+1)*this.state.product.price
        })
    }
    var decreaseBought=()=>{
        var nob=this.state.numberOfBuy
        if (nob > 0){
            this.setState({
                numberOfBuy:nob-1,
                totalPrice:(nob-1)*this.state.product.price
        })
        }
    }
    var backWardImageClick=()=>{
        if(this.state.currentImage == 0){
            this.state.currentImage = this.state.album.length - 1;  
        }
        else{
            this.state.currentImage--;
        }
    }
    var forWardImageClick=()=>{
        if(this.state.currentImage == this.state.album.length - 1){
            this.state.currentImage = 0;  
        }
        else{
            this.state.currentImage++;
        }
    }
        
        
      return (
        <div>
        <Navbar/>  
    
          <div className="ProductPage">
                <Grid container justifyContent = "center"  className="ProductPageProductContainer">
                    <Grid item xs={12} md={6} lg={6} container justifyContent = "center" alignItems = "center" className="ProductPageImageContainer">
                        <Grid item container justifyContent = "center" alignItems = "center">
                            <IconButton 
                                    size='large'
                                    aria-label='show 4 new mails'
                                    color='primary'
                                    onClick={backWardImageClick}>
                                    <ArrowBackIosIcon />
                            </IconButton>
                        <img className="ProductPageImage" src={this.state.product.image}></img>
                            <IconButton 
                                    size='large'
                                    aria-label='show 4 new mails'
                                    color='primary'
                                    onClick={forWardImageClick}>
                                    <ArrowForwardIosIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{p : 2}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} lg={12} className="ProductPageTitle">
                            <div className="productPageTitle">{this.state.product.name}</div>
                            <hr/>
                            </Grid>
                            <Grid item xs={6} md={6} lg={11} className="ProductPageText">
                            <div className="ProductPageText"> <b>Description:</b> {this.state.product.description} </div>
                            <Box sx = {{mt : 0.5 , mb : 0.5}}>
                                {this.state.tags.length !== 0 && (
                                    <Box>
                                        <b>Tags: </b>
                                        {this.state.tags.map((item) => (
                                            <Chip sx = {{mr : 0.5}} label = {item.name} variant="outlined"/>
                                        ))}
                                    </Box>
                                )}  
                            </Box>
                            <hr/>
                            </Grid>
                            
                            <Grid item xs={6} md={6} lg={6} className="ProductPageText">
                            <div className="ProductPageText"> <b>Environment:</b> {this.state.product.environment} </div>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className="ProductPageText">
                            <div className="ProductPageText"> <b>Water:</b> {this.state.product.water}</div>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className="ProductPageText">
                            <div className="ProductPageText"> <b>Light:</b> {this.state.product.light} </div>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className="ProductPageText">
                            <div className="ProductPageText"> <b>GrowthRate:</b> {this.state.product.growthRate}  </div>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="ProductPageBuyContainer">
                        <Grid container spacing={2} alignItems = "center">
                            <Grid item xs={6} md={3} className="ProductPageTitle">
                            <div className="productPagePrice"> <b>Price:</b> {this.state.product.price} $</div>
                            </Grid>
                            <Grid item xs={6} md={3}  className="ProductPageCounter">
                                <IconButton 
                                    size='large'
                                    aria-label='show 4 new mails'
                                    color='inherit'
                                    sx={{ color: 'error.main' }}
                                    onClick={decreaseBought}>
                                    <RemoveIcon />
                                </IconButton>
                                
                                <div className="ProductPageCounterNum">
                                    {this.state.numberOfBuy}
                                </div>
                                <IconButton 
                                    size='large'
                                    aria-label='show 4 new mails'
                                    color='inherit'
                                    sx={{ color: 'success.main' }}
                                    onClick={increaseBought}>
                                    <AddIcon />
                                </IconButton>
                                
                            </Grid>
                            <Grid item  className="ProductPageTitle">
                                Total Price : {this.state.totalPrice}$
                            </Grid>
                            
                        </Grid>
                        <Grid container item justifyContent="flex-end" sx={{p:3 , Color: '#12824C'}} className="ProductPageTitle">
                                <Button variant="contained" className="productsPageAdd">
                                    Add To Bascket
                                </Button>
                            </Grid>
                    </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
          </div>  
          </div>            
      );
    }
  }

  export default ProductPlantsPage;