import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./ProductToolsPage.css";
import Chip from '@mui/material/Chip';


class ProductToolsPage extends React.Component {
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
        const Apartments=[{
            original:"https://javaneban.ir/wp-content/uploads/2020/11/%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%DA%AF%D9%84-%D9%88-%DA%AF%DB%8C%D8%A7%D9%872-1.jpg",
          },
          {
            original:"https://www.parsnaz.com/images/2019/04/1814149798-parsnaz-com.jpg",
          },
          {
            original:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPAO8YS2Ls666zK95nvpG6NN1xLNv74rdbA&usqp=CAU",
          },
          {
            original:"https://www.bagheboon.com/wp-content/uploads/2016/11/MOSS-ROSE-4-450x450.jpg",
          },
          {
            original:"https://homtick.com/wp-content/uploads/2021/05/0502bcd194a480472e63cdedf641b9bf.jpg",
          },
          {
            original:"https://img.beroozresaan.com/unsafe/350x350/files/shop/product/ad4873ed26d549cbbe8faa8d0d0a8e11.jpg",
          },
          ]
            

      return (
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
                            <b>Tags:</b> <Chip label={this.state.product.tags} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className="ProductPageBuyContainer">
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={3} className="ProductPageTitle">
                            <div className="productPagePrice"> <b>Price:</b> {this.state.product.price} $</div>
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
                                Total Price : 
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

  export default ProductToolsPage;