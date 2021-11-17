import { Avatar, Card, Divider, Grid } from "@material-ui/core";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import { CartContext } from "../../contexts/CartContext.js";
import { deepOrange, deepPurple } from "@mui/material/colors";

import useStyles from "./style.js";

const ProfileInfo = () => {
  const classes = useStyles();
  const { cart, totalPrice, resetCart } = useContext(CartContext);
  const { loggedUser, loggedIn } = useContext(AuthContext);
  const [res, setRes] = useState();

  async function check() {
    const res = await loggedIn;
    setRes(res);
  }
  check();

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.infoBox}>
        <div>
          {" "}
          <h1>User Info</h1>
          <Divider />
        </div>
        <div className={classes.userHeader}>
          <Avatar className={classes.avatar}>
            {res && loggedUser.userName[0].toUpperCase()}
          </Avatar>
          <h2> {loggedUser.userName} </h2>
        </div>
        <div className={classes.userContent}>
          <h3>Address: {loggedUser.address}</h3>
          <p>All of your orders will be sent to this address.</p>
          <h3>Email: {loggedUser.email}</h3>
          <p>The order recipt will be sent directly to this email address.</p>
          <h3>
            Please contect us with any problam at: expressShop@contect.com
          </h3>
        </div>
      </Card>
    </Grid>
  );
};

export default ProfileInfo;
