import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

export default function Info({title , description , price , category}) {
    return(
        <Grid container direction = "column" style = {{height : "100"}}>
            <Typography variant = "subtitle1">{category}</Typography>
            <Divider />
            <Box mt = {2}>
                <Typography variant="h4"> {title}</Typography>
                <Typography variant="subtitle1"> {description}</Typography>
                <Typography variant="h5"> {price}</Typography>
            </Box>
            <Button variant="contained" color="primary" style={{margiTop: "outo"}}>
                Purchase
            </Button>
        </Grid>
    ); 
}