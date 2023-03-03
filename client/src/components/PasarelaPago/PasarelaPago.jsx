import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useAuth0 } from '@auth0/auth0-react'


const Paypalboton = () => {
    const pagoCarrito = useSelector(e => e.shoppingCart)
    const { user } = useAuth0();
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [price, setPrice] = useState(0);
    useEffect(async () => {
        let num = 0;
        pagoCarrito.forEach(e => {
            num = num + e.price
        });
        setPrice(num)
    }, [])

    const send = async() => {
        const mailer = await fetch('http://localhost:3001/mailer', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application-json"
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                fromMail: 'compushoppf@gmail.com',
                toMail: email,
                name: name
            })
        })
        console.log(mailer)
    }

    const createOrder = (data, actions) => {
        // Order is created on the server and the order id is returned
        send()
        return actions.order.create({
            purchase_units: [
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
                onApprove={(data, actions) => onApprove(data, actions)} />
        </div>
    )
}

export default Paypalboton