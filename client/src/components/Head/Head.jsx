import style from "./Head.module.css"
import logo_compuShop from "../../assets/compu-shop_logo.png"
import shoppingCart from "../../assets/icons/black-shopping-cart.svg"
import SearchBar from "../SearchBar/SearchBar";
import loggingImg from "../../assets/icons/logging.svg"
import {Link} from 'react-router-dom'
import LoginButton from "../Login/Login";
import LogoutButton from "../Logout/Logout";
import Profile from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = ()=>{

    const { isAuthenticated } = useAuth0();

    return(
        <div id={style.HeaderContainer}>
            <div id={style.NavBar}>
                <div id={style.logoContainer}><Link to={"/home"}><img src={logo_compuShop} alt="logo_compuShop" /></Link></div>
                <SearchBar/>
                {isAuthenticated ? (
                    <>
                        <Profile/>
                        <LogoutButton/>
                    </>
                ) : (
                    <LoginButton/>
                )}
                <div id={style.shoppingCartContainer}><Link to={"/shoppingCart"}><img src={shoppingCart} alt="shoping Cart"/></Link></div>
            </div>
        </div>
    )
};

export default NavBar;

