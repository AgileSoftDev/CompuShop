import { Link } from 'react-router-dom';
import compuShopLogo from "../../assets/compu-shop_logo.png"
import Paypal from "./ShoppingComponents/PasarelaPago/PasarelaPago";
import Form from "./ShoppingComponents/FormularioShopping/FormularioShopping";
import ShoppingCart from './ShoppingComponents/ShoppingCart/ShoppingCart';
import {  useRef, useState } from "react";
import style from "./Shopping.module.css";
import CompraExitosa from "./ShoppingComponents/PasarelaPago/AlertsPasarela/CompraExitosa";






const Shopping = (props) =>{
    window.scroll({
        top: 0
      });

    const [estadoPasarela,setEstadoPasarela] = useState(0)


    const statusForm = useRef(null)


    const submitHandler = ()=>{
        for (const i of Object.values(statusForm.current)) {
            if (i === "") {
                alert("Por favor completa todos los campos")
                return
            }
        }
        setEstadoPasarela(1)
    }

    return(
        <>
            <div id={style.ContainerShopping}>
                <div id={style.headerShopping}>
                    <div>
                        <img src={compuShopLogo} alt="" />
                        <Link to={"/ayuda"}>Ayuda</Link>
                    </div>
                </div>
                <div id={style.mainShopping}>
                    <div id={style.firstChildMain}>
                        <div id={style.formularioContainer}>
                            <div>
                                <div>
                                    <h1 id={style.titleFormulario}>Agregar Domicilio</h1>
                                </div>
                                <section>
                                    <Form statusForm={statusForm}/>
                                    <div id={style.continuarButton}>
                                        <button onClick={()=>submitHandler()} id={style.principalButton}>
                                            <span >Continuar</span>
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div id={style.cartContainer}>
                            <ShoppingCart/>
                        </div>
                    </div>
                </div>
                <div id={style.footerShopping}>
                    <div id={style.navFooter}>
                        <div>
                            <Link to={"/ayuda"}>Terminos y condiciones</Link>
                            <Link to={"/ayuda"}>Cómo cuidamos tu privacidad</Link>
                            <Link to={"/ayuda"}>Ayuda</Link>
                        </div>
                        <div>
                            <h2>Copyright © 2023 CompuShop Lima-Perú S.R.L.</h2>
                        </div>
                        <div>
                            <p>Latam to the world &lt;3</p>
                        </div>
                    </div>
                </div>
                <div id={style.maxCotainerP} style={estadoPasarela===1?{display:"flex"}:{display:"none"}}>
                    <div id={style.containerPaypal}>
                        <h1>Finaliza tu compra</h1>
                        <Paypal userId={props.userId} statusForm={statusForm} cerrarPasarela={setEstadoPasarela}></Paypal>
                        <p onClick={()=>setEstadoPasarela(0)} id={style.exitPasarela}>X</p>
                    </div>
                </div>
                
                <div id={style.AlertaExitosa}  style={estadoPasarela===2?{display:"flex"}:{display:"none"}}>
                    <CompraExitosa/>
                </div>
            </div>
        </>
    )
  
};
export default Shopping;

