import React, {useState} from 'react';
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";


const PaypalCheckoutButton = (props) => {
    const {product} = props;
//   const refresh = () => window.location.reload(true)


    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleApprove = (orderId) => {
        setPaidFor(true);
    }

    if(paidFor){
        alert("Thank You for purchasing");
    }

    if(error){
        // alert("something went wrong");
        navigate(`/failorder`);
    }


  return (
    <PayPalScriptProvider>
        <PayPalButtons 
            onClick={(data, actions) => {
                const hasAlreadyBoughtCourse = false;
                if(hasAlreadyBoughtCourse){
                    // alert("You Already bough this");

                    setError("You Already bough this");
                    return actions.reject();
                }else{
                    return actions.resolve();
                }
            }}
            createOrder = {(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price,
                            },
                        },
                    ],
                });
            }}
            onApprove = { async (data, action) => {
                const order = await action.order.capture();
                localStorage.setItem("order", JSON.stringify(order));
                console.log("order", order);
                // const getOrder = JSON.parse(localStorage.getItem("order"));
                handleApprove(data.orderID);
                navigate(`/ordersuccess`);
            }}
            onCancel={() => {}}
            onError={(err) => {
                setError(err);
                console.log("PayPal Checkout onError", err);
            }}
        />
    </PayPalScriptProvider>
  )
}

export default PaypalCheckoutButton