import styled from "styled-components"
import CardCart from "./Card";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";


const ShoppingCart = ()=>{

    const items = useSelector(e=>e.shoppingCart);

    const [total,setTotal] = useState(0)

    useEffect(()=>{
        let num = 0;
        items.forEach(e => {
            let price = e.price
            if(e.quantity)price=price*e.quantity
            num = num + price
        });
        setTotal(num)
    },[items])

    return(
        <>
            <Cart>
                <div>
                    <header><h1 id="titulo">Carrito</h1></header>
                </div>
                <div id="cardContainer">
                    {
                        items.map(e=><CardCart key={e._id} title={e.name} img={e.img} id={e._id}  cantidad={e.quantity}/>)
                    }
                    
                </div>
                <div id="totalSection">
                    <div><span>Total</span></div>
                    <div><span>${total}</span></div>
                </div>
            </Cart>
        </>
    )
   
};

export default ShoppingCart;


const Cart = styled.div`
    width: 512px;
    min-height: 100%;
    background-color: #f5f5f5;
    padding: 48px;
    #titulo{
        font-size: 25px;
        font-weight: 500;
    }
    #cardContainer{
        margin: 20px 0 0 0;
    }
    #totalSection{
        border-top: 1px solid #34333371;
        padding-top: 5px;
        display: flex;
        &>:nth-child(1){
            width: 100%;
            >span{
                font-size: 18px;
            }
        }
        &>:nth-child(2){
            min-width: 100px;
            text-align: center;
            >span{
                font-size: 17px;
            }
        }

    }
`;
