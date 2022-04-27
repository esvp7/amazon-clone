import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../../context/cart/CartContext";

const CartItem = ({ id, image, title, price, rating, hideButton }) => {
    const { removeItem } = useContext(CartContext);
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="product-pic" />
              <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                  <p className="checkoutProduct__price">
                    <small>$</small>
                      <strong>{price}</strong>
                     </p>
                   <div className="checkoutProduct__rating">
                  {Array(rating)
                    .fill()
                      .map((_, i) => (
                        <p>⭐</p>
                       ))}
                      </div>
                    {!hideButton && (
                    <button onClick={() => removeItem(id)}>
                      Remove from Basket</button>
                        )}
                   </div>
                 </div>
    )
}

export default CartItem;