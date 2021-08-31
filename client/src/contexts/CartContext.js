import { createContext, useContext, useState } from "react";
import { ProductsContext } from "./ProductsContext.js";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const {products} = useContext(ProductsContext);


    const addToCart = (e) => {
    const id = e.currentTarget.value
    let newproduct = cart.find(product=> product._id === id);
console.log( id)
    if(newproduct){
        newproduct = {...newproduct, amount: newproduct.amount++}
    }else{
         newproduct = {...products.find(product=> product._id === id), amount: 1}
        setCart(curr => [...curr, newproduct]);
         console.log(newproduct)
    }
    setItemsInCart(itemsInCart+1)
    }
  
    const CartValues = {cart, setCart,addToCart,itemsInCart}


    return(
        <CartContext.Provider value={CartValues}>
            {props.children}
        </CartContext.Provider>
    )

}