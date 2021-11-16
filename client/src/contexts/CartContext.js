import { createContext, useContext, useState } from "react";
import { ProductsContext } from "./ProductsContext.js";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { products } = useContext(ProductsContext);

  const addToCart = (e) => {
    const id = e.currentTarget.value;
    let newproduct = cart.find((product) => product._id === id);
    if (newproduct) {
      newproduct = { ...newproduct, amount: newproduct.amount++ };
    } else {
      newproduct = {
        ...products.find((product) => product._id === id),
        amount: 1,
      };
      setCart((curr) => [...curr, newproduct]);
    }
    setTotalPrice((prevValue) => prevValue + newproduct.price);
    setItemsInCart(itemsInCart + 1);
  };

  const removeFromCart = (e) => {
    const id = e.currentTarget.value;
    let product = cart.find((product) => product._id === id);
    if (product.amount === 1) {
      setCart((prevValue) => prevValue.filter((product) => product._id !== id));
    } else {
      product = { ...product, amount: product.amount-- };
    }
    setTotalPrice((prevValue) => prevValue - product.price);
    setItemsInCart(itemsInCart - 1);
  };
  const resetCart = () => {
    setCart([]);
    setItemsInCart(0);
    setTotalPrice(0);
  };
  const CartValues = {
    cart,
    setCart,
    addToCart,
    itemsInCart,
    totalPrice,
    removeFromCart,
    resetCart,
    setTotalPrice,
  };

  return (
    <CartContext.Provider value={CartValues}>
      {props.children}
    </CartContext.Provider>
  );
};
