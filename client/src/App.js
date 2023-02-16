import style from "./App.module.css";
import {Route} from "react-router-dom";
import { Home } from "./views/index.js";
import Header from './components/Header/Header.jsx';
import Productos from './views/Productos/Productos.jsx'
import Footer from "./components/Footer/Footer";
import LandingPage from "../src/components/LandingPage/LandingPage.jsx"
import { useLocation } from "react-router-dom";



function App() {
  const location = useLocation();

  return (
    <div className="App">
        { location.pathname!=='/' && <Header/>}
        <Route exact path={"/"} render={()=> <LandingPage/>}/>
        <Route exact path={"/home"} render={()=> <Home/>}/>
        <Route exact path={"/productos"} render={()=> <Productos/>} />
        { location.pathname !=='/' && <Footer/>}
    </div>
  );
}

export default App;
