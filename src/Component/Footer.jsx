import React from "react";

function Footer(){
    return (
        <>
        <footer className="text-center text-lg-start bg-light text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
        
            <div className="">
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f  mr-2"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter  mr-2"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google  mr-2"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram  mr-2"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin  mr-2"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github  mr-2"></i>
              </a>
            </div>
          </section>
        
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"><img  style={{ width
  :"60px" }}  src="/images/logo_1.png"/></i>
                  </h6>
                  <p>
                  E-commerce (electronic commerce) is the buying and selling of goods and services,
                   or the transmitting of funds or data, over an electronic network, primarily the internet.
                  </p>
                </div>
        
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Shirts</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Jeans</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Shoes</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Watches</a>
                  </p>
                </div>
        
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                  INFORMATION 
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">About</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Contact</a>
                  </p>
                </div>
        
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>
              </div>
            </div>
          </section>
        
          <div className="text-center p-4" >
            <a className="text-reset fw-bold" href="">Copyright ©2023 All rights reserved | Visia Store</a>
          </div>
        </footer>



</>

    );
}

export default Footer;