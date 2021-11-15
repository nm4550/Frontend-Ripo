import * as React from 'react';
import Grid from '@mui/material/Grid';
import "./ProductToolsPage.css";
import Chip from '@mui/material/Chip';

class ProductToolsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          product : [] , 
          id : this.props.match.params.id,
          numberOfBuy:0,
          totalPrice:0,
          idTags:[],
          nameTags:[],
        };
    }
    componentDidMount() {
      console.log('http://127.0.0.1:8000/api/toolDetail/' + this.state.id)
      setTimeout(async () => {
        const response = await fetch('http://127.0.0.1:8000/api/toolDetail/' + this.state.id + '/')
        const data = await response.json()
        this.setState({ product: data });
        console.log(data.tags)
      },1000)
      this.setState({idTags : this.state.product.tags})
      for (let i = 0; i < this.state.idTags.length; i++) {
        const element = this.state.idTags[i];
        fetch('http://127.0.0.1:8000/api/tagDetail/' + element + '/')
          .then(response => response.json())
          .then(data => this.setState({ ...this.state.nameTags[i] , name: data.name}));
      }  
      console.log(this.state.idTags)
      console.log(this.state.nameTags)      

            
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
                            
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className="ProductPageText">
                            <b>Tags:</b>
                            {
                              this.state.nameTags.map((item) => {
                                <Chip label = {item.name}/>
                              }) 
                            }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className="ProductPageBuyContainer">
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={2} className="ProductPageTitle">
                            <div className="productPagePrice"> <b>Price:</b> {this.state.product.price} $</div>
                            </Grid>
                            <Grid item xs={6} md={2}  className="ProductPageCounter">
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
                            <Grid item xs={6} md={3} className="ProductPageTitle">
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