import * as React from 'react';
import Divider from '@material-ui/core/Divider';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


function Sidebar() {
  return (
      <MenuList>
        <MenuItem>
        <ListItemText>Apartment (For Plants)</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Garden (For Plants)</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Yard (For Plants)</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Digging (For Tools)</ListItemText>
        </MenuItem>
      </MenuList>
  );
}

export default Sidebar;
