import style from "./CardShoppingCart.module.css"
import trash_can from "../../../assets/icons/trash_can.svg"
import {useDispatch} from "react-redux"
import {removeItemCart, decrementCart, incrementCart} from "../../../redux/actions/actions"

const CardShoppingCart= (props) =>{
    const dispatch = useDispatch()
    return(
        <div id={style.CardShoppingCart}>
            <div><img src={props.img} alt="Img de referencia del producto" /></div>
            <h1>{props.title}</h1>
            <div>
                <button onClick={()=>dispatch(incrementCart(props.id))}>+</button>
                <p>{props.cantidad}</p>
                <button onClick={()=>dispatch(decrementCart(props.id))}>-</button>
            </div>
            <h2>${props.price}</h2>
            <div id={style.trashIcon}><img src={trash_can} alt="Trash Can" /></div>
        </div>
    )
};

export default CardShoppingCart;