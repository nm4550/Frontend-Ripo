import "./AdminProduct.css";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import Grid from "@mui/material/Grid";
import { Select } from "@mui/material";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import PublishIcon from "@mui/icons-material/Publish";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

const kind = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "plant",
    label: "Plant",
  },
  {
    value: "tool",
    label: "Tool",
  },
];

const light = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "much",
    label: "Much",
  },
];

const water = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "much",
    label: "Much",
  },
];

const growthRate = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "much",
    label: "Much",
  },
];

const environment = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "tropical",
    label: "Tropical",
  },
  {
    value: "cold",
    label: "Cold",
  },
];

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

const Input = styled('input')({
  display: 'none',
});

export default function NewUser() {
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
  // const [currency, setCurrency] = React.useState("EUR");

  // const [value, setValue] = React.useState(null);
  // const initialPrimaryFormData = Object.freeze({
  //   name: "",
  //   lastName: "",
  //   userName: "",
  //   email: "",
  //   password: "",
  // });
  // const initialSecondaryFormData = Object.freeze({
  //   birth_date: "",
  //   degree: "",
  //   major: "",
  //   phone_number: "",
  //   about: "",
  //   address: "",
  // });
  // const [formData, updateFormData] = useState(initialPrimaryFormData);
  // const [secondaryFormData, updateSecondaryFormData] = useState(
  //   initialSecondaryFormData
  // );
  // const [errorData, updateErrorData] = useState(initialPrimaryFormData);
  // const [secondaryerrorData, updateSecondaryErrorData] = useState(
  //   initialSecondaryFormData
  // );
  // const [refresh, setRefresh] = useState(false);
  // const [primaryConfirmation, setPrimaryConfirmation] = useState(false);
  // const [primaryAccepted, setPrimaryAccepted] = useState(false);
  // const [id, setId] = useState("");

  // useEffect(() => {
  //   if (id != "") {
  //     updateSecondaryErrorData({
  //       ...errorData,
  //       birth_date: "",
  //     });
  //     updateSecondaryErrorData({
  //       ...errorData,
  //       degree: "",
  //     });
  //     updateSecondaryErrorData({
  //       ...errorData,
  //       major: "",
  //     });
  //     updateSecondaryErrorData({
  //       ...errorData,
  //       phone_number: "",
  //     });
  //     updateSecondaryErrorData({
  //       ...errorData,
  //       about: "",
  //     });
  //     updateSecondaryErrorData({
  //       ...errorData,
  //       address: "",
  //     });
  //     console.log(errorData);

  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         id_code: "",
  //         is_online: true,
  //         rate: 0,
  //         birth_date: secondaryFormData.birth_date,
  //         degree: secondaryFormData.degree,
  //         major: secondaryFormData.major,
  //         phone_number: secondaryFormData.phone_number,
  //         about: secondaryFormData.about,
  //         address: secondaryFormData.address,
  //       }),
  //     };
  //     console.log(requestOptions.body);
  //     fetch(
  //       "http://127.0.0.1:8000/api/specialist/update-secondary/" + id + "/",
  //       requestOptions
  //     )
  //       .then((response) => {
  //         if (response.status === 200) {
  //           alert("Specialist registered!");
  //         } else {
  //           throw response;
  //         }
  //       })
  //       .catch((err) => {
  //         err.text().then((errorMessage) => {
  //           const errors = JSON.parse(errorMessage);
  //           console.log("e " + errors.email);

  //           if (errors.birth_date !== undefined) {
  //             updateSecondaryErrorData({
  //               ...secondaryerrorData,
  //               birth_date: errors.birth_date,
  //             });
  //             return;
  //           }

  //           if (errors.degree !== undefined) {
  //             updateSecondaryErrorData({
  //               ...secondaryerrorData,
  //               degree: errors.degree,
  //             });
  //             return;
  //           }

  //           if (errors.major !== undefined) {
  //             updateSecondaryErrorData({
  //               ...secondaryerrorData,
  //               major: errors.major,
  //             });
  //             return;
  //           }

  //           if (errors.phone_number !== undefined) {
  //             updateSecondaryErrorData({
  //               ...secondaryerrorData,
  //               phone_number: errors.phone_number,
  //             });
  //             return;
  //           }

  //           if (errors.about !== undefined) {
  //             updateSecondaryErrorData({
  //               ...secondaryerrorData,
  //               about: errors.about,
  //             });
  //             return;
  //           }

  //           if (errors.address !== undefined) {
  //             updateSecondaryErrorData({
  //               ...secondaryerrorData,
  //               address: errors.address,
  //             });
  //             return;
  //           }
  //         });
  //       });
  //   }
  // }, [primaryConfirmation, id]);

  // const handleChange = (e) => {
  //   updateFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value.trim(),
  //   });
  //   updateErrorData({
  //     ...errorData,
  //     [e.target.name]: "",
  //   });
  //   console.log(formData);
  // };

  // useEffect(() => {
  //   console.log(secondaryFormData);
  // }, [secondaryFormData]);

  // const handleChangeSecondary = (e) => {
  //   updateSecondaryFormData({
  //     ...secondaryFormData,
  //     [e.target.name]: e.target.value.trim(),
  //   });
  //   updateSecondaryErrorData({
  //     ...secondaryerrorData,
  //     [e.target.name]: "",
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!primaryAccepted) {
  //     console.log(formData);
  //     console.log(
  //       JSON.stringify({
  //         email: formData.email,
  //         user_name: formData.userName,
  //         first_name: formData.name,
  //         last_name: formData.lastName,
  //         password: formData.password,
  //       })
  //     );

  //     updateErrorData({
  //       ...errorData,
  //       name: "",
  //     });
  //     updateErrorData({
  //       ...errorData,
  //       lastName: "",
  //     });
  //     updateErrorData({
  //       ...errorData,
  //       userName: "",
  //     });
  //     updateErrorData({
  //       ...errorData,
  //       email: "",
  //     });
  //     updateErrorData({
  //       ...errorData,
  //       password: "",
  //     });
  //     console.log(errorData);

  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         email: formData.email,
  //         user_name: formData.userName,
  //         first_name: formData.name,
  //         last_name: formData.lastName,
  //         password: formData.password,
  //       }),
  //     };
  //     fetch("http://127.0.0.1:8000/api/specialist/register/", requestOptions)
  //       .then(async (response) => {
  //         if (response.status === 201) {
  //           let isJson = response.headers
  //             .get("content-type")
  //             ?.includes("application/json");
  //           let data = isJson ? await response.json() : null;
  //           console.log("1");
  //           console.log(data);
  //           setId(data.id);

  //           setPrimaryConfirmation(primaryConfirmation ? false : true);
  //           setPrimaryAccepted(true);
  //         } else {
  //           throw response;
  //         }
  //       })
  //       .catch((err) => {
  //         err.text().then((errorMessage) => {
  //           const errors = JSON.parse(errorMessage);
  //           console.log("e " + errors.email);

  //           if (errors.email !== undefined) {
  //             updateErrorData({
  //               ...errorData,
  //               email: errors.email,
  //             });
  //             return;
  //           }

  //           if (errors.user_name !== undefined) {
  //             updateErrorData({
  //               ...errorData,
  //               userName: errors.user_name,
  //             });
  //             return;
  //           }

  //           if (errors.first_name !== undefined) {
  //             updateErrorData({
  //               ...errorData,
  //               name: errors.first_name,
  //             });
  //             return;
  //           }

  //           if (errors.last_name !== undefined) {
  //             updateErrorData({
  //               ...errorData,
  //               lastName: errors.last_name,
  //             });
  //             return;
  //           }

  //           if (errors.password !== undefined) {
  //             updateErrorData({
  //               ...errorData,
  //               password: errors.password,
  //             });
  //             return;
  //           }
  //         });
  //       });
  //   } else {
  //     setPrimaryConfirmation(primaryConfirmation ? false : true);
  //   }
  // };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Product</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
      </label>
        </div>
        
        <div className="newUserItem">
        <Grid container>
          <Grid item sx={{ p: 2 }} alignItems="center" direction="row">
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
          
        </Grid>
          
        </div>
        <div className="newUserItem">
          <TextField
            // id="standard-basic"
            name="name"
            label="Product Name"
            variant="standard"
            type="text"
            // helperText={errorData.email != "" ? errorData.email : ""}
            // onChange={handleChange}
            required
          />          
        </div>
        <div className="newUserItem">
          <TextField
            name="description"
            // id="standard-basic"
            label="Description"
            variant="standard"
            type="text"
            // helperText={errorData.userName != "" ? errorData.userName : ""}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="newUserItem">
          <TextField
            name="price"
            // id="standard-basic"
            label="Price"
            variant="standard"
            type="text"
            // helperText={errorData.name != "" ? errorData.name : ""}
            // onChange={handleChange}
            required
          />
        </div>

        <div className="newUserItem">
          <TextField
            name="kind"
            // id="standard-select-currency-native"
            select
            label="Kind"
            // value={secondaryFormData.degree}
            // onChange={handleChangeSecondary}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {kind.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            {/* onChange={handleChangeSecondary} */}
          </TextField>
        </div>

        <div className="newUserItem">
          <TextField
            name="light"
            // id="standard-select-currency-native"
            select
            label="Light"
            // value={secondaryFormData.degree}
            // onChange={handleChangeSecondary}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {light.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            {/* onChange={handleChangeSecondary} */}
          </TextField>
        </div>

        <div className="newUserItem">
          <TextField
            name="water"
            // id="standard-select-currency-native"
            select
            label="water"
            // value={secondaryFormData.degree}
            // onChange={handleChangeSecondary}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {water.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            {/* onChange={handleChangeSecondary} */}
          </TextField>
        </div>

        <div className="newUserItem">
          <TextField
            name="growthRate"
            // id="standard-select-currency-native"
            select
            label="Growth Rate"
            // value={secondaryFormData.degree}
            // onChange={handleChangeSecondary}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {growthRate.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            {/* onChange={handleChangeSecondary} */}
          </TextField>
        </div>

        <div className="newUserItem">
          <TextField
            name="environment"
            // id="standard-select-currency-native"
            select
            label="Environment"
            // value={secondaryFormData.degree}
            // onChange={handleChangeSecondary}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {environment.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            {/* onChange={handleChangeSecondary} */}
          </TextField>
        </div>

        
      </form>
      <Link to="/AdminPage/productsList">
        <button
          className="newUserButton"
          //  onClick={handleSubmit}
        >
          Confirm
        </button>
      </Link>
      <Link to="/AdminPage/productsList">
        <button className="CancelEditBtn">Cancel</button>
      </Link>
    </div>
  );
}
