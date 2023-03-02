// import React from "react";
import { Link } from "react-router-dom";

const Navbar=(props)=>{
    return (
        <nav  className="navbar navbar-expand-lg bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "><i class="fa-solid fa-sliders"></i></span>
  </button>
  <Link onClick={() => props.handleShow(false)} className="navbar-brand"  to="/"><img  style={{ width
  :"120px" }}  src="/images/logo_1.png"/></Link>

  <div className="collapse navbar-collapse " id="navbarTogglerDemo03">

        <ul className="navbar-nav ml-auto  mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="txt nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className=" nav-item ">
        <Link className="txt nav-link" to="/products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="txt nav-link" to="/checkout">Checkout</Link>
      </li>     
      {/* <li className="nav-item">
        <Link className="txt nav-link" to="/ordersuccess">OrderSuccess</Link>
      </li>   */}
      <li className="nav-item">
        <Link className="txt nav-link" to="/About">About</Link>
      </li>
      <li className="nav-item">
        <Link className="txt nav-link" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="txt nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="txt nav-link" to="/registeration">Register</Link>
      </li>     
      <li className="nav-item">
        <Link onClick={() => props.handleShow(true)} className="txt nav-link" to="/cart"><i  className="cart fa fa-cart-arrow-down"><sup> {props.count} </sup></i>Cart</Link>
      </li>


    </ul>
  </div>
</nav>
    );
}

export default Navbar;