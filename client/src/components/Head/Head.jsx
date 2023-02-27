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
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";



const NavBar = ()=>{

    const itemsToBuy = useSelector(e=>e.shoppingCart)
    const [shoppingCartStatus, setShoppingCart] = useState(false)

    const { isAuthenticated } = useAuth0();

    const cartRef = useRef(null);
    const cartContaiRef = useRef(null);
    const [numberStatus, setNumberStatus] = useState()

    const setCartOff = (e) =>{
        if (e.target !== cartRef.current && e.target !== cartContaiRef.current)setShoppingCart(false)
    }

    useEffect(()=>{
        window.addEventListener("click", setCartOff)
        const cantidad = itemsToBuy.length
        setNumberStatus(cantidad)
    },[itemsToBuy])

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
                <div id={style.shoppingCartContainer}  style={shoppingCartStatus ? { backgroundColor: '#ffdf58' } : undefined} >
                    <div ref={cartContaiRef}  onClick={()=>setShoppingCart(!shoppingCartStatus)} >
                        <img src={shoppingCart} alt="shoping Cart"/>
                    </div>
                    <div id={shoppingCartStatus?style.shoppingCartActive:undefined}>
                        <div ref={cartRef}  style={shoppingCartStatus ? { height: `${cartRef.current.scrollHeight}px` }: { height: '0px' }}>
                           <ShoppingCart />
                        </div>
                    </div>
                    <p id={style.itemNumber}>{numberStatus}</p>
                </div>
            </div>
        </div>
    )
};

export default NavBar;

