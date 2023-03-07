import style from "./Admin.module.css"
import {Link, Route} from "react-router-dom"
import userIcon from "../admin_assets/user_icon.png";
import { useHistory } from "react-router-dom";
import logoutIcon from "../admin_assets/logout-svgrepo-com.svg"
import TableProductos from "../admin_componets/TableProductos/TableProductos";
import ControlPanel from "../view/ControlPanel/ControlPanel";
import FormAgregarProducto from "../admin_componets/FormAgregarProducto/FormAgregarProducto";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import stop from "../../assets/Stop_sign.png"
import axios from "axios";
import TableUsuarios from "../admin_componets/TableUsuarios/TableUsuarios";
const Admin = () =>{

    const { user, logout, isAuthenticated } = useAuth0();
    const [userAdmin, setuserAdmin] = useState()

    
  useEffect(()=>{
    const getUser=async()=>{
        const {data} = await axios.get(`http://localhost:3001/users/db/${user.email}`)
        if (data.isAdmin === true) setuserAdmin(data)
    }

    if(isAuthenticated)getUser()
   
  },[user])



    const pathname = useHistory().location.pathname
    if(!userAdmin || userAdmin.isAdmin===false){
        return(
            <div className={style.container}>
                <div className={style.logo}>
                    <img src={userIcon} alt="logo" />
                </div>
                <h1>ERROR NOT ADMIN USER</h1>
                <img src={stop} alt="404 image not found" />
                
                <div className={style.logout}>
                    <img src={logoutIcon} alt="logout" onClick={logout} />
                </div>
            </div>
        )
    }else{
    return(
        <div id={style.AdminContainer}>
            <div id={style.panelAdmin}>
                <nav>
                    <div>
                        <div>CS</div>
                        <div>
                            <h1>Compu Shop</h1>
                            <p>Componentes de PC</p>
                        </div>
                    </div>
                    <Link id={pathname==="/admin/controlPanel"?style.linkActive:undefined} to={"/admin/controlPanel"}>Panel de control</Link>
                    {/* <Link id={pathname==="/admin/setting"?style.linkActive:undefined}>Configuraciones</Link> */}
                    <Link id={pathname==="/admin/users"?style.linkActive:undefined} to={"/admin/users"}>Users</Link>
                    {/* <Link id={pathname==="/admin/settings/categories"?style.linkActive:undefined} to={"/admin/settings/categories"}>Categories</Link> */}
                    <Link id={pathname==="/admin/products"?style.linkActive:undefined} to={"/admin/products"}>Productos</Link>
                </nav>
                <div>
                    <div>
                        <div><img src={userIcon} alt="" /></div>
                        <h3>Mi perfil</h3>
                    </div>
                    <div onClick={()=> logout({ returnTo: window.location.origin})}>
                        <img src={logoutIcon} alt="" />
                        <p>Logout</p>
                    </div>
                </div>
            </div>

            <div id={style.mainAdmin}>
                <Route exact path={"/admin/controlPanel"} render={()=> <ControlPanel />}/>
                <Route exact path={"/admin/products"} render={()=> <TableProductos/>}/>
                <Route exact path={"/admin/products/add"} render={()=> <FormAgregarProducto/>}/>
                <Route exact path={"/admin/users"} render={()=> <TableUsuarios/>}/>
            </div>
        </div>
    )}
};

export default Admin;