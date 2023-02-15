import style from "./App.module.css";
import {Route} from "react-router-dom";
import { Home } from "./views/index.js";
import Header from './components/Header/Header.jsx';
import Productos from './views/Productos/Productos.jsx'




function App() {
  return (
    <div className="App">
        <Header/>
        <Route exact path={"/"} render={()=> <Home/>}/>
        <Route exact path={"/productos"} render={()=> <Productos/>} />
    </div>
  );
}

export default App;
