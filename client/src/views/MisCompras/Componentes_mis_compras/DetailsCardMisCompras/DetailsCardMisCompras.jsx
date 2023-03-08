import style from "./DetailsCardMisCompras.module.css"
import succes  from "../../assets_mis_compras/success-svgrepo-com.svg"

const DetailsCardMisCompras = (props)=>{

    console.log(props.ordenes);
    return(
        <div id={style.DetallesContainer}>
            <div id={style.topDetallesContainer}>
                <div id={style.aNombreDeContainer}>
                    <label id={style.aNombreDe}>
                        <span className={style.atributtes} >A nombre de:</span>
                        <span className={style.values}>{props.name}</span>
                    </label>
                </div>
                <label id={style.compraStatus}>
                    <img src={succes} alt="succes" /><span>Entregado</span>
                </label>
                <p onClick={()=>props.setOrderFocus({})} id={style.xToClose}>x</p>
            </div>
            <div id={style.mainDetallesCompras}>
                <div>
                <div id={style.mainTop}>
                <div>
                    <div id={style.fechaHoraContainer}>
                        <label>
                            <span className={style.atributtes}>Compra y fecha de la compra:</span>
                            <span className={style.values}>domingo 5 de marzo de 2023, 19:36:35</span>
                        </label>
                    </div>
                </div>               
                <div>
                    <div id={style.montoTotal}>
                        <label>
                            <span className={style.atributtes}>Numero de Contacto:</span>
                            <span className={style.values}>{props.phone}</span>
                        </label>
                    </div>
                </div>
                <div>
                    <label>
                            <span className={style.atributtes}> Lugar de entrega: </span>
                    </label>
                </div>
                <div id={style.directionPropiedadesContainer}>
                    <label className={style.directionPropiedades}><span>Ciudad: </span><span className={style.values} >Trujillo</span></label>
                    <label className={style.directionPropiedades}><span>Dirección: </span><span className={style.values}>Jr. pizza 455</span></label>
                    <label className={style.directionPropiedades}><span>Referencias: </span><span className={style.values}>Al lado del parque</span></label>
                </div>
                <div id={style.productosContainer}>
                    <div>
                        <label className={style.atributtes}>
                            <span>Productos: </span>
                        </label>
                        <label>
                            <span className={style.atributtes}>Montol total:</span>
                            <span className={style.values}>$4597</span>
                        </label>
                    </div>
                </div>
                    
                    </div>
                        <div id={style.cardsProductosOnDetailsContainer}>
                            {
                                props.ordenes.map(e=>(<div id={style.cardsProductosOnDetails}>
                                                    <div>
                                                        <label id={style.CardContainer}>
                                                            <div id={style.firstDiv} className={style.contenedores}>
                                                                <div className={style.imgContainer}><img className={style.img} src={e.img} alt="" /></div>
                                                                <div className={style.titleContainer}><h2 id={style.titleCard}>{e.name}</h2></div>
                                                            </div>
                                                            <div id={style.secondDiv} className={style.contenedores}>
                                                                <div className={style.divTwo}>
                                                                    <label>
                                                                        <span>Unidades: </span>
                                                                        <span>{e.quantity}</span>
                                                                    </label>
                                                                    <label>
                                                                        <span>Precio unitario: </span>
                                                                        <span>{e.price}</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div id={style.thirdDiv} className={style.contenedores}>  
                                                                    <label>
                                                                        <span>Precio Total: </span>
                                                                        <span>{e.price*e.quantity}</span>
                                                                    </label>
                                                            </div>                
                                                        </label>
                                                    </div>
                                                      </div>))
                            }
                                    <div>
                                        <label id={style.thanks}><span>Gracias por su compra.</span></label>
                                    </div>
                        </div>
                    </div>
            </div>
        </div>
    )
};
export default DetailsCardMisCompras;