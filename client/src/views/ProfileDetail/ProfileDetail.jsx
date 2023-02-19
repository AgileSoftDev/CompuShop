import React from "react";
import style from "./ProfileDetail.module.css"
import { useAuth0 } from "@auth0/auth0-react";


const ProfileDetail = () => {

    const { user } = useAuth0();

    return (
        <div className={style.container}>
            <div className={style.cuadro}>

                <div className={style.info}>
                    <img className={style.img} src={user.picture} alt={user.name}/>
                    <h1>Hola {user.name}!</h1>
                </div>

                <div className={style.info2}>
                    <h2>Tu informacion:</h2>
                    <div className={style.email}>
                        <p>Email:</p>
                        <p>{user.email}</p>
                    </div>

                    <div className={style.ciudad}>
                        <p>Ciudad:</p>
                        <p>{user.name}</p>
                    </div>

                    <div className={style.direccion}>
                        <p>Direccion:</p>
                        <p>{user.email}</p>
                    </div>

                    <div className={style.celular}>
                        <p>Celular:</p>
                        <p>{user.name}</p>
                    </div>

                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileDetail