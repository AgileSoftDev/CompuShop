import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css'

const Card = ({ id, title, image, precio }) => {
    const state = true
    return (
      <Link to={`/producto/${id}`} id={ state ? style.Card : style.Card2}>

            <div className={style.image}>
                    <img  src={image} alt={title} placeholder={title} />
            </div>
            <div className={style.information}>
                <div>
                    <h3 className={style.title}>{title}</h3>
                </div>
                <div>
                    <h3 className={style.price}>$ {precio}</h3>
                </div>
                <button>SUMAR AL CARRITO</button>
            </div>

      </Link>
    );
};

export default Card