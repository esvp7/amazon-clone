import React, {useContext} from "react";
import "./Header.css";
import amazonLogo from "./amazon-logo.png";
import searchIcon from "./search.svg"
import cart from "./shopping-cart.png";
import CartContext from "../../context/cart/CartContext";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
   <div className="header">
    <Link to="/">
     <img src={amazonLogo} alt="amazon-logo" className="header_logo"/>
      </Link>
       <div className="header_search">
        <input className="header_searchInput" type="text"/>
         <img src={searchIcon} className="header_searchIcon" alt="searchIcon"/>
          </div>
           <div className="header_nav">
            <Link to="/login">
             {!auth [
             <div className="header_option">
              <span className="header_optionLineOne">Hello Guest</span>
               <span className="header_optionLineTwo">Sign In</span>
               </div> ]}
               {auth && [
                <div className="header_option">
                 <span className="header_optionLineOne">Welcome Back</span>
                  <span className="header_optionLineTwo">Sign Out</span>
                   </div>]}
                  </Link>
                 <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
               <span className="header_optionLineTwo">& Orders</span>
              </div> 
             <div className="header_option">
            <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div> 
       <Link to="/checkout">
      <div className="header_optionBasket">
    <img src={cart} alt="shopping-cart" className="header_basketIcon" />
  <span className="header_optionLineTwo 
     header_basketCount" style={{ cursor: "pointer" }}
       >{cartItems.length}</span>
        </div>
        </Link>
    </div> 
  </div> 
  );
}

export default Header;