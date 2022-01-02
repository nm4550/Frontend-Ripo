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
import { MenuItem } from "@mui/material";
import { TextField } from "@mui/material";
import { Select } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  TextField: {
    display: "none",
  },
  faceImage: {
    color: theme.palette.primary.light,
  },
}));

export default function Product() {
  const initialFormData = Object.freeze({
    name: "",
    description: "",
    count: "",
    image: "",
    price: "",
    kind: "",
    environment: "",
    water: "",
    light: "",
    growthRate: "",
  });
  const [numberOfBuy, setNumberOfBuy] = React.useState(0);
  const [SelectedFile, setSelectedFile] = React.useState(null);
  const [formData, updateFormData] = React.useState(initialFormData);
  const classes = useStyles();
  const handleCapture = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
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
          container
          item
          // justifyContent="center"
          // alignItems="center"
          sx={{
            pl: { xs: 2, sm: 5 },
            pr: { xs: 2, sm: 5 },
            pt: 1,
            height: 0,
          }}
        >
          <Grid container alignItems="flex-start" item>
            <h1>Product</h1>
          </Grid>

          <Grid container>
            <div>
              <form>
                <Grid container>
                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <div>
                      <label>Product Name</label>
                      <TextField
                        component="form"
                        sx={{
                          "& > :not(style)": {
                            width: "20ch",
                            height: 30,
                          },
                        }}
                        noValidate
                        autoComplete="off"
                        name="name"
                        onChange={handleChange}
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <div>
                      <label>Description</label>
                      <TextField
                        component="form"
                        sx={{
                          "& > :not(style)": {
                            width: "20ch",
                            height: 30,
                          },
                        }}
                        noValidate
                        autoComplete="off"
                        name="description"
                        onChange={handleChange}
                        type="text"
                        placeholder="Description"
                      />
                    </div>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Price</label>
                    <TextField
                      component="form"
                      sx={{
                        "& > :not(style)": { width: "20ch", height: 30 },
                        flex:1
                      }}
                      noValidate
                      autoComplete="off"
                      name="price"
                      onChange={handleChange}
                      type="text"
                      placeholder="Price"
                    />
                  </Grid>

                  <Grid item xs={4} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Kind</label>
                    <Select
                      component="form"
                      sx={{ width: "20ch", height: 30 }}
                      noValidate
                      autoComplete="off"
                      name="kind"
                      onChange={handleChange}
                      id="Kind"
                    >
                      <MenuItem value="plant">Plant</MenuItem>
                      <MenuItem value="tool">Tool</MenuItem>
                    </Select>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Light</label>
                    <Select
                      component="form"
                      sx={{ width: "20ch", height: 30 }}
                      noValidate
                      autoComplete="off"
                      name="light"
                      onChange={handleChange}
                      id="Light"
                    >
                      <MenuItem value="low">Low</MenuItem>
                      <MenuItem value="medium">Medium</MenuItem>
                      <MenuItem value="much">Much</MenuItem>
                    </Select>
                  </Grid>

                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Water</label>
                    <Select
                      component="form"
                      sx={{ width: "20ch", height: 30 }}
                      noValidate
                      autoComplete="off"
                      name="water"
                      onChange={handleChange}
                      id="Water"
                    >
                      <MenuItem value="low">Low</MenuItem>
                      <MenuItem value="medium">Medium</MenuItem>
                      <MenuItem value="much">Much</MenuItem>
                    </Select>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Growth Rate</label>
                    <Select
                      component="form"
                      sx={{ width: "20ch", height: 30 }}
                      noValidate
                      autoComplete="off"
                      name="growthRate"
                      onChange={handleChange}
                      id="GrowthRate"
                    >
                      <MenuItem value="low">Low</MenuItem>
                      <MenuItem value="medium">Medium</MenuItem>
                      <MenuItem value="much">Much</MenuItem>
                    </Select>
                  </Grid>

                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <label>Environment</label>
                    <Select
                      component="form"
                      sx={{ width: "20ch", height: 30 }}
                      noValidate
                      autoComplete="off"
                      name="environment"
                      onChange={handleChange}
                      id="Environment"
                    >
                      <MenuItem value="none">None</MenuItem>
                      <MenuItem value="tropical">Tropical</MenuItem>
                      <MenuItem value="cold">Cold</MenuItem>
                    </Select>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid
                    item
                    sx={{ p: 2 }}
                    alignItems="center"
                    direction="row"
                  >
                    <div className="productPagePrice">
                      {" "}
                      <b>Count</b>
                    </div>
                  </Grid>
                  <Grid
                    item
                    // xs={6}
                    // md={6}
                    // lg={4}
                    // sx={{ justifyContent: { xs: "flex-end", sm: "center" } }}
                    className="ProductPageCounter"
                  >
                    <Grid item container alignItems="center" direction="row">
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
                  </Grid>
                  <Grid item xs={6} sm={6} lg={6} sx={{ p: 2 }}>
                    <TextField
                      accept="image/jpeg"
                      className={classes.TextField}
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
                      {SelectedFile ? SelectedFile.name : "Select Image"}
                    </label>
                    . . .<Button color="primary">Save</Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
