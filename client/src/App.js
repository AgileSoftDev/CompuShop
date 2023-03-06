import style from "./App.module.css";
import {Route} from "react-router-dom";
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


  useEffect(()=>{
    const setting = async()=>{
      const postUser=async()=>{
        const {data} = await axios.post(`http://localhost:3001/users`,{email:user.email })
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
          <Route exact path={"/profile"} render={()=> <ProfileDetail/>}/>
          <Route exact path={"/compra"} render={()=> <Compra/>}/>
          {/* <Route exact path={"/edituser"} render={()=> <EditUser/>}/>
          <Route exact path={"/edituser"} render={()=> <EditUser/>}/> */}
          {<Route exact path={"/ayuda"} render={()=> <Ayuda/>}/> }
          </div>
          }
          <Route exact path={"/shoppingcart"} render={()=> <ShoppingView userId={currentUser.userid}/>}/>
          <Route  path={"/admin"} render={()=>!isAuthenticated?loginWithRedirect():currentUser?.isAdmin?<Admin/>:history.push("/productos")}/>
          <Route exact path={"/nosotros"} render={()=><Nosotros/>}/>
          { location.pathname!=='/' && !location.pathname.toLowerCase().includes('/admin') &&  location.pathname!=='/shoppingcart' &&  <Footer/>}
      </div>
    );
  }else{
    return(
      <>
        <h1>CARGANDO...</h1>
       </>
    )
  
  }


}

export default App;
