import style from "./Head.module.css"
import logo_compuShop from "../../assets/compu-shop_logo.png"
import shoppingCart from "../../assets/icons/black-shopping-cart.svg"
import SearchBar from "../SearchBar/SearchBar";
import loggingImg from "../../assets/icons/logging.svg"
import {Link} from 'react-router-dom'


const NavBar = ()=>{

    return(
        <div id={style.HeaderContainer}>
            <div id={style.NavBar}>
                <div id={style.logoContainer}><img src={logo_compuShop} alt="logo_compuShop" /></div>
                <SearchBar/>
                <button id={style.logging}> <img src={loggingImg} alt="logging" /> <Link id={style.linkLoggind} to={"/logging"}>INICIAR SESIÓN</Link> </button> 
                <div id={style.shoppingCartContainer}><Link to={"/shoppingCart"}><img src={shoppingCart} alt="shoping Cart"/></Link></div>
            </div>
        </div>
    )
};

export default NavBar;

