import style from "./Card_arma_tu_pc.module.css"
// import coreI7 from "../../assets/construye/temporal_items/corei7.jpg"
import check_green_icon from "../../assets/construye/general_icons/check-green-icon.svg"
import admiracionIcon from "../../assets/construye/general_icons/admiracion_icon.svg"
import { useSelector } from "react-redux";
import { getCurrentComponent } from "../../utils";


const Card_arma_tu_pc = (props) =>{

    const picksArmaTuPc = useSelector(e=>e.build_pc)
    const currentStep = useSelector(e=>e.step_build_pc)


    const cleanTitle =(title) =>{
        if (title) {
            let titleCleaned = title;
            if (titleCleaned?.length < 75) return titleCleaned
            else return titleCleaned.substring(0, 75) + "..."  
        }
           
    }


    return(
        <div id={style.Card_arma_tu_pc} onClick={props.stock<=0?undefined:props.onClick} key={props.key} className={props.stock<=0?style.noStock:picksArmaTuPc[getCurrentComponent[currentStep]]?._id=== props.id ?style.selected:undefined} >

                <div>
                    <img src={props.img} alt="" />
                </div>

                <div>
                    <legend>
                        <h1>{cleanTitle(props.title)}</h1>
                    </legend>
                    <h3>$ {props.price}</h3>

                    <div>
                        <img src={check_green_icon} alt="" />
                        <p>Compatible</p>
                    </div>
                </div>
                <img src={admiracionIcon} alt="!" />
        </div>
    )
};

export default Card_arma_tu_pc