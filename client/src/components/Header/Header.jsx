import style from "./Header.module.css";
import xIcon from "../../assets/icons/X-icon.svg"
import { useState } from "react";
import Head from '../Head/Head';
import NavBar from "../NavBar/NavBar";

const avisoDisplay ={
    display: "none"
}

const Header = () =>{

    const [avisoDisplayStatus, setAvisoDisplayStatus] = useState(true)

    return(
        <div id={style.Header}>
            <div style={!avisoDisplayStatus ? avisoDisplay : undefined} id={style.avisoContainer}><h1>PEDIDOS UNICAMENTE VÍA WEB</h1><span>NO TOMAMOS PEDIDOS POR NIGUNA RED SOCIAL</span> <img onClick={()=>setAvisoDisplayStatus(!avisoDisplayStatus)} src={xIcon} alt="X icon" /></div>
            <Head/>
            <NavBar/>
        </div>
    )
};

export default Header;