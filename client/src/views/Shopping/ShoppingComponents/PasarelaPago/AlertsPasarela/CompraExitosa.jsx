import style from "./CompraExitosa.module.css"
import { Link } from "react-router-dom";

const CompraExitosa = ()=>{
    
    return(
        <div id={style.buySucces}>
            <h2>Compra exitosa.</h2>
            <h3>Gracias por su compra &lt;3</h3>
            <Link to={"/productos"}>Acetpar</Link>
        </div>
    )
};

export default CompraExitosa;