import React from "react";
import "./Home.css";
import Product from "./Product";
import landingImage from "./home-image2.jpg";
import product1Image from "./product1-img.png";
import product2Image from "./product2-img.jpg";
import product3Image from "./product3-img.jpg";
import product4Image from "./product4-img.jpg";
import product5Image from "./product5-img.jpg";
import product6Image from "./product6-img.jpg";

const Home = () => {
	return (
		<div className="home">
		 <div className="home_container">
		  <img src={landingImage} className="home_image" alt="landing" />
		  <div className="home_row">
		  <Product 
		  title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
		  price={19.99} 
		  image={product1Image} 
		  rating={4}/>
		  <Product 
		  title="KitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer with Pouring Shield, 5-Quart, Empire Red" 
		  price={329.99} 
		  image={product2Image} 
		  rating={5}/>
		  </div>
		  <div className="home_row">
		  <Product 
		  title="Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools" 
		  price={99.97} 
		  image={product3Image} 
		  rating={4}/>
		  <Product
		  title="JBL GO2 Ultra Portable Waterproof Wireless Bluetooth Speaker - Black" 
		  price={49.99} 
		  image={product4Image} 
		  rating={4}/>
		  <Product
		  title="Apple iPhone Xs, Fully Unlocked, 64 GB - Space Gray (Renewed)" 
		  price={529.0} 
		  image={product5Image} 
		  rating={3}/>
		  </div>
		  <div className="home_row">
		  <Product
		  title="SAMSUNG 49 inch Gaming Monitor, Ultrawide Curved Monitor, 240hz 1ms HDR 2000, Odyssey Neo G9, G95NA" 
		  price={1699.25} 
		  image={product6Image} 
		  rating={5}/>
		  </div>
		  </div>
		  </div>
	);
}

export default Home;