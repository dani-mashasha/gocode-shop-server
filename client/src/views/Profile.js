import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js";
import { CartContext } from "../contexts/CartContext.js";
import axios from "axios";

function Profile() {
  const { cart } = useContext(CartContext);
  const { loggedIn, loggedUser } = useContext(AuthContext);

  async function pleacOrder(e) {
    e.preventDefault();
    try {
      const products = cart;
      const order = { user: loggedUser, products };

      await axios.post("/api/order", order);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={"page"}>
      <h1> Hello {loggedUser.userName} </h1>
      {cart.length < 1 ? (
        <p>your cart is empty</p>
      ) : (
        <button onClick={pleacOrder}>Order Now</button>
      )}
    </div>
  );
}

export default Profile;
