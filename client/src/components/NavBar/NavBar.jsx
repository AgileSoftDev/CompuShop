import style from "./NavBar.module.css";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <div id={style.NavBarContainer}>
            <ul>
                <Link to={"productos"} ><li className={style.navbar__link} >PRODUCTOS</li> </Link>
                <Link to={"construye"} ><li className={style.navbar__link} >ARMA TU PC</li> </Link>
                <Link to={"categorías"} ><li className={style.navbar__link} >CATEGORÍAS</li></Link>
                <Link to={"marcas"} ><li className={style.navbar__link} >MARCAS</li></Link>
            </ul>
        </div>
    )
};


export default NavBar;