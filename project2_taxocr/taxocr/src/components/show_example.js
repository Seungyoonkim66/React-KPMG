import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function ShowExample({exam}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleToggle}>Sample</Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <div id='example-img-div'><img src={exam} alt='example_img' style={{width: '60%'}}/></div>
      </Backdrop>
    </div>
  );
}
