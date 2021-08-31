import { useContext } from "react";
import {IconButton } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { ListItemText } from "@material-ui/core";

import { CartContext } from "../contexts/CartContext.js";

const Cart = () =>{
    const {cart} = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    
    return(
        <div>
            <IconButton color="primary" aria-label="add to shopping cart">
                 <AddShoppingCartIcon /><ListItemText primary={cart.length} />
            </IconButton>  
            <br/>     
            <span>total price : {totalPrice > 0? totalPrice + " $": totalPrice} </span>
           </div>
    )
}

export default Cart;


