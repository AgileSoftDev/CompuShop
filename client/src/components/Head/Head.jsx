import style from "./Head.module.css"
import logo_compuShop from "../../assets/compu-shop_logo.png"
import shoppingCart from "../../assets/icons/black-shopping-cart.svg"
import SearchBar from "../SearchBar/SearchBar";
import loggingImg from "../../assets/icons/logging.svg"
import {Link} from 'react-router-dom'
import LoginButton from "../Login/Login";
import LogoutButton from "../Logout/Logout";
import Profile from "../Profile/Profile";
import { useAuth0} from "@auth0/auth0-react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { current } from "@reduxjs/toolkit";



const NavBar = (props)=>{

    const itemsToBuy = useSelector(e=>e.shoppingCart)

    const [userAdmin, setuserAdmin] = useState()


    const { isAuthenticated, user } = useAuth0();

    const cartRef = useRef(null);
    const cartIconRef = useRef(null);
    const buttonComprarRef = useRef(null)
    const containerRef = useRef(null)


    const [numberStatus, setNumberStatus] = useState()
    const [shoppingCartStatus, setShoppingCart] = useState(false)
    const [styleCartContainer, setStyleCartContainer] = useState({})



    useEffect(()=>{
        const cantidad = itemsToBuy.length
        setNumberStatus(cantidad)
        if (shoppingCartStatus) {
            setStyleCartContainer({
                transition: 'all 0s ease-in-out',
                height: `${cartRef?.current?.scrollHeight}px`, 
            });
        }else{
            setStyleCartContainer({
                height: `0px`,
                transition: 'all 0 ease-in-out',
            });
        }


     
    },[itemsToBuy])

    useEffect(()=>{
        const getUser=async()=>{
            const {data} = await axios.get(`http://localhost:3001/users/db/${user.email}`)
            if (data.isAdmin === true) setuserAdmin(data)
        }
    
        if(isAuthenticated)getUser()
       
      },[user])


    useEffect(()=>{

        const setCartOff = (e) =>{
        e.stopPropagation();
        if (!containerRef?.current?.contains(e.target) && e.target !== cartIconRef?.current && e.target?.className!== "trash" && e.target?.className!== "buttonSumarCart")setShoppingCart(false)
        if(e.target===buttonComprarRef.current)setShoppingCart(false)
         }

        window.removeEventListener("click",setCartOff)
        window.addEventListener("click", setCartOff)


        if (shoppingCartStatus) {
            setStyleCartContainer({
                height: `${cartRef?.current?.scrollHeight}px`,
                transition: ' all 0.5s ease-in-out',
            });
        }else{
            setStyleCartContainer({
                height: `0px`,
                transition: 'all 0.5s ease-in-out',
            });
        }
        

        return () => {
            if(!shoppingCartStatus)window.removeEventListener('click', setCartOff);
          };
    },[shoppingCartStatus])



    return(
        <div id={style.HeaderContainer}>
            <div id={style.NavBar}>
                <div id={style.logoContainer}><Link to={"/home"}><img src={logo_compuShop} alt="logo_compuShop" /></Link></div>
                <SearchBar/>
                {isAuthenticated ? (
                    <div>
                        <div id={style.navar_profile_section}>
                            <div id={style.navar_profile_section_profile}>
                                <Profile/>
                            </div>
                            <div id={style.desplegable_navar_profile_section}>
                               {props?.isAdmin?( <Link to={"/admin"} id={style.buttonAdmin}>Ir a Admin</Link>):undefined}
                                <LogoutButton/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <LoginButton/>
                )}
                <div id={style.shoppingCartContainer}  style={shoppingCartStatus ? { backgroundColor: '#ffdf58' } : undefined} >
                    <div ref={cartIconRef}  onClick={()=>setShoppingCart(!shoppingCartStatus)} >
                        <img src={shoppingCart} alt="shoping Cart"/>
                    </div>
                    <div id={shoppingCartStatus?style.shoppingCartActive:undefined}>
                        <div ref={containerRef} style={styleCartContainer}>
                           <ShoppingCart refCart={cartRef} buttonComprarRef={buttonComprarRef} />
                        </div>
                    </div>
                    <p id={style.itemNumber}>{numberStatus}</p>
                </div>
            </div>
        </div>
        )
    }

export default NavBar;

