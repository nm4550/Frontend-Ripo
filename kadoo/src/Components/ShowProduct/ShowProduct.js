import React,{useEffect,useState} from 'react' ;
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ProductIcon1 from "../productIcon/productIcon1";
import ProductIcon2 from "../productIcon/productIcon2";
import "./ShowProduct.css";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center'
  }));
  
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  function ShowProduct(){
    const [data, setData] = useState([])
    const [tooldata , setTooldata] = useState([])
    useEffect(() => {
      async function fetchProductData() {
        await fetch('http://127.0.0.1:8000/api/plantsList/')
          .then((response) => response.json())
          .then((data) => {
            setData(data)
            console.log(data)
          })
      }
      async function fetchToolData() {
        await fetch('http://127.0.0.1:8000/api/toolsList/')
          .then((response) => response.json())
          .then((data) => {
            setTooldata(data)
            console.log(data)
          })
      }
      fetchProductData()
      fetchToolData()
    }, [])
      return(
        <div className="showProductsBack">
        <Box sx={{ width: '100%' }}>
        <div className="showProductSubs">
          Plants
        </div>
        <Grid  container spacing={2}>
          {data.map(
            p => 
            <Grid  item xs={12} sm={4} md={3}>
            <Item className="showProductsIcons">
              <ProductIcon2 key = {p.id} product={p}/>
            </Item>
          </Grid>
          )}
        </Grid>
        </Box>
        <Box sx={{ width: '100%' }}>
        <div className="showProductSubs">
          Tools 
        </div>
        <Grid  container spacing={2}>
        {tooldata.map(
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