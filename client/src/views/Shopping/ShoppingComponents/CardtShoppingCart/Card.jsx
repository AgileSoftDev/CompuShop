import {useDispatch ,useSelector} from "react-redux";
import { useEffect, useState, useMemo } from "react";
import {removeItemCart, decrementCart, incrementCart} from "../../../../redux/actions/actions"
import style from "./Card.module.css"






const CardCart = (props)=>{
    const itmesToBuy = useSelector(e=>e.shoppingCart)
    const dispatch = useDispatch()


    const currentProduct = itmesToBuy.find(e=> e._id === props.id)


    const price = useMemo(() => {
        console.log(currentProduct);
        return currentProduct.price * currentProduct.quantity
      }, [currentProduct]);

      console.log(price);
    return(
        <div>
            <label id={style.CardContainer}>
                <div id={style.firstDiv} className={style.contenedores}>
                    <div className={style.imgContainer}><img className={style.img} src={props.img} alt="" /></div>
                    <div className={style.titleContainer}><h2 id={style.titleCard}>{props.title}</h2></div>
                </div>
                <div id={style.secondDiv} className={style.contenedores}>
                    <div className={style.divTwo}>
                        <button className={style.buttonsControllers} onClick={()=>dispatch(decrementCart(props.id))}><span>-</span></button>
                        <span id={style.spanTwo}>{props.cantidad}</span>
                        <button className={style.buttonsControllers}  onClick={()=>dispatch(incrementCart(props.id))}><span>+</span></button>
                    </div>
                </div>
                <div id={style.thirdDiv} className={style.contenedores}>  
                    <label><span>${price}</span></label>
                    <i id={style.xIcon} onClick={()=>dispatch(removeItemCart(props.id))}>
                        <p id={style.xP}>X</p>
                    </i>
                </div>                
            </label>
        </div>
    )
};

export default CardCart;




