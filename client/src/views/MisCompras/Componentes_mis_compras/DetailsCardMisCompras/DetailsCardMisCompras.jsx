import style from "./DetailsCardMisCompras.module.css"

const DetailsCardMisCompras = (props)=>{
    return(
        <div id={style.DetallesContainer}>
            <div id={style.topDetallesContainer}>
                <div id={style.aNombreDeContainer}>
                    <label id={style.aNombreDe}>
                        <span>A nombre de: {props.name}</span>
                    </label>
                </div>
                <label>
                    <span>{props.phone}</span>
                </label>
                <p onClick={()=>props.setOrderFocus({})} id={style.xToClose}>X</p>
            </div>
            <div id={style.mainDetallesCompras}>
                <div>
                    <div id={style.fechaHoraContainer}>
                        <label>
                            <span className={style.generalPropiedades}>Compra y fecha de la compra :  </span>
                            <span> domingo 5 de marzo de 2023, 19:36:35</span>
                        </label>
                    </div>
                </div>
                <div>
                    <div id={style.montoTotal}>
                        <label>
                            <span>Montol total:</span>
                            <span>$4597</span>
                        </label>
                    </div>
                </div>
                <div>
                    <label>
                            <span className={style.generalPropiedades}> Lugar de entrega: </span>
                    </label>
                </div>
                <div id={style.directionPropiedadesContainer}>
                    <label className={style.directionPropiedades}><span>Ciudad: </span><span>Trujillo</span></label>
                    <label className={style.directionPropiedades}><span>Dirección: </span><span>Jr. pizza 455</span></label>
                    <label className={style.directionPropiedades}><span>Referencias: </span><span>Al lado del parque</span></label>
                </div>
                <div id={style.productosContainer}>
                    <div>
                        <label>
                            <span>Productos: </span>
                        </label>
                    </div>
                    <div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default DetailsCardMisCompras;