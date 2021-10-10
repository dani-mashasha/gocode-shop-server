import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import CartDrawer from "../CartDrawer/CartDrawer.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export default function Header() {

  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginBottom:"30px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
          <Link to="/" style={{ color: '#FFFFFF', textDecoration: "none" }}>Shopping Store</Link> 
          </Typography>
          <CartDrawer/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
