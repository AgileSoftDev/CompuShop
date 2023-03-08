
import React from "react";
import style from "./ProfileDetail.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'


const ProfileDetail = () => {
    
    
    const { user, logout } = useAuth0();

    if(!user){
        return(
            <h1>No estás logueado</h1>
        )
    }else{
        return (
            <div className={style.fondo}>
                <div className={style.container}>
                    <p className={style.titulo}><i class="fa-solid fa-user "></i> Mi cuenta</p>
                    <Link to={"/productos"}><p className={style.volver}>🡸</p></Link>
                    
                    <div className={style.izquierda}>
                        <div className={style.cuadro1}>
                            <h2><i class="fa-solid fa-user-secret"></i> Mi información</h2>
                            <p>Nombre: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Usuario: {user.nickname} </p>
                        </div>
    
                        <div className={style.cuadro2}>
                            <h2><i class="fa-solid fa-bag-shopping"></i> Mis compras</h2>
                            <p>Aqui van a aparecer tus futuras compras</p>
                            <div className={style.containerButtonsToSections}>
                                <Link to={"/profile/miscompras"} className={style.buttonsToSections}>Ver todas mis compras</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>)
    }
    


    }
export default ProfileDetail;