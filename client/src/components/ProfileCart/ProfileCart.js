import { Card, Divider, Grid, List, ListItem } from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.js";
import CartItem from "../CartItem/CartItem.js";
import useStyles from "./style.js";
import { Link } from "react-router-dom";

const ProfileCart = () => {
  const classes = useStyles();
  const { cart, itemsInCart, totalPrice } = useContext(CartContext);
  return (
    <Grid item xs={12} md={3}>
      <Card className={classes.cartCard}>
        <h1>Your Order</h1>
        <Divider />

        <List className={classes.profileCart}>
          {cart.length > 0 ? (
            cart.map((product) => (
              <ListItem>
                <CartItem props={product} />
              </ListItem>
            ))
          ) : (
            <div>
              <h2>Your cart is empty...</h2>
              <h2>
                Take a look at our new items
                <Link to="/products-grid"> here </Link>
              </h2>
            </div>
          )}
        </List>
      </Card>
    </Grid>
  );
};

export default ProfileCart;
