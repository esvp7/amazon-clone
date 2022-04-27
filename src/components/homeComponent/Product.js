import React, {useContext} from "react";
import CartContext from "../../context/cart/CartContext";
import "./Product.css";

const Product = ({ title, price, rating, image }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  let priceTotal = price;
  const id = Date.now();
  cartItems.forEach(priceItem => priceTotal += priceItem.price);
	return (
	   <div className="product">
		  <div className="product_info">
		    <p>{title}</p>
		      <p className="product_price">
			     <small>$</small>
			       <strong>{price}</strong>
		        </p>
		         <div className="product_rating">
		        {Array(rating).fill().map((_, i) => (
		       <p className="stars">⭐</p>))}
		    </div>
		 </div>
	 <img src={image} 
	    className="product_image"
		     alt="product1"/>
		      <button className="add_button" 
		     onClick={() => addToCart({ title, price, rating, image, id, priceTotal })}>
		   Add to Basket</button>
	  </div>
	);
}

export default Product;