import style from "./Card_arma_tu_pc.module.css"
import coreI7 from "../../assets/construye/temporal_items/corei7.jpg"
import check_green_icon from "../../assets/construye/general_icons/check-green-icon.svg"
import admiracionIcon from "../../assets/construye/general_icons/admiracion_icon.svg"

const Card_arma_tu_pc = () =>{
    return(
        <div id={style.Card_arma_tu_pc} >

                <div>
                    <img src={coreI7} alt="" />
                </div>

                <div>
                    <h1>Procesador Intel Core i7 10700F 4.8GHz Turbo Socket 1200 Comet Lake</h1>
                    <h3>$ 11.450</h3>

                    <div>
                        <img src={check_green_icon} alt="" />
                        <p>Compatible</p>
                    </div>
                </div>
                <img src={admiracionIcon} alt="" />
        </div>
    )
};

export default Card_arma_tu_pc