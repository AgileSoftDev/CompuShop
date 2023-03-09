import style from "./DetailsCardMisCompras.module.css"
import succes  from "../../assets_mis_compras/success-svgrepo-com.svg"
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import pending from "../../../../assets/icons/yellow_clock.png";

const DetailsCardMisCompras = (props)=>{
    const msPDay = 24 * 60 * 60 * 1000;
    const now = new Date().getTime();
    const date = format(new Date(props.fecha), "EEEE d 'de' MMMM 'de' y, HH:mm : ss", {locale: esLocale});
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
                        {(now-props.fecha)/msPDay>=1?(<label id={style.entregado} ><img src={succes} alt="succes" /><span>Entregado</span></label>):
                            (<label id={style.pendiente} ><img src={pending} alt="succes" /><span>Pendiente</span></label>)
                        }                                                
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
                            <span className={style.values}>{date}</span>
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
                    <label className={style.directionPropiedades}><span>Ciudad: </span><span className={style.values} >{props.direction.city}</span></label>
                    <label className={style.directionPropiedades}><span>Dirección: </span><span className={style.values}>{props.direction.direction}</span></label>
                    <label className={style.directionPropiedades}><span>Referencias: </span><span className={style.values}>{props.direction.references}</span></label>
                </div>
                <div id={style.productosContainer}>
                    <div>
                        <label className={style.atributtes}>
                            <span>Productos: </span>
                        </label>
                        <label>
                            <span className={style.atributtes}>Montol total:</span>
                            <span className={style.values}>${props.total}</span>
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
                                                                        <span>${e.price}</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div id={style.thirdDiv} className={style.contenedores}>  
                                                                    <label>
                                                                        <span>Precio Total: </span>
                                                                        <span>${e.price*e.quantity}</span>
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