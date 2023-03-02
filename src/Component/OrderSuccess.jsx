import React,{useEffect,useState} from "react";

function OrderSuccess(){

    const [order, setOrder] = useState([]);
    const clear=localStorage.removeItem('cart');

    // window.location.reload();

    useEffect(() => {

        const getOrder = JSON.parse(localStorage.getItem("order"));
        setOrder(getOrder,);


      }, []);


    setTimeout(() => window.location.reload(), 4000);


      


    return(
        <>
        <div className="text-center">
        <h1>Thank You for Choosing us</h1>
        <h4>Your Order Id is {order.id}</h4>
        <h4>Status:{order.status}</h4>
        <h4>create_time
:{order.create_time
}</h4>



  

        </div>


        
        </>
    );
} 




export default OrderSuccess;

