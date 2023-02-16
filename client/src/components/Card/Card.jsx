import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css'
import { useSelector } from 'react-redux';



const Card = ({ id, title, image, precio }) => {

    const stateViewCard = useSelector(e=>e.stateViewCard)


    if(stateViewCard){
        return (
            <Link to={`/producto/${id}`} id={style.Card }>
                  <div>
                      <div >
                           <img  src={image} alt={title} />
                      </div>
                      <h1 >{title}</h1>
                  </div>
                  <div>
                      <h1 >$ {precio}</h1>
                      <button>SUMAR AL CARRITO</button>
                  </div>
      
            </Link>
          );
    }else{
        return (
            <Link to={`/producto/${id}`} id={style.Card2 }>
                  <div>
                           <img  src={image} alt={title} />
                  </div>
                  <div>
                      <h2 >{title}</h2>
                      <h1 >$ {precio}</h1>
                      <button>SUMAR AL CARRITO</button>
                  </div>
      
            </Link>
          );
    }
   
};

export default Card