import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './ProductPalntsPage.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageGrid from "../../Components/ImageGrid";
import Info from "../../Components/Info";
import MainImage from "../../Components/MainImage";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class ProductPlantsPage extends React.Component {
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
        <div className="productPageAll">
            <Box className="productPlantsPageWholeContainer" sx={{ width: '100%' }}>
                <Grid  container spacing={2}>
                    <Grid  item xs={12} s={6} md={5}>
                    <div className="productPageBuyContainer">
                    <div className="productIconImageContainer"><img className="productIconImage" src={this.state.product.image}></img></div>
                    </div>
                    </Grid>
                    <Grid  item xs={12} s={6} md={5}>
                        <div className="productPagePriceContainer">
                        <div className="productPageTitle">{this.state.product.name}</div>
                        <hr/>
                        <div className="productPageararaph">{this.state.product.description} </div>
                        <div className="productPagePararaph"></div>
                        <hr/>
                        <Grid  container spacing={2}>
                        <Grid  item xs={12} s={6} md={8}>
                        <div className="productPagePay">
                        <div className="productPagePrice">{this.state.product.price}</div>
                        <button className="productPageButton"> - </button>
                        <div className="productPageNums">11</div>
                        <button className="productPageButton"> + </button>
                        </div>
                        </Grid>
                        <Grid  item xs={12} s={6} md={4}>
                        <button className="productPagePayButton"><div>Pay</div></button>
                        </Grid>
                        </Grid>
                        </div>
                    </Grid>
                </Grid>
             </Box>
        </div>)
    }
}

export default ProductPlantsPage;
