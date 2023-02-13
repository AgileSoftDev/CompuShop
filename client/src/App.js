import style from "./App.module.css";
import {Route} from "react-router-dom";
import { Home } from "./views/index.js";



function App() {
  return (
    <div className="App">
        <Route exact path={"/home"} render={()=> <Home/>}/>
    </div>
  );
}

export default App;
