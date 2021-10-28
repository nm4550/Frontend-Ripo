import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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

function ShowProduct(){
    return(
      <Box sx={{ p:3}}>
        <Typography gutterBottom variant="h5" component="div">
                Apartment
              </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item>

          
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
      </Grid>



      <Typography gutterBottom variant="h5" component="div">
                Garden
              </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item>

          
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
      </Grid>

      <Typography gutterBottom variant="h5" component="div">
                Yard
              </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item>

          
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
      </Grid>


      <Typography gutterBottom variant="h5" component="div">
                Digging
              </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item>

          
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>

          <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Picture" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                more info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $Price
            </Typography>
          </Grid>
        </Grid>
      </Grid>

          </Item>
        </Grid>
      </Grid>
    </Box>
      
    );
}

export default ShowProduct;