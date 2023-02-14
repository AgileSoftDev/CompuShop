import style from "./Header.module.css";
import NavBar from '../../components/NavBar/NavBar';
import xIcon from "../../assets/icons/X-icon.svg"
import { useState } from "react";

const avisoDisplay ={
    display: "none"
}

const Header = () =>{

    const [avisoDisplayStatus, setAvisoDisplayStatus] = useState(true)

    return(
        <div id={style.Header}>
            <div style={!avisoDisplayStatus ? avisoDisplay : undefined} id={style.avisoContainer}><h1>PEDIDOS UNICAMENTE VÍA WEB</h1><span>NO TOMAMOS PEDIDOS POR NIGUNA RED SOCIAL</span> <img onClick={()=>setAvisoDisplayStatus(!avisoDisplayStatus)} src={xIcon} alt="X icon" /></div>
            <NavBar/>
        </div>
    )
};

export default Header;