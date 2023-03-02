import {PayPalScriptProvider} from "@paypal/react-paypal-js";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

import React, { useState,useEffect } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Section from './Component/Section';
import Products from './Component/Products';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import About from './Component/About';
import SingleProduct from './Component/SingleProduct';
import Cart from './Component/Cart';
import Error from './Component/Error';
import Checkout from './Component/Checkout';
import OrderSuccess from './Component/OrderSuccess';
import FailOrder from "./Component/FailOrder";
import Registration from "./Component/Registeration";
import Login from "./Component/Login";



const cartFromLocalStorage=JSON.parse(localStorage.getItem("cart")) // "[]"



function App() {
  const [cart, setCart] = useState(cartFromLocalStorage || [])
  const [showCart, setShowCart] = useState(false)

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart]);

  const addToCart = (e,data) => {
    e.preventDefault();
    const found=cart.filter(e=>{
      return e.id==data.id;
    })
    console.log(found,"found");
    if(found.length>0){
      const item=cart.filter(e=>{
        return e.id!==data.id;
      })
      setCart([...item, { ...data, quantity: found[0].quantity+1 }])

    }
    else{
      setCart([...cart, { ...data, quantity: 1 }])

    }
    // alert("Product has been added");
  }

  const handleShow = (value) => {
    setShowCart(value)
  }
  return (
    <>

    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
      
    <Router>
    <div className="">
    <Routes>
      
        <Route exact path="/" element={<><Navbar count={cart == null ?  [] : cart.length}
        handleShow={handleShow}/><Section/><Products addToCart={addToCart} /><Footer/></>} />

        <Route exact path="/products"  element={<><Navbar count={cart == null ?  [] : cart.length}
        handleShow={handleShow}/><Products addToCart={addToCart}/><Footer/></>} />

        <Route exact path="/product/:id" element={<><Navbar count={ cart == null ?  [] : cart.length}
        handleShow={handleShow}/><SingleProduct addToCart={addToCart}/><Footer/></>} />

        <Route exact path="/checkout" element={<><Navbar count={ cart == null ?  [] : cart.length}
        handleShow={handleShow}/><Checkout cart={cart}  /><Footer/></>} />

        <Route exact path="/ordersuccess" element={<><Navbar count={ cart == null ?  [] : cart.length}
        handleShow={handleShow}/><OrderSuccess/><Footer/></>} />

        <Route exact path="/contact" element={<><Navbar count={ cart == null ?  [] : cart.length}
        handleShow={handleShow}/><Contact/><Footer/></>} />

        <Route exact path="/about" element={<><Navbar count={ cart == null ?  [] : cart.length}
        handleShow={handleShow}/><About/><Footer/></>} />

        <Route exact path="/cart" element={<><Navbar count={cart == null ?  [] : cart.length}
        handleShow={handleShow}/><Cart cart={cart}/><Footer/></>} />

        <Route exact path="/failorder" element={<><Navbar count={cart == null ?  [] : cart.length}
        handleShow={handleShow}/><FailOrder/><Footer/></>} />

        <Route exact path="/registeration" element={<><Navbar count={cart == null ?  [] : cart.length}
        handleShow={handleShow}/><Registration /> <Footer/></>} />

        <Route exact path="/login" element={<><Navbar count={cart == null ?  [] : cart.length}
        handleShow={handleShow}/><Login /> <Footer/></>} />

        <Route path="*" element={<Error/>} />


    </Routes>
    </div>
    </Router>


    </PayPalScriptProvider>
  


    </>
  );
}

export default App;
