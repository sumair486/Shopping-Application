import React from "react";
import { useEffect, useState } from 'react';
import PaypalCheckOutButton from "./PaypalCheckOutButton";


function Checkout({ cart }) {


  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [code, setCode] = useState('');




  localStorage.setItem("name", JSON.stringify(name))
  localStorage.setItem("email", JSON.stringify(email))
  localStorage.setItem("address", JSON.stringify(address))
  localStorage.setItem("contact", JSON.stringify(contact))
  localStorage.setItem("code", JSON.stringify(code))






  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };



  const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
    setSubmitted(false);
  };

  const handleCode = (e) => {
    setCode(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('name is required');
      return;
    }

    if (!email) {
      alert('email is required');
      return;
    }
    if (!address) {
      alert('Address is required');
      return;
    }
    if (!contact) {
      alert('Contact is required');
      return;
    }
    if (!code) {
      alert('Code is required');
      return;
    }
    if (name === '' || email === '' || address === '' || contact === '' || code === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }

  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>{name}successfully submit</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  useEffect(() => {

    localStorage.setItem("name", JSON.stringify(name))
    localStorage.setItem("email", JSON.stringify(email))
    localStorage.setItem("address", JSON.stringify(address))
    localStorage.setItem("contact", JSON.stringify(contact))
    localStorage.setItem("code", JSON.stringify(code))



  });





  //total price
  const [CART, setCART] = useState([]);
  const [Total, setTotal] = useState(0);
  const itemsPrice = CART.reduce((total, value) => total + value.quantity * value.price, 0);

  const product = {
    description: "product items",
    price: itemsPrice,
  };


  // useEffect(() => {
  //   let MyTotal = 0;
  //   if (cart !== null) {
  //     cart.forEach(element => {
  //       MyTotal += parseFloat(element.quantity) * parseFloat(element.price)
  //     })
  //     setTotal(parseFloat(MyTotal).toFixed(2))

  //   }

  //   setCART(cart)
  // }, [cart])

    useEffect(() => {
    const data = window.localStorage.getItem('cart');
    if ( data !== null ) setCART(JSON.parse(data));
  }, [])
  return (
    <>



      {/* design */}
      <div className="jumbotron jumbotron-fluid mt-5" style={{
        backgroundImage: `url("https://images.pexels.com/photos/163999/pexels-photo-163999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`
        , height: "250px"
      }}>
        <div class="container">
          <div style={{ color: "#FFC300" }} className="text text-center">
            <h1 className="display-4">Just hurry up limited offer!</h1>
            <h1>CHECKOUT</h1>
          </div>

        </div>
      </div>

      {/* design */}

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <table class="table table-bordered">
              <thead>
                <tr>

                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Quantity</th>


                  <th scope="col">Item Price</th>

                </tr>
              </thead>
              {
                CART?.map((cartItem, cartindex) => {
                  return (
                    <tbody>
                      <tr>
                        {/* <td className=''>{cartindex.id}</td> */}
                        <td><img className='pic img-fluid' src={cartItem.image} style={{ width: "20%" }} /></td>
                        <td><span className='title text text-'> {cartItem.title} </span></td>

                        <td><span className=''> {cartItem.quantity} </span></td>

                        <td>
                          <span className='item-price'> ${parseFloat(cartItem.price * cartItem.quantity).toFixed(2)} </span>

                        </td>


                      </tr>


                    </tbody>
                  )
                })
              }

              <tr className="total">
                <th colspan="3" scope="row">Total</th>
                <td> $
                  {
                     parseFloat(CART == null ?  0 : CART.map(item => item.price * item.quantity).reduce((total, value) =>  total + value, 0).toFixed(2))
                  }
                </td>


              </tr>
            </table>
          </div>
          {/* form */}
          <div className="col-md-6">
            <div className="messages">
              {errorMessage()}
              {successMessage()}
            </div>

            <form>
              {/* Labels and inputs for form data */}
              <label className="label">Name</label>
              <input onChange={handleName} placeholder="Enter the name" className="input form-control"
                value={name} type="text" />

              <label className="label">Email</label>
              <input onChange={handleEmail} placeholder="Enter the email" className="input form-control"
                value={email} type="email" />

              <label className="label">Address</label>
              <input style={{ height: "100px" }} placeholder="Enter the address" onChange={handleAddress} className="input form-control"
                value={address} type="text" />

              <label className="label">Contact</label>
              <input onChange={handleContact} placeholder="Enter the contact" className="input form-control"
                value={contact} type="text" />

              <label className="label">Zip Code</label>
              <input onChange={handleCode} placeholder="Enter the zip code" className="input form-control"
                value={code} type="number" />



              <button onClick={handleSubmit} className="btn btn-success mt-2" type="submit">
                Submit
              </button>
            </form>
            {/* paypal */}
            <div className="paypal mt-2">
              <h1>Payment method</h1>
              <PaypalCheckOutButton  product={product} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


export default Checkout