import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartDrawer from "../CartDrawer/CartDrawer.js";
import LoginMenu from "../PersonalMenu/PersonalMenu.js";
import StoreIcon from "@material-ui/icons/Store";
import { AuthContext } from "../../contexts/AuthContext.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#FFFFFF",
    textDecoration: "none",
    fontFamily: "Helvetica",
    marginRight: "auto",
    maxWidth: "300px",
  },
  headline: {
    "@media (max-width: 500px)": {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const { loggedIn, loggedUser } = useContext(AuthContext);

  return (
    <div className={classes.root} style={{ marginBottom: "30px" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component={Link}
            to="/"
            className={classes.title}
          >
            <StoreIcon
              style={{ fontSize: " 33px", position: "relative", top: "5px" }}
            />
            <span className={classes.headline}>Express Shop</span>
          </Typography>
          {loggedIn && <p>Wellcom {loggedUser.userName}</p>}
          <LoginMenu />

          <CartDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}
