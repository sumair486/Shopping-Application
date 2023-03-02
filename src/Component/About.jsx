import React from "react";

function About(){
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



<section id="about" class="about section-bg">
      <div class="container" data-aos="fade-up">

        <div class="ab text-center section-title">
          <h2>About</h2>
          <h3>Find Out More <span>About Us</span></h3>
          <p>Logistics in e-commerce mainly concerns fulfillment</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <img src="images/banner_1.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <h3>INTRODUCTION.</h3>
            <p class="fst-italic">
            The history of ecommerce begins with the first ever online sale: on the August 11, 1994 a man sold a CD by the band Sting to his friend through his website NetMarket, an American retail platform. This is the first example of a consumer purchasing a product from a business 
            through the World Wide Web—or “ecommerce” as we commonly know it today.  E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. E-commerce draws on technologies such as mobile commerce, electronic
             funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems. E-commerce is in turn driven by the technological advances of the semiconductor industry,
              and is the largest sector of the electronics industry.
            </p>
            {/* <ul>
              <li>
                <i class="bx bx-store-alt"></i>
                <div>
                  <h5>Impact on employment
</h5>
                  <p>E-commerce helps create new job opportunities due to information related services, software app and digital products. It also causes job losses. The areas with the greatest predicted job-loss are retail, postal, and travel agencies</p>
                </div>
              </li>

            </ul> */}

          </div>
        </div>

      </div>
    </section>


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

export default About;