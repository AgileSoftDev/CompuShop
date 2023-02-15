import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css'

const Card = ({ id, title, image, precio }) => {
    return (
      <Link to={`/producto/${id}`} id={style.Card}>
            <div className={style.card}>
                <div className={style.heading}>
                    <div id={style.imgContainer}>
                        <img  src={image} alt="img referencia" />
                </div>
           </div>
                <div className={style.title}>
                    <h3 className='title'>{title}</h3>
                    <h4>$ {precio}</h4>
                    <button>Sumar al carrito</button>
            </div>

            </div>
      </Link>
    );
};

export default Card