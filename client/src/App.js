import style from "./App.module.css";
import {Route, Router} from "react-router-dom";
import { Home } from "./views/index.js";
import Header from './components/Header/Header.jsx';
import Productos from './views/Productos/Productos.jsx'
import Footer from "./components/Footer/Footer";
import LandingPage from "../src/components/LandingPage/LandingPage.jsx"
import { useLocation } from "react-router-dom";
<<<<<<< HEAD
import Construye from "./views/Construye/Construye";
=======
import ProfileDetail from "./views/ProfileDetail/ProfileDetail";
>>>>>>> de9b5169ca74ffc6540c612923f24cfb8499fed9



function App() {
  const location = useLocation();

  return (
    <div id={style.AbsoluteContaier}>
        { location.pathname!=='/' && <Header/>}
<<<<<<< HEAD
        <div id={style.AbsoluteContaier_Main}>
              <Route exact path={"/"} render={()=> <LandingPage/>}/>
              <Route exact path={"/home"} render={()=> <Home/>}/>
              <Route exact path={"/productos"} render={()=> <Productos/>} />
              <Route  path={"/construye"} render={()=><Construye/>}/>
        </div>
=======
        <Route exact path={"/"} render={()=> <LandingPage/>}/>
        <Route exact path={"/home"} render={()=> <Home/>}/>
        <Route exact path={"/productos"} render={()=> <Productos/>} />
        <Route exact path={"/profile"} render={()=> <ProfileDetail/>}/>
>>>>>>> de9b5169ca74ffc6540c612923f24cfb8499fed9
        { location.pathname !=='/' && <Footer/>}
    </div>
  );
}

export default App;
