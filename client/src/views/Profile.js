import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js";
import { CartContext } from "../contexts/CartContext.js";
import axios from "axios";

function Profile() {
  const { cart, totalPrice, resetCart } = useContext(CartContext);
  const { loggedUser } = useContext(AuthContext);

  async function pleacOrder(e) {
    e.preventDefault();
    try {
      const products = cart;
      const order = { user: loggedUser, products, totalPrice };

      await axios.post("/api/order", order);
      resetCart();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={"page"}>
      <h1>{loggedUser.userName} </h1>
      {cart.length < 1 ? (
        <p>your cart is empty</p>
      ) : (
        <button onClick={pleacOrder}>Order Now</button>
      )}
    </div>
  );
}

export default Profile;
