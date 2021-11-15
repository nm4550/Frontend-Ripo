import React,{useEffect,useState} from 'react' ;
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ProductIcon1 from "../productIcon/productIcon1";
import ProductIcon2 from "../productIcon/productIcon2";
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

  function ShowProduct(props){
    const [data, setData] = useState([])
    const [tooldata , setTooldata] = useState([])
    const {plants , tools } = props;
    
      return(
        <div className="showProductsBack">
        <Box sx={{ width: '100%' }}>
  
        <div className="showProductSubs">
          Plants : 
        </div>
        <Grid  container spacing={2}>
          {plants.map(
            gol => 
            <Grid  item xs={12} s={6} md={2}>
            <Item className="showProductsIcons">
              <ProductIcon2 key = {gol.id} product={gol}/>
            </Item>
          </Grid>
          )}
        </Grid>
  
        <div className="showProductSubs">
          Tools : 
        </div>
        <Grid  container spacing={2}>
        {tools.map(
            Tool => 
            <Grid  item xs={12} s={6} md={2}>
            <Item className="showProductsIcons">
              <ProductIcon1 product={Tool}/>
            </Item>
          </Grid>
          )}
        
        </Grid>
      </Box>
      </div>
      );
  }
  
  export default ShowProduct;