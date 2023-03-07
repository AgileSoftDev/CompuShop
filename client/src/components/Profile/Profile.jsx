import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Profile.module.css"
import { Link } from "react-router-dom";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();


    if(isLoading) {
        return <div>Loading...</div>
    }
    else if(user){

        return(
            isAuthenticated && (
                <div className={style.perfil}>
                    <Link to={"/profile"}>
                        <img className={style.img} src={user.picture} alt={user.name}/>
                    </Link>
                </div>
            )
        )
    }
    
}

export default Profile;