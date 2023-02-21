import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Logout.module.css"

const LogoutButton = () => {
    const { logout } = useAuth0();

    return(
        <button
        className={style.logout}
        onClick={()=> logout({ returnTo: window.location.origin})}
        >CERRAR SESION</button>
    )
}

export default LogoutButton