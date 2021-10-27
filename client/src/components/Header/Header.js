import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CartDrawer from "../CartDrawer/CartDrawer.js";
import LoginMenu from "../LoginMenu/LoginMenu.js";
import StoreIcon from '@material-ui/icons/Store';

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

        <LoginMenu/>

          <Typography variant="h4" className={classes.title}>
          <Link to="/" style={{ color: '#FFFFFF', textDecoration: "none" , fontFamily:"Helvetica"}}>
          <StoreIcon style={{fontSize:" 33px", position: "relative",top: "5px"}}/>
          Shopping Store
          </Link> 
          </Typography>
          
          <CartDrawer/>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
