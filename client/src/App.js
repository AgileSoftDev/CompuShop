import style from "./App.module.css";
import {Route, Router} from "react-router-dom";
import { Home } from "./views/index.js";
import Header from './components/Header/Header.jsx';
import Productos from './views/Productos/Productos.jsx'
import Footer from "./components/Footer/Footer";
import LandingPage from "../src/components/LandingPage/LandingPage.jsx"
import { useLocation } from "react-router-dom";
import ProfileDetail from "./views/ProfileDetail/ProfileDetail";



function App() {
  const location = useLocation();

  return (
    <div className="App">
        { location.pathname!=='/' && <Header/>}
        <Route exact path={"/"} render={()=> <LandingPage/>}/>
        <Route exact path={"/home"} render={()=> <Home/>}/>
        <Route exact path={"/productos"} render={()=> <Productos/>} />
        <Route exact path={"/profile"} render={()=> <ProfileDetail/>}/>
        { location.pathname !=='/' && <Footer/>}
    </div>
  );
}

export default App;
