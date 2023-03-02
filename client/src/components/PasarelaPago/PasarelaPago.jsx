import React, { useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {  PayPalButtons } from "@paypal/react-paypal-js";



const Paypalboton= ()=>{
    const pagoCarrito= useSelector(e=>e.shoppingCart)
    const [price, setPrice ] = useState(0);
        useEffect(()=>{
        let num = 0;
        pagoCarrito.forEach(e => {
            num = num + e.price
        });
        setPrice(num)
    },[])
    const createOrder = (data, actions) => {
        // Order is created on the server and the order id is returned
        return actions.order.create({
            purchase_units:[
                {
                    amount: {
                        value: price,
                    }

            }

            ]
        });
         };
         const onApprove = (data, actions) => {
        
            // Order is captured on the server
            return actions.order.capture();
             };
    return (
        <div>
        <PayPalButtons style={{ layout: "horizontal" }} 
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) =>onApprove(data, actions)}/>
        </div>
    )
}

export default Paypalboton