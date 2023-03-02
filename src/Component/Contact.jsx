import React from "react";



function Contact(){
    return (
        <>

<div className="jumbotron jumbotron-fluid"  style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/163999/pexels-photo-163999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` 
    }}>
<div class="container">
<span  className="banner"><b style={{ color:"#FFC300" }}>45%</b> OFF
SALE</span>
  <h1  className="display-4">Just hurry up limited offer!</h1>
  <p  className="lead">Separated they live in Bookmarksgrove right at the <br></br> coast of the Semantics, a large language ocean.</p>
  <button className="btn_2 btn btn-primary btn-lg" type="button">Shop Now</button>
  <button className="btn_1 btn btn btn-lg ml-3" type="button">Read more</button>

</div>
</div>

<div className="con container">
  <div className=" row">
    <div className="cont col-md-6">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Contact us using the form below or send us an email at info@example.com</p>
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="cont btn btn-primary">Submit</button>
      </form>
    </div>
    <div  className="cont col-md-6">
      {/* <img src="/images/banner_1.jpg" alt="Contact Us" class="img-fluid"/> */}
      <h2>Our Address</h2>
      <p>123 Main Street</p>
      <p>Anytown, USA 12345</p>
      <h2>Phone</h2>
      <p>123-456-7890</p>
      <h2>Email</h2>
      <p>info@example.com</p>
      <h2>Company</h2>
      <p>Visia Store</p>
    </div>
  </div>
</div>

<footer style={{ backgroundColor:"#FFC300" }} className=" text-center text-white mt-5 mb-5">
  <div className="container p-5 pb-0">
    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
            <div clclassNameass="form-outline form-white mb-4">
              <input type="email" id="form5Example29" placeholder="Email address" class="form-control" />
              {/* <label class="form-label" for="form5Example29">Email address</label> */}
            </div>
          </div>

          <div className="col-auto">
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>


</footer>


        </>
    );
}


export default Contact;


