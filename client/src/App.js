import style from "./App.module.css";
import {Route, Redirect} from "react-router-dom";
import { Home } from "./views/index.js";
import Header from './components/Header/Header.jsx';
import Productos from './views/Productos/Productos.jsx'
import Footer from "./components/Footer/Footer";
import LandingPage from "../src/components/LandingPage/LandingPage.jsx"
import { useLocation } from "react-router-dom";
import Construye from "./views/Construye/Construye";
import ProfileDetail from "./views/ProfileDetail/ProfileDetail";
import Ayuda from "./views/Ayuda/Ayuda";
import DetalleProducto from "./views/DetalleProducto/DetalleProducto";
import Admin from "./admin/view/Admin.jsx";
import Nosotros from "./views/Nosotros/Nosotros"
import {useEffect, useRef, useState} from "react";
import ShoppingView from "./views/Shopping/Shopping.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Compra from "./views/Compra/Compra"
import { useHistory } from "react-router-dom";
import urlBack from "./utils/deploy_back"
import MisCompras from "./views/MisCompras/MisCompras";
import cargando from "./assets/cargando.gif"
import logo from "./assets/compu-shop_logo.png"
import NotFound from "./components/Notfound/Notfound"



function App() {
  const history = useHistory();

  const { user,isAuthenticated,loginWithRedirect,isLoading} = useAuth0()

  const headerRef = useRef(null)
  const location = useLocation();

  const [paddingMain,setPadingMain] = useState(0)
  const [currentUser, setCurrentUser]=useState({})
  const [loadinStatus, setLoadingStatus]=useState(true)

  useEffect(()=>{
    setPadingMain(145)
  },[])

  const userBanned = async()=>{
    const userr = await axios.get(`http://localhost:3001/users/db/${user.email}`)
    if(userr.data.isActive===false){
      alert("User is banned. Please contact us for more information")
      logout({ returnTo: window.location.origin })
    }
  }

  const {logout} = useAuth0();
  useEffect(()=>{
    const setting = async()=>{
      const postUser=async()=>{
        const {data} = await axios.post(`${urlBack}/users`,{email:user.email }).catch(err=>logout({ returnTo: window.location.origin}))
        if (data) setCurrentUser(data)
      }
      if(isAuthenticated) await postUser()
      if(!isLoading)setLoadingStatus(false)
    }
    setting()
   
  },[user,isLoading])

  if (!loadinStatus) {

    return (
      <div id={style.AbsoluteContaier}>
          <Route exact path={"/"} render={()=> <LandingPage/>}/>
          { location.pathname!=='/' && !location.pathname.toLowerCase().includes('/admin') && location.pathname!=='/shoppingcart' && <Header headerRef={headerRef} isAdmin={currentUser?.isAdmin}/>}
  
          {location.pathname!=='/' && !location.pathname.toLowerCase().includes('/admin') && location.pathname!=='/shoppingcart' &&<div id={style.bodyMain} style={{paddingTop:`${paddingMain}px`}}>
          <Route exact path={"/home"} render={()=> <Home/>}/>
          <Route exact path={"/productos"} render={()=> <Productos/>} />
          <Route exact path={"/producto/:id"} render={()=> <DetalleProducto/>} />
          <Route path={"/construye"} render={()=> <Construye/>} />
          <Route exact path={"/profile"} render={()=>!isAuthenticated?loginWithRedirect():<ProfileDetail/>}/>
          <Route exact path={"/compra"} render={()=> <Compra/>}/>
          <Route exact path={"/profile/miscompras"} render={()=>!isAuthenticated?loginWithRedirect():<MisCompras currentUser={currentUser}/>}/>
          {/* <Route exact path={"/edituser"} render={()=> <EditUser/>}/>
          <Route exact path={"/edituser"} render={()=> <EditUser/>}/> */}
          {<Route exact path={"/ayuda"} render={()=> <Ayuda/>}/> }
          </div>
          }
          <Route exact path={"/notfound"} render={()=> <NotFound/>}/>
          <Route exact path={"/shoppingcart"} render={()=> <ShoppingView userId={currentUser.userid}/>}/>
          <Route path={"/admin"} render={()=>!isAuthenticated?loginWithRedirect():currentUser?.isAdmin?<Admin/>:history.push("/productos")}/>
          <Route exact path={"/nosotros"} render={()=><Nosotros/>}/>
          { location.pathname!=='/' && !location.pathname.toLowerCase().includes('/admin') &&  location.pathname!=='/shoppingcart' &&  <Footer/>}
          {/* <Route path="*"> <Redirect to="/notfound" /> </Route> */}
      </div>
    );
  }else{
    return(
      <div className={style.container}>
        <img className={style.gif} src={cargando}></img>
        <p className={style.cargando}>CARGANDO...</p>
        <p className={style.espera}>Espera mientras te redirigimos.</p>
        <img className={style.logo} src={logo}></img>
      </div>
    )
  
  }


}

export default App;
