import style from "./App.module.css";
import {Route} from "react-router-dom";
import { Home } from "./views/index.js";
import Header from './components/Header/Header.jsx';
import Productos from './views/Productos/Productos.jsx'
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <div className="App">
        <Header/>
        <Route exact path={"/home"} render={()=> <Home/>}/>
        <Route exact path={"/productos"} render={()=> <Productos/>} />
        <Footer/>
    </div>
  );
}

export default App;
