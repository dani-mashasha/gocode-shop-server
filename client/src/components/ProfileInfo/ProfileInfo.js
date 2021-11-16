import { Avatar, Card, Divider, Grid } from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import { CartContext } from "../../contexts/CartContext.js";
import { deepOrange, deepPurple } from "@mui/material/colors";

import useStyles from "./style.js";

const ProfileInfo = () => {
  const classes = useStyles();
  const { cart, totalPrice, resetCart } = useContext(CartContext);
  const { loggedUser } = useContext(AuthContext);

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.infoBox}>
        <div>
          {" "}
          <h1>User Info</h1>
          <Divider />
        </div>
        <div>
          <Avatar style={{ background: "#8971d0" }}>
            {/* {loggedUser && loggedUser.userName.toUpperCase()} */}
          </Avatar>
          <h2> {loggedUser.userName} </h2>
          <p>Address</p>
        </div>
      </Card>
    </Grid>
  );
};

export default ProfileInfo;
