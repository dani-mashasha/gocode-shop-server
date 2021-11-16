import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js";
import { CartContext } from "../contexts/CartContext.js";
import { Grid, Paper } from "@material-ui/core";
import ProfileCart from "../components/ProfileCart/ProfileCart.js";
import ProfileCheckOut from "../components/ProfileCheckOut/ProfileCheckOut.js";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo.js";

function Profile() {
  const { cart, totalPrice, resetCart } = useContext(CartContext);
  const { loggedUser } = useContext(AuthContext);

  return (
    <div className={"page"}>
      <Grid container>
        <ProfileInfo />
        <ProfileCart />
        <ProfileCheckOut />
      </Grid>
    </div>
  );
}

export default Profile;
