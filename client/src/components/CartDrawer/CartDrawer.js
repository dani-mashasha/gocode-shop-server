import React, { useContext } from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Badge, IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { CartContext } from "../../contexts/CartContext.js";
import CartItem from "../CartItem/CartItem.js";
import PaymentIcon from "@material-ui/icons/Payment";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  payment: {
    padding: "10px",
  },
});

export default function CartDrawer() {
  const { cart, itemsInCart, totalPrice } = useContext(CartContext);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.target.innerText === "+" || event.target.innerText === "-") {
      return;
    }
    console.log(event);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {cart.length > 0
          ? cart.map((product) => (
              <ListItem>
                <CartItem props={product} />
              </ListItem>
            ))
          : null}
      </List>

      {Math.round(totalPrice * 100) / 100 > 0 ? (
        <div className={classes.payment}>
          <p style={{ padding: "5px" }}>
            Total Price: {Math.round(totalPrice * 100) / 100}$
          </p>

          {isAuthenticated ? (
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <Button
                color={"primary"}
                variant="contained"
                endIcon={<PaymentIcon />}
              >
                advance to payment
              </Button>
            </Link>
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              color={"primary"}
              variant="contained"
              endIcon={<PaymentIcon />}
            >
              advance to payment
            </Button>
          )}
        </div>
      ) : (
        <p style={{ padding: "5px" }}>Your cart is empty...</p>
      )}
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton style={{ color: "#FFFFFF" }}>
            <Badge
              badgeContent={itemsInCart}
              color="secondary"
              onClick={toggleDrawer(anchor, true)}
            >
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
