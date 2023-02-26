import style from "./Admin.module.css"
import {Link, Route} from "react-router-dom"
import userIcon from "../admin_assets/user_icon.png";
import { useHistory } from "react-router-dom";
import logoutIcon from "../admin_assets/logout-svgrepo-com.svg"
import TableProductos from "../admin_componets/TableProductos/TableProductos";
const Admin = () =>{
    const pathname = useHistory().location.pathname
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
                    <Link id={pathname==="/admin/setting"?style.linkActive:undefined} to={"/admin/setting"}>Configuraciones</Link>
                    <Link id={pathname==="/admin/settings/users"?style.linkActive:undefined} to={"/admin/settings/users"}>Users</Link>
                    <Link id={pathname==="/admin/settings/categories"?style.linkActive:undefined} to={"/admin/settings/categories"}>Categories</Link>
                    <Link id={pathname==="/admin/products"?style.linkActive:undefined} to={"/admin/products"}>Productos</Link>
                </nav>
                <div>
                    <div>
                        <div><img src={userIcon} alt="" /></div>
                        <h3>Mi perfil</h3>
                    </div>
                    <div>
                        <img src={logoutIcon} alt="" />
                        <p>Logout</p>
                    </div>
                </div>
            </div>

            <div id={style.mainAdmin}>
                <Route exact path={"/admin/products"} render={()=> <TableProductos/>}/>
                <Route exact path={"/admin/users"} render={()=> <TableProductos/>}/>
            </div>
        </div>
    )
};

export default Admin;