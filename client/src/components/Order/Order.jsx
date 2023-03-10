import style from "./Order.module.css";
import icon_horizontal_order from "../../assets/icons/horizontal_order_icon.svg";
import icon_vertical_order from "../../assets/icons/vertical_order_icon.svg"
import {useDispatch ,useSelector} from "react-redux"
import {orderBy, setStateViewCard} from "../../redux/actions/actions";


const Order = ()=> {
    const dispatch = useDispatch()

    const stateViewCard = useSelector(e=>e.stateViewCard);
    const categoryPick = useSelector(e=>e.categoryPick);


    return(
        <div className={style.container}>
            <select 
                className={style.select} 
                onChange={e => dispatch(orderBy(e.target.value,categoryPick))}
            >
                <option hidden>Ordenar por</option>
                <option value="all">Todos</option>
                <option value='asc' >Mayor precio</option>
                <option value='desc'>Menor precio</option>
            </select>
            <div id={style.iconOrder} onClick={()=>{dispatch(setStateViewCard());window.localStorage.setItem('viewCarStyle', String(!stateViewCard))}}>
                <img src={stateViewCard?icon_horizontal_order:icon_vertical_order} alt="icono del tipo de orden" />
            </div>
        </div>
    )
}

export default Order;