import style from "./NavBar.module.css"
import logo_compuShop from "../../assets/compu-shop_logo.png"
import shoppingCart from "../../assets/icons/black-shopping-cart.svg"
import SearchBar from "../SearchBar/SearchBar";


const NavBar = ()=>{
    return(
        <div id={style.NavBarContainer}>
            <div id={style.NavBar}>
                <div><img src={logo_compuShop} alt="" /></div>
                <SearchBar/>
                <div id={style.shoppingCart}><img src={shoppingCart} alt="shoping Cart"/></div>
                <button id={style.logging}>INICIAR SESIÓN</button> 
            </div>
        </div>
    )
};

export default NavBar;

