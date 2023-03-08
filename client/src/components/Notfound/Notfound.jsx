import style from "./Notfound.module.css"
import cargando from "../../assets/cargando.gif"
import logo from "../../assets/compu-shop_logo.png"
import { Link } from "react-router-dom"
import casa from "../../assets/casa.png"
import herramienta from "../../assets/herramienta.png"

const Notfound = () => {

    return(
        <div className={style.container}>
            <img className={style.herramienta} src={herramienta}></img>
            <p className={style.cargando}>PAGINA NO ENCONTRADA :C</p>
            <p className={style.espera}>La URL ingresada no es valida.</p>
            <Link to="/home">
                <img className={style.casa} src={casa}></img>
            </Link>
        </div>
    )
}

export default Notfound;