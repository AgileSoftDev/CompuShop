import style from "./Construye.module.css";
import {useHistory} from "react-router-dom"
import cpu from "../../assets/construye/icons_componentes/cpu.png";
import motherBoard from "../../assets/construye/icons_componentes/mother.png";
import cooler from "../../assets/construye/icons_componentes/cooler.png";
import ram from "../../assets/construye/icons_componentes/ram.png";
import gpu from "../../assets/construye/icons_componentes/gpu.png";
import storaged from "../../assets/construye/icons_componentes/storaged.png";
import psu from "../../assets/construye/icons_componentes/psu.png";
import caseIcon from "../../assets/construye/icons_componentes/case.png";
import screen from "../../assets/construye/icons_componentes/screen.png";
import peripherals from "../../assets/construye/icons_componentes/perifericos.png";
import cpu_active from "../../assets/construye/icons_componentes_active/cpu_active.png";
import motherBoard_active from "../../assets/construye/icons_componentes_active/mother_active.png";
import cooler_active from "../../assets/construye/icons_componentes_active/cooler_active.png";
import ram_active from "../../assets/construye/icons_componentes_active/ram_active.png";
import gpu_active from "../../assets/construye/icons_componentes_active/gpu_active.png";
import storaged_active from "../../assets/construye/icons_componentes_active/storaged_active.png";
import psu_active from "../../assets/construye/icons_componentes_active/psu_active.png";
import caseIcon_active from "../../assets/construye/icons_componentes_active/case_active.png";
import screen_active from "../../assets/construye/icons_componentes_active/screen_active.png";
import peripherals_active from "../../assets/construye/icons_componentes_active/periferico_active.png";
import { useState } from "react";



const Construye = () =>{
    const history = useHistory();
    const [componet, setComponent] = useState({cpu:true})


    return(
        <div id={style.ContainerConstruye}>
            <div>

                <div>
                    <h1>Elige tu procesador</h1>
                    <p>Tu procesador es la pieza central del rendimiento de los programas. Para saber si un procesador es potente lo que tenés que medir es la frecuencia, el ancho de bus, la memoria caché y los núcleos e hilos de procesamiento.</p> 
                </div>

                <div id={style.containerConstruye_main}>
                    <div>
                        <ul>
                            <li><img className={!componet.cpu?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso1');setComponent({cpu:true})}} src={componet.cpu?cpu_active: cpu} alt="cpu" /></li>
                            <li><img className={!componet.cooler?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso3'); setComponent({cooler:true})}} src={componet.cooler?cooler_active:cooler} alt="cooler" /></li>
                            <li><img className={!componet.gpu?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso5'); setComponent({gpu:true})}} src={componet.gpu?gpu_active:gpu} alt="gpu" /></li>
                            <li><img className={!componet.psu?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso7'); setComponent({psu:true})}} src={componet.psu?psu_active:psu} alt="psu" /></li>
                            <li><img className={!componet.screen?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso9'); setComponent({screen:true})}}  src={componet.screen?screen_active:screen} alt="screen" /></li>
                            <li><img className={!componet.motherBoard?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso2'); setComponent({motherBoard:true})}}  src={componet.motherBoard?motherBoard_active:motherBoard} alt="motherBoard" /></li>
                            <li><img className={!componet.ram?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso4'); setComponent({ram:true})}}  src={componet.ram?ram_active:ram} alt="ram" /></li>
                            <li><img className={!componet.storaged?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso6'); setComponent({storaged:true})}}  src={componet.storaged?storaged_active:storaged} alt="storaged" /></li>
                            <li><img className={!componet.caseIcon?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso8'); setComponent({caseIcon:true})}}  src={componet.caseIcon?caseIcon_active:caseIcon} alt="caseIcon" /></li>
                            <li><img className={!componet.peripherals?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso10'); setComponent({peripherals:true})}} src={componet.peripherals?peripherals_active:peripherals} alt="peripherals" /></li>
                        </ul>
                    </div>
                    <div></div>
                </div> 

            </div>
        </div>
    )
};

export default Construye;