import style from "./Nosotros.module.css"
import negro from "../../assets/Nosotros/negro.png"
import mateo from "../../assets/Nosotros/mateo.png"
import bruno from "../../assets/Nosotros/Bruno.png"
import yorliana from "../../assets/Nosotros/yorliana.png"
import enrique from "../../assets/Nosotros/enrique.png"
import kevin from "../../assets/Nosotros/kevin.png"
import cesar from "../../assets/Nosotros/cesar.png"
import github from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"

const Nosotros = ()=>{
    return(
        <div className={style.container}>
            <div className={style.textos}>
                <h1>SOBRE NOSOTROS</h1>
                <p>Somos una empresa con mas de 10 años de experiencia en el rubro de la informatica, brindando soluciones en armado de equipos y venta de insumos de exclenete     calidad.
                    En busqueda de la excelencia permanente en nuestra empresa, contamos con un equipo de profesionales capacitados para brindarle nuestro mejor servicio al cliente.</p>
                <h1>NUESTRO EQUIPO</h1>
            </div>
            <div className={style.fotos}>

            <div className={style.persona}>
                    <img src={cesar} alt="cesar"></img>
                    <h5>Cesar LLajaruna</h5>
                    <p>Front-end developer</p>
                    <div className={style.icons}>
                        <a href="https://github.com/Ctroubles" target="_blank"><img src={github} alt="github"></img></a>
                        <a href="https://www.linkedin.com/" target="_blank"><img src={linkedin} alt="linkedin"></img></a>
                    </div>
                </div>

                <div className={style.persona}>
                    <img src={mateo} alt="mateo"></img>
                    <h5>Mateo Carlos</h5>
                    <p>Front-end developer</p>
                    <div className={style.icons}>
                        <a href="https://github.com/mateecarlos" target="_blank"><img src={github} alt="github"></img></a>
                        <a href="https://www.linkedin.com/in/mateo-carlos-89b50021b/" target="_blank"><img src={linkedin} alt="linkedin"></img></a>
                    </div>
                </div>

                <div className={style.persona}>
                    <img src={bruno} alt="bruno"></img>
                    <h5>Bruno Fernandez</h5>
                    <p>Front-end developer</p>
                    <div className={style.icons}>
                        <a href="https://github.com/brunofnz" target="_blank"><img src={github} alt="github"></img></a>
                        <a href="https://www.linkedin.com/in/bruno-fernandez-462bba1b8/" target="_blank"><img src={linkedin} alt="linkedin"></img></a>
                    </div>
                </div>

                <div className={style.persona}>
                    <img src={yorliana} alt="yorliana"></img>
                    <h5>Yorliana Muñoz</h5>
                    <p>Front-end developer</p>
                    <div className={style.icons}>
                        <a href="https://github.com/yorliana" target="_blank"><img src={github} alt="github"></img></a>
                        <a href="https://www.linkedin.com/in/yorliana-mu%C3%B1oz-02bb4921a/" target="_blank"><img src={linkedin} alt="linkedin"></img></a>
                    </div>
                </div>
            </div>

            <div className={style.fotos2}>
            <div className={style.persona}>
                    <img src={enrique} alt="enrique"></img>
                    <h5>Enrique Geraldino</h5>
                    <p>Back-end developer</p>
                    <div className={style.icons}>
                        <a href="https://github.com/Geraldino96" target="_blank"><img src={github} alt="github"></img></a>
                        <a href="https://www.linkedin.com/in/geraldino/" target="_blank"><img src={linkedin} alt="linkedin"></img></a>
                    </div>
                </div>

                <div className={style.persona}>
                    <img src={negro} alt="negro"></img>
                    <h5>Ivan Bielli</h5>
                    <p>Back-end developer</p>
                    <div className={style.icons}>
                        <a href="https://github.com/GordoEnredadera" target="_blank"><img src={github} alt="github"></img></a>
                        <a href="https://www.linkedin.com/in/geraldino/" target="_blank"><img src={linkedin} alt="linkedin"></img></a>
                    </div>
                </div>

                <div className={style.persona}>
                    <img src={kevin} alt="kevin"></img>
                    <h5>Kevin correa</h5>
                    <p>Back-end developer</p>
                    <div className={style.icons}>
                        <a href="https://github.com/kan4crooo" target="_blank"><img src={github} alt="github"></img></a>
                        <a href="https://www.linkedin.com/in/kevin-rojas-855a33195/" target="_blank"><img src={linkedin} alt="linkedin"></img></a>
                    </div>
                </div>

                <div className={style.persona}>
                    <img src={negro} alt="negro"></img>
                    <h5>Jair Olguín</h5>
                    <p>Back-end developer</p>
                    <div className={style.icons}>
                        <a href="https://github.com/JairOlgL" target="_blank"><img src={github} alt="github"></img></a>
                        <a href="https://www.linkedin.com/in/jair-olgu%C3%ADn/" target="_blank"><img src={linkedin} alt="linkedin"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Nosotros;