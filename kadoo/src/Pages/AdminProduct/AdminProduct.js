import { Link } from "react-router-dom";
//import "./AdminProduct.css";
import Chart from "../../Components/chart/Chart";
import { productData } from "../../dummyData";
import PublishIcon from "@mui/icons-material/Publish";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  faceImage: {
    color: theme.palette.primary.light,
  },
}));
export default function Product() {
  const [numberOfBuy, setNumberOfBuy] = React.useState(0);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const classes = useStyles();
  const handleCapture = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  var increaseBought = () => {
    var nob = numberOfBuy;
    setNumberOfBuy(nob + 1);
  };
  var decreaseBought = () => {
    var nob = numberOfBuy;
    if (nob > 0) {
      setNumberOfBuy(nob - 1);
    }
  };

  return (
    <Grid container>
      <Grid container item>
        <Grid
          container item
          // justifyContent="center"
          // alignItems="center"
          sx={{
            pl: { xs: 2, sm: 5 },
            pr: { xs: 2, sm: 5 },
            pt: 1,
          }}
        >
          <Grid container alignItems= 'flex-start' item>
            <h1>Product</h1>
          </Grid>

          <Grid container item>
            <div>
              <form>
                <Grid container>
                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <div>
                      <label>Product Name</label>
                      <input type="text" placeholder="Name" />
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <div>
                      <label>Description</label>
                      <input type="text" placeholder="Description" />
                    </div>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Price</label>
                    <input type="text" placeholder="Price" />
                  </Grid>

                  <Grid item xs={4} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Kind</label>
                    <select name="Kind" id="Kind">
                      <option value="plant">Plant</option>
                      <option value="tool">Tool</option>
                    </select>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Light</label>
                    <select name="Light" id="Light">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="much">Much</option>
                    </select>
                  </Grid>

                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Water</label>
                    <select name="Water" id="Water">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="much">Much</option>
                    </select>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Growth Rate</label>
                    <select name="GrowthRate" id="GrowthRate">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="much">Much</option>
                    </select>
                  </Grid>

                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Environment</label>
                    <select name="Environment" id="Environment">
                      <option value="none">None</option>
                      <option value="tropical">Tropical</option>
                      <option value="cold">Cold</option>
                    </select>
                  </Grid>
                </Grid>

                <Grid
                  item
                  container
                  alignItems="center"
                  direction="row"
                  sx={{ m: 2 }}
                >
                  <label>Count</label>
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    sx={{ color: "error.main" }}
                    onClick={decreaseBought}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <div className="ProductPageCounterNum">{numberOfBuy}</div>
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    sx={{ color: "success.main" }}
                    onClick={increaseBought}
                  >
                    <AddIcon />
                  </IconButton>
                </Grid>
                <div className="productFormRight">
                  {/* <div className="productUpload">
                      <img/>
                      <label for="file">
                      <PublishIcon/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                      </div>
                      
                    <button className="productButton">Update</button> */}
                  <input
                    accept="image/jpeg"
                    className={classes.input}
                    id="faceImage"
                    type="file"
                    onChange={handleCapture}
                  />
                  <Tooltip title="Select Image">
                    <label htmlFor="faceImage">
                      <IconButton
                        className={classes.faceImage}
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PublishIcon />
                      </IconButton>
                    </label>
                  </Tooltip>
                  <label>
                    {selectedFile ? selectedFile.name : "Select Image"}
                  </label>
                  . . .<Button color="primary">Save</Button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
