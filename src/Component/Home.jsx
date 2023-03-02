import React from "react";
// import Navbars from "../Dashboard_Component/Navbars";
import Sidebar from "../Dashboard_Component/Sidebar";
import Dashboard from "../Dashboard_Component/Dashboard";
import PieChart from "../Dashboard_Component/PieChart";

function Home() {
  

  return (
    <>
      <h1>Welcome to Dashboard</h1>
      <div>
                {/* <Navbars/> */}
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>

                  
                
             </div>
            </div>
        </div>  

    </>
  );
}

export default Home;