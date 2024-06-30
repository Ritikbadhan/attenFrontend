import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  navBar: {
    marginBottom: '32px',
  },
  navTitle: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginLeft: '16px',
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.navTitle}>
          Attendance Tracker
        </Typography>
        <Link to="/" className={classes.link}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/features" className={classes.link}>
          <Button color="inherit">Features</Button>
        </Link>
        <Link to="/about" className={classes.link}>
          <Button color="inherit">About</Button>
        </Link>
        <Link to="/contact" className={classes.link}>
          <Button color="inherit">Contact</Button>
        </Link>
        <Link to="/signin" className={classes.link}>
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/signup-user" className={classes.link}>
          <Button color="inherit">Signup</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
