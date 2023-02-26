import style from "./Admin.module.css"
import {Link, Route} from "react-router-dom"
import userIcon from "../admin_assets/user_icon.png";
import logoutIcon from "../admin_assets/logout-svgrepo-com.svg"
import TableProductos from "../../components/TableProductos/TableProductos";
const Admin = () =>{
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
                    <Link to={"/admin/controlPanel"}>Panel de control</Link>
                    <Link to={""}>Configuraciones</Link>
                    <Link to={"/admin/settings/users"}>Users</Link>
                    <Link to={"/admin/settings/categories"}>Categories</Link>
                    <Link to={"/admin/products"}>Productos</Link>
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