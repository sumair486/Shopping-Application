import React from "react";

function Section(){
    return (
        <>
        {/* <div  className="container-fluid">
            <div  className="row"> */}
            {/* <div className="col-lg-12"> */}
                <div id="carouselExampleCaptions" style={{ width:"100%" }} class="carousel slide" data-ride="carousel">
  <ol  class="carousel-indicators">
    <li  data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div style={{ width:"100%" }}  class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  style={{height: "650px"}} class="d-block w-100" alt="..."/>
      <div style={{fontSize:"70px",fontWeight:"bold"}} class="carousel-caption ">
        <h5 style={{fontSize:"30px",fontWeight:"bold"}}>New
Collection</h5>
        <p>New Arrival </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/6214452/pexels-photo-6214452.jpeg?auto=compress&cs=tinysrgb&w=600"  style={{height: "650px"}} class="d-block w-100" alt="..."/>
      <div style={{fontSize:"70px",fontWeight:"bold"}} class="carousel-caption">
        <h5 style={{fontSize:"30px",fontWeight:"bold"}} >Discount
Collection</h5>
        <p>New Season</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://preview.colorlib.com/theme/store/images/img_bg_3.jpg.webp"  style={{height: "650px"}} class="d-block w-100" alt="..."/>
      <div style={{fontSize:"70px",fontWeight:"bold"}} class="carousel-caption ">
        <h5 style={{fontSize:"30px",fontWeight:"bold"}}>HUGE SELL</h5>
        <p >Special Discount</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span classname="carousel-control-prev-icon" aria-hidden="true"></span>
    <span classname="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span classname="carousel-control-next-icon" aria-hidden="true"></span>
    <span classname="sr-only">Next</span>
  </a>
</div>
                {/* </div> */}
            {/* </div>
        </div> */}

<section>

    <div className="container mt-5">
        <div className="row">
            <div className="col-md-12">
                <h1  className="prod_heading text text-center">-- OUR COLLECTIONS --</h1>
            </div>
        </div>
    </div>

    <div className="container mt-3">
        <div className="row">
            {/* <div className="col-md-6">
<img src="/images/banner_1.jpg" className="img-fluid"></img>
            </div> */}
                <div className="col-md-3">
        <img src="/images/banner_product2.jpg" className="img-fluid"></img>
        <img  src="/images/banner_product1.jpg" className="img-fluid mt-2"></img>
     </div>

    <div className="col-md-3">
        <img src="/images/banner_product3.jpg" className="img-fluid"></img>
        <img  src="/images/slideshow-3.jpg" className="img-fluid mt-2"></img>
    </div>


    <div className="col-md-3">
        <img src="/images/banner_product2.jpg" className="img-fluid"></img>
        <img  src="/images/banner_product1.jpg" className="img-fluid mt-2"></img>
     </div>

    <div className="col-md-3">
        <img src="/images/banner_product3.jpg" className="img-fluid"></img>
        <img  src="/images/slideshow-3.jpg" className="img-fluid mt-2"></img>
    </div>

        </div>
    </div>
</section>










        </>
        
    );
}

export default Section;