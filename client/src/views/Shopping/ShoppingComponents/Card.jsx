import styled from "styled-components";
import {useDispatch ,useSelector} from "react-redux";
// import trashCan from "../../../assets/icons/X-icon.svg";
import { useEffect, useState } from "react";
import {removeItemCart, decrementCart, incrementCart} from "../../../redux/actions/actions"






const CardCart = (props)=>{
    const itmesToBuy = useSelector(e=>e.shoppingCart)
    const dispatch = useDispatch()


    const [price, setPrice] = useState(0)

    useEffect(()=>{
        itmesToBuy.forEach(element => {
            if (element._id === props.id) {
                let precio = element.price;
                precio = precio * element.quantity
                setPrice (precio)
            }
        });
    },[itmesToBuy])

    return(
        <div>
            <Label>
                <FirstDiv>
                    <div><img src={props.img} alt="" /></div>
                    <div><h2>{props.title}</h2></div>
                </FirstDiv>
                <SecondDiv>
                    <div>
                        <button onClick={()=>dispatch(decrementCart(props.id))}><span>-</span></button>
                        <span>{props.cantidad}</span>
                        <button onClick={()=>dispatch(incrementCart(props.id))}><span>+</span></button>
                    </div>
                </SecondDiv>
                <ThirdDiv>  
                    <label><span>${price}</span></label>
                    <i onClick={()=>dispatch(removeItemCart(props.id))}>
                        <p>X</p>
                    </i>
                </ThirdDiv>                
            </Label>
        </div>
    )
};

export default CardCart;

const Label = styled.label`
    display: flex;
    color: #000000bc;
    border-top: 1px solid #34333371;
    padding: 20px 0;
    position: relative;
    >div{
        display: flex;
        align-items: center;
        justify-content: center;
    };
`;

const FirstDiv = styled.div`
flex-direction: column;
width: 216px;
flex-shrink: 0;
padding-right: 10px;
    &>:nth-child(1){
        width: 100px;
        padding-bottom: 5px;
        >img{
            object-fit: contain;
            max-width: 100%;
        }
    }
    
    &>:nth-child(2){
        >h2{
            font-size: 16px;
            font-weight: 400;
        }
    }
`;

const SecondDiv = styled.div`
    padding-right: 10px;
    width: 100px;
    flex-shrink: 0;
    >div{
        >button{
            padding: 5px;
            border-radius: 4px;
            border: 1px solid #34333371;
            width: 20px;
            height: 25px;
            cursor: pointer;
            >span{
                margin: auto;
            }
        }
        >span{
            margin: 0 10px;
        }
    }
    
`;

const ThirdDiv = styled.div`
    width: 100px;
    flex-shrink: 0;
    >i{
        cursor: pointer;
        position: absolute;
        top: 3px;
        right: 5px;
        >p{
            transform: rotate(-6deg);
        }
    }
`;
