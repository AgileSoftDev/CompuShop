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



function App() {
  const location = useLocation();

  return (
    <div id={style.AbsoluteContaier}>
        { location.pathname!=='/' && <Header/>}
        <Route exact path={"/"} render={()=> <LandingPage/>}/>
        <Route exact path={"/home"} render={()=> <Home/>}/>
        <Route exact path={"/productos"} render={()=> <Productos/>} />
        <Route path={"/construye"} render={()=> <Construye/>} />
        <Route exact path={"/profile"} render={()=> <ProfileDetail/>}/>
        { <Route exact path={"/ayuda"} render={()=> <Ayuda/>}/> }
        { location.pathname !=='/' && <Footer/>}
    </div>
  );
}

export default App;
