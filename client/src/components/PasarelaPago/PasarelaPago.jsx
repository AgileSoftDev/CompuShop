
import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom"
import {useSelector} from "react-redux";

const PayPalButton = window?.paypal?.Buttons.driver("react", { React, ReactDOM });

export default function PasarelaPago() {

    const pagoCarrito = useSelector(e=>e.shoppingCart)

    useEffect(()=>{
        let num = 0;
        pagoCarrito.forEach(e => {
            num = num + e.price
        });

        setPrice(num)

    },[])


    const [price, setPrice ] = useState(0);
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
            <div className="Paypal">
           
                    <PayPalButton

                
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) =>onApprove(data, actions)}
                    />
        
        </div>
        );
        
        
    }
    
