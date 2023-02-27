import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';



const Card = ({ id, name, img, price, component }) => {

    const stateViewCard = useSelector(e=>e.stateViewCard)
    const dispatch = useDispatch()

    const cleanName =(name) =>{
        if (name) {
            let nameCleaned = name;
            if (nameCleaned.length < 65) return nameCleaned
            else return nameCleaned.substring(0, 65) + "..." 
        }
    }

    const cleanName2 = (name) =>{
        if (name) {
            let nameCleaned = name;
            if (nameCleaned.length < 128) return nameCleaned
            else return nameCleaned.substring(0, 128) + "..." 
        }
      
    }


    if(stateViewCard){
        return (
            <div  id={style.Card }>
                  <div>
                      <div >
                           <img  src={img} alt={'Imagen de ' + name} />
                      </div>
                      <Link to={`/producto/${id}`} >{cleanName(name)}</Link>
                  </div>
                  <div>
                      <h1 >$ {price}</h1>
                      <button onClick={()=>dispatch(addToCart(component))}>SUMAR AL CARRITO</button>
                  </div>
      
            </div>
          );
    }else{
        return (
            <div id={style.Card2 }>
                  <div>
                    <img  src={img} alt={name} />
                  </div>
                  <div>
                      <Link to={`/producto/${id}`} >{cleanName2(name)}</Link>
                      <h1 >$ {price}</h1>
                      <button onClick={()=>dispatch(addToCart(component))}>SUMAR AL CARRITO</button>
                  </div>
      
            </div>
          );
    }
   
};

export default Card