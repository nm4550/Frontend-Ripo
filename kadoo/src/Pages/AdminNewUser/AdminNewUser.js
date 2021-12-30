import "./AdminNewUser.css";
import { TextField } from "@mui/material";
import React from "react";

const currencies = [
  {
    value: 'YES',
    label: 'Yes',
  },
  {
    value: 'NO',
    label: 'No',
  },
];

export default function NewUser() {

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Specialist</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <TextField id="standard-basic" label="Email" variant="standard" type="email" required/>
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="Username" variant="standard" type="text" required/>
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="Fisrt name" variant="standard" type="text" required/>
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="Last name" variant="standard" type="text" required/>
        </div>
        <div className="newUserItem">
          <TextField
          id="outlined-password-input"
          label="Password"
          variant="standard"
          type="password"
          autoComplete="current-password"
          required
          />
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="ID" variant="standard" />
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="Birth date" variant="standard"/>
        </div><div className="newUserItem">
          <TextField id="standard-basic" label="Degree" variant="standard"/>
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="Major" variant="standard"/>
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="Phone number" variant="standard"/>
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="About" variant="standard"/>
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="Address" variant="standard"/>
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="Rate" variant="standard" type="number"/>
        </div>
        <div className="newUserItem">
          <TextField
            id="standard-select-currency-native"
            select
            label="Active"
            value={currency}
            onChange={handleChange}
            SelectProps={{
            native: true,
            }}
            variant="standard"
            >
            {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </div>
      </form>
      <button className="newUserButton">Add Specialist</button>
    </div>
  );
}