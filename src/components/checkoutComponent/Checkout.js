import React, {useContext} from "react";
import CartContext from "../../context/cart/CartContext";
import "./Checkout.css";
import banner from "./checkoutAd-img.png";
import Subtotal from "./Subtotal";
import CartItem from "./CartItem";

const Checkout = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div className="checkout">
		<div className="checkout_left">
		<img src={banner} className="checkout_ad" alt="banner" />
		<div>
		<h2 className="checkout_title">Your Shopping Basket</h2>
		{cartItems.map(item => (
            <CartItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
		</div>
		</div>
		<div className="checkout_right">
		<Subtotal />
		</div>
		</div>
	);
}

export default Checkout;