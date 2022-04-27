import React, { useContext } from "react";
import "./Subtotal.css";
import CartContext from "../../context/cart/CartContext";

const Subtotal = () => {
  const { cartItems } = useContext(CartContext);
  const getBasketTotal = (cartItems) => 
  cartItems?.reduce((amount, item) => item.price + amount, 0);
	return (
		<div className="subtotal">
           <p>
            Subtotal ({cartItems.length} items): ${getBasketTotal(cartItems)}</p>
        	     <small className="subtotal_gift">
        	      <input type="checkbox" /> This order contains
                a gift
        	</small>
            <button>Proceed to Checkout</button>
	           </div>
    );
}

export default Subtotal;