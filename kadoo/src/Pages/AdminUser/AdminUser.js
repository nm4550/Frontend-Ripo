import "./AdminUser.css";
import { TextField } from "@mui/material";
import React from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Link } from "react-router-dom";

export default function NewUser() {
  
  const [value, setValue] = React.useState(null);

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Edit Specialist</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <TextField id="standard-basic" label="Email" variant="standard" type="email" required/>
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="Username" variant="standard" type="text" required/>
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="Fisrt Name" variant="standard" type="text" required/>
        </div>
        <div className="newUserItem">
          <TextField id="standard-basic" label="Last Name" variant="standard" type="text" required/>
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          label="Birth Date"
          value={value}
          onChange={(newValue) => {
          setValue(newValue);
          }}
          renderInput={(params) => <TextField variant="standard" {...params} />}
          />
          </LocalizationProvider>
        </div>
        <div className="newUserItem">
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
      </form>
      <Link to="/AdminPage/specialist">
        <button className="newUserButton">Edit</button>
      </Link>
      <Link to="/AdminPage/specialist">
        <button className="newUserButton">Cancel</button>
      </Link>
    </div>
  );
}