
import React, { useState} from "react";
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function PasarelaPago() {
    //const [price, setPrice ] = useState(0);
    const createOrder = (data, actions) => {
        // Order is created on the server and the order id is returned
        return actions.order.create({
            purchase_units:[
                {
                    amount: {
                        value: "0.01"
                    }

            }

            ]
        });
         };
      const onApprove = (data, actions) => {
         // Order is captured on the server
         return actions.order.capture();
          };
   //  function handleChange(e){
       // setPrice(e.target.value)
    // }
        return (
            <div className="Paypal">
                
           
        <PayPalButton

       
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) =>onApprove(data, actions)}
        />
        </div>
        );
        
        
    }
    /*
 <h1>El monto es {price }</h1>
            <input type="text" onChange={handleChange} value={price}> </input> */