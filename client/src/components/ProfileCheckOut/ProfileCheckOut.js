import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import { CartContext } from "../../contexts/CartContext.js";
import axios from "axios";

import useStyles from "./style.js";

const ProfileCart = () => {
  const classes = useStyles();
  const { cart, totalPrice, setTotalPrice, resetCart } =
    useContext(CartContext);
  const { loggedUser } = useContext(AuthContext);

  const [delivery, setDelivery] = useState("basic");

  const handleChange = (event) => {
    const { value } = event.target;
    setDelivery(value);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetCart();
    setDelivery("basic");
  };

  async function pleacOrder(e) {
    e.preventDefault();

    try {
      let finelPrice = totalPrice;
      if (delivery === "express") {
        finelPrice = totalPrice + 10;
        setTotalPrice((prev) => prev + 10);
      }

      const products = cart;
      const order = {
        user: loggedUser,
        products,
        totalPrice: finelPrice,
        delivery,
      };

      await axios.post("/api/order", order);

      handleClickOpen();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Grid item xs={12} md={3}>
      <Card className={classes.checkOutBox}>
        <h1>Check Out</h1>
        <Divider />
        <FormControl className={classes.form} component="fieldset">
          <FormLabel component="legend">
            Please choose your preferred delivery option
          </FormLabel>
          <RadioGroup
            aria-label="delivery"
            defaultValue={delivery}
            name="radio-buttons-group"
            onChange={handleChange}
          >
            {" "}
            <FormControlLabel
              value="basic"
              control={<Radio />}
              label="Basic delivery (7-10 days) free"
              style={{ textTransform: "none" }}
            />
            <FormControlLabel
              value="express"
              control={<Radio />}
              label="Express delivery (2-3 days) 10$"
              style={{ textTransform: "none" }}
            />
          </RadioGroup>
        </FormControl>

        <p>Total Price: {Math.round(totalPrice * 100) / 100}$ </p>
        <Button variant="contained" color="primary" onClick={pleacOrder}>
          Order Now
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          disableScrollLock={true}
        >
          <DialogTitle>Order Detailes</DialogTitle>
          <DialogContent className={classes.detailes}>
            <p>User name: {loggedUser.userName}</p>
            <p> Email: {loggedUser.email}</p>
            <p>Address: {loggedUser.address}</p>
            <p>
              Delivery:{" "}
              {delivery === "express"
                ? delivery + " (+10$)"
                : delivery + " (free)"}
            </p>
            <p style={{ fontWeight: "bold", textAlign: "right" }}>
              Total Price: {Math.round(totalPrice * 100) / 100}$
            </p>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </Card>
    </Grid>
  );
};

export default ProfileCart;
