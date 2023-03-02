import style from "./CardShoppingCart.module.css"
import trash_can from "../../../assets/icons/trash_can.svg"
import {useDispatch ,useSelector} from "react-redux"
import {removeItemCart, decrementCart, incrementCart} from "../../../redux/actions/actions"
import { useEffect, useState } from "react";

const CardShoppingCart= (props) =>{
    const dispatch = useDispatch()

    const itmesToBuy = useSelector(e=>e.shoppingCart)

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
        <div id={style.CardShoppingCart}>
            <div><img src={props.img} alt="Img de referencia del producto" /></div>
            <h1>{props.title}</h1>
            <div>
                <button onClick={()=>dispatch(decrementCart(props.id))}>-</button>
                <p>{props.cantidad}</p>
                <button onClick={()=>dispatch(incrementCart(props.id))}>+</button>
            </div>
            <h2>${price}</h2>
            <div ref={props.refToTrash} className="trash" onClick={()=>dispatch(removeItemCart(props.id))} id={style.trashIcon}><img src={trash_can} alt="Trash Can" /></div>
        </div>
    )
};

export default CardShoppingCart;