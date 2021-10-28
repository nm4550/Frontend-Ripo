import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProductIcon from "../productIcon/ProductIcon";
import "./ShowProduct.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Apartments=[{
  image:"https://javaneban.ir/wp-content/uploads/2020/11/%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%DA%AF%D9%84-%D9%88-%DA%AF%DB%8C%D8%A7%D9%872-1.jpg",
  name:"Gol 1",
  price:"13000"
},
{
  image:"https://www.parsnaz.com/images/2019/04/1814149798-parsnaz-com.jpg",
  name:"Gol 2",
  price:"24000"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPAO8YS2Ls666zK95nvpG6NN1xLNv74rdbA&usqp=CAU",
  name:"Gol 3",
  price:"47000"
},
{
  image:"https://www.bagheboon.com/wp-content/uploads/2016/11/MOSS-ROSE-4-450x450.jpg",
  name:"Gol 4",
  price:"32000"
},
{
  image:"https://homtick.com/wp-content/uploads/2021/05/0502bcd194a480472e63cdedf641b9bf.jpg",
  name:"Gol 5",
  price:"65000"
},
{
  image:"https://img.beroozresaan.com/unsafe/350x350/files/shop/product/ad4873ed26d549cbbe8faa8d0d0a8e11.jpg",
  name:"Gol 6",
  price:"44000"
},
]

const Gardens=[{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9d4LeEQzUCPei2JAJU5Ed-fnSnm1OLdkmZTexrcQ63VTM2UaMUYBSsh7t3zlyGih_uSk&usqp=CAU",
  name:"Garden 1",
  price:"13000"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82fImOaptr2bLQSicS6uaJcaUd11hXIiZ3Q&usqp=CAU",
  name:"Garden 2",
  price:"24000"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHlEYbRfj2dXdKxNXqTGrEPDRvDKEtHwQsA&usqp=CAU",
  name:"Garden 3",
  price:"47000"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkviB90B7UOowzJpygck_w6oX6uSe-jbyugA&usqp=CAU",
  name:"Garden 4",
  price:"32000"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ8oUJuTWLcHm1wZUovVOwu5Uv3UNes7zaA&usqp=CAU",
  name:"Garden 5",
  price:"65000"
},
{
  image:"https://www.theenglishgarden.co.uk/wp-content/uploads/2016/04/cosmos.jpg",
  name:"Garden 6",
  price:"44000"
},
]

function ShowProduct(){
    return(
      <div className="showProductsBack">
      <Box sx={{ width: '100%' }}>

      <div className="showProductSubs">
        Apartment : 
      </div>
      <Grid  container spacing={2}>
        {Apartments.map(
          gol => 
          <Grid  item xs={12} s={6} md={2}>
          <Item className="showProductsIcons">
            <ProductIcon product={gol}/>
          </Item>
        </Grid>
        )}
      </Grid>

      <div className="showProductSubs">
        Garden : 
      </div>
      <Grid  container spacing={2}>
      {Gardens.map(
          gol => 
          <Grid  item xs={12} s={6} md={2}>
          <Item className="showProductsIcons">
            <ProductIcon product={gol}/>
          </Item>
        </Grid>
        )}
      
      </Grid>

      <div className="showProductSubs">
        Yard : 
      </div>
      <Grid  container spacing={2}>
      {Apartments.map(
          gol => 
          <Grid  item xs={12} s={6} md={2}>
          <Item className="showProductsIcons">
            <ProductIcon product={gol}/>
          </Item>
        </Grid>
        )}     
      </Grid>
    </Box>
    </div>
    );
}

export default ShowProduct;