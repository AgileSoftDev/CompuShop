import style from "./NavBar.module.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom"

const NavBar = () =>{
    
    const {pathname} = useLocation()

    return(
        <div id={style.NavBarContainer}>
            <ul>
                <Link to={"/productos"} ><li id={pathname==="/productos"? style.active:undefined} >PRODUCTOS</li> </Link>
                <Link to={"/construye"} ><li id={pathname==="/construye"? style.active:undefined} >ARMA TU PC</li> </Link>
                <Link to={"/marcas"} ><li id={pathname==="/marcas"? style.active:undefined} >MARCAS</li></Link>
                <Link to={"/ayuda"} ><li id={pathname==="/ayuda"? style.active:undefined} >AYUDA</li></Link>
            </ul>
        </div>
    )
};


export default NavBar;