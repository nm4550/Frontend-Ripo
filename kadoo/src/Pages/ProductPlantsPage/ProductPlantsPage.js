import * as React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from "../../Components/Navbar/Navbar";
import Button from '@mui/material/Button';
import "./ProductPlantsPage.css";


class ProductPlantsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          product : [] , 
          id : this.props.match.params.id,
          numberOfBuy:0,
          totalPrice:0,
        };
    }
    componentDidMount() {
      console.log('http://127.0.0.1:8000/api/plantDetail/' + this.state.id)
      fetch('http://127.0.0.1:8000/api/plantDetail/' + this.state.id + '/')
          .then(response => response.json())
          .then(data => this.setState({ product: data }));
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
        this.setState({
            numberOfBuy:nob-1,
            totalPrice:(nob-1)*this.state.product.price
    })
    }
        
        
      return (
        <div>
        <Navbar/>  
    
          <div className="ProductPage">
                <Grid container spacing={4} className="ProductPageProductContainer">
                    <Grid item xs={12} md={6} lg={6} className="ProductPageImageContainer">
                        <img className="ProductPageImage" ></img>
                        <div className="productIconImageContainer"><img className="ProductPageImage" src={this.state.product.image}></img></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} lg={12} className="ProductPageTitle">
                            <div className="productPageTitle">{this.state.product.name}</div>
                            <hr/>
                            </Grid>
                            <Grid item xs={6} md={6} lg={11} className="ProductPageText">
                            <div className="ProductPageText"> <b>Description:</b> {this.state.product.description} </div>
                            
                            <div className="ProductPageText"></div>
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
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={3} className="ProductPageTitle">
                            <div className="productPagePrice"> <b>Price:</b> {this.state.product.price} $</div>
                            </Grid>
                            <Grid item xs={6} md={3}  className="ProductPageCounter">
                                <button onClick={decreaseBought} className="ProductPageCounterMin">
                                    -
                                </button>
                                
                                <div className="ProductPageCounterNum">
                                    {this.state.numberOfBuy}
                                </div>
                                
    
                                <button onClick={increaseBought} className="ProductPageCounterPlu">
                                    +
                                </button>
                            </Grid>
                            <Grid item xs={6} md={3} className="ProductPageTitle">
                                Total Price : {this.state.totalPrice} $
                            </Grid>
                            
                        </Grid>
                        <Grid container item justifyContent="flex-end" sx={{p:4}} className="ProductPageTitle">
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