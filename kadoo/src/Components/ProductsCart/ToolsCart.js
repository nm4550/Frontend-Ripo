import * as React from 'react';
import "./ToolsCart.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ToolsCart(props) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <Link to = {'/ProductPlantsPage/'+ props.product.id}>
          <CardMedia
            component="img"
            height="226"
            image={props.product.image}
            alt="picture"
          />
        </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.product.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            $ {props.product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }