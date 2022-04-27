import { useEffect } from "react";
import "./App.css";
import Header from "./components/headerComponent/Header";
import Home from "./components/homeComponent/Home";
import Login from "./components/loginComponent/Login";
import Checkout from "./components/checkoutComponent/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {

   useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
    });
  }, []);
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
        <Route path="/login" element={<Login />}/>
          <Route path="/checkout" element={[<Header />, <Checkout />]}/>
           <Route path="/" element={[<Header />, <Home />]}/>
          </Routes>
       </div>
   </Router>
  );
}

export default App;