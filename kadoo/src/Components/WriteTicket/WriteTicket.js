import React from 'react'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function WriteTicket() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <IconButton aria-label="Contact" onClick={handleClickOpen}>
            <ContactMailIcon />
        </IconButton>
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle>We're Here To Help!</DialogTitle>
            <DialogContent>
            <DialogContentText>
            If you haven't found what you are looking for, or would like to speak to our specialists, please write your message here.. 
            </DialogContentText>
            <TextField
            fullWidth
            id="standard-textarea"
            label="Message"
            placeholder="Message"
            multiline
            variant="standard"

            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Send</Button>
            </DialogActions>
        </Dialog>
        </div>
    )
}