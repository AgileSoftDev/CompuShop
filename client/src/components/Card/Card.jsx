import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css'

const Card = ({ id, title, image, precio }) => {
    const state = true
    return (
      <Link to={`/producto/${id}`} id={ state ? style.Card : style.Card2}>
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
};

export default Card