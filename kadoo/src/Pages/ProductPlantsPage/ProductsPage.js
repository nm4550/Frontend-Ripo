import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./ProductsPage.css";


class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          product : [] , 
          id : this.props.match.params.id
    
        };
    }
    componentDidMount() {
      console.log('http://127.0.0.1:8000/api/toolDetail/' + this.state.id)
      fetch('http://127.0.0.1:8000/api/toolDetail/' + this.state.id + '/')
          .then(response => response.json())
          .then(data => this.setState({ product: data }));
    }



    render() {
        var numberOfBuy=11;
        
        const increaseBought=()=>{
            numberOfBuy++;
        }

      return (
          <div className="ProductPage">
                <Grid container spacing={4} className="ProductPageProductContainer">
                    <Grid item xs={12} md={6} lg={6} className="ProductPageImageContainer">
                        <img className="ProductPageImage" ></img>
                        <div className="productIconImageContainer"><img className="productIconImage" src={this.state.product.image}></img></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} lg={12} className="ProductPageTitle">
                            <div className="productPageTitle">{this.state.product.name}</div>
                            <hr/>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className="ProductPageText">
                            <div className="ProductPageText">{this.state.product.description} </div>
                            <div className="ProductPageText"></div>
                            <hr/>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className="ProductPageText">
                            <div className="productPagePararaph">{this.state.product.environment} </div>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className="ProductPageText">
                            <div className="productPagePararaph">{this.state.product.water}</div>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className="ProductPageText">
                            <div className="productPagePararaph">{this.state.product.light} </div>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className="ProductPageText">
                            <div className="productPagePararaph">{this.state.product.growthRate}  </div>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="ProductPageText">
                                MNMNMNMNMNMNMNMNMNMNMNMMNMNMNMNMNMNMMMNMNMNMNMNMNMNMNMMNMNMNMNMNMNMNMNMNMNMNMMNMNMNMNMNMNMNMNMNMNMNMNM
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className="ProductPageBuyContainer">
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={3} className="ProductPageTitle">
                            <div className="productPagePrice">{this.state.product.price}</div>
                            </Grid>
                            <Grid item xs={6} md={3}  className="ProductPageCounter">
                                <button onClick="decreaseBought()" className="ProductPageCounterMin">
                                    -
                                </button>
                                <div className="ProductPageCounterNum">
                                    {numberOfBuy}
                                </div>
                                <button onClick={increaseBought} className="ProductPageCounterPlu">
                                    +
                                </button>
                            </Grid>
                            <Grid item xs={6} md={3} className="ProductPageTitle">
                                Total Cost : 
                            </Grid>
                            <Grid item xs={6} md={2} className="ProductPageTitle">
                                <button className="productsPageAdd">
                                    Add To Bascket
                                </button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
          </div>              
      );
    }
  }

  export default ProductsPage;