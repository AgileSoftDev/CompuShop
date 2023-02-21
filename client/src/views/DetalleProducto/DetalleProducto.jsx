import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { getDetailComponentById } from '../../redux/reducer/reducer'
import style from './DetalleProducto.module.css'

const rebaja = (price) => {
    return price - (price * 0.35)
} 

const DetalleProducto = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const { detailComponent } = useSelector(store => store)
    
    console.log(`🚀 ~ file: DetalleProducto.jsx:8 ~ DetalleProducto ~ id:`, id)
    
    useEffect(() => {
      dispatch(getDetailComponentById(id))
    }, [])

    useEffect(() => {
      console.log(`🚀 ~ file: DetalleProducto.jsx:20 ~ DetalleProducto ~ detailComponent:`, detailComponent)
    }, [detailComponent])
    
    return (
    <div className={style.contenedor}>
        <div className={style.image}>
            <img src={detailComponent.img} alt="" />
        </div>
        <main className={style.contenido}>
            <div className={style.header}>
                <h3 className={style.nombreProducto}>{detailComponent.name}</h3>
                <h4 className={style.idProducto}>ID: {detailComponent._id}</h4>
            </div>
            <div className={style.contenedorPrecios}>
                <div className={style.contenedorPrecioRebaja}>
                    {/* <p>Precio de rebaja</p>  */}
                    <h3>${detailComponent.price}</h3>
                </div>
                <div className={style.contenedorPrecioEspecial}>
                    <p>PRECIO ESPECIAL</p>
                    <h3>${rebaja(detailComponent.price)}</h3>
                </div>
                {/* <div className={style.contenedorPrecioEspecial}>
                    <p>VER CUOTAS</p>
                    <h3>$242.473</h3>
                </div> */}
            </div>
            <div className={style.listaInfo}>
                <ul>
                    <li>Garantía - 12 meses</li>
                    <li>Stock disponible</li>
                    <li>Envíos a todo el país</li>
                </ul>
            </div>
            <button>SUMAR AL CARRITO</button>   
           
        </main>
        <div className={style.contenedorInfo2}>
            <div className={style.productosRelacionados}>
               
            </div>
        </div>
            
    </div>
  )
}

export default DetalleProducto