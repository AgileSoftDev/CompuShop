import style from "./Head.module.css"
import logo_compuShop from "../../assets/compu-shop_logo.png"
import shoppingCart from "../../assets/icons/black-shopping-cart.svg"
import SearchBar from "../SearchBar/SearchBar";
import loggingImg from "../../assets/icons/logging.svg"


const NavBar = ()=>{
    return(
        <div id={style.HeaderContainer}>
            <div id={style.NavBar}>
                <div id={style.logoContainer}><img src={logo_compuShop} alt="logo_compuShop" /></div>
                <SearchBar/>
                <div id={style.shoppingCart}><img src={shoppingCart} alt="shoping Cart"/></div>
                <button id={style.logging}> <img src={loggingImg} alt="logging" /><span>INICIAR SESIÓN</span></button> 
            </div>
        </div>
    )
};

export default NavBar;

