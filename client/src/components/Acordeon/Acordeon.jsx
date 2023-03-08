import React, { useState } from 'react';  
import style from './Acordeon.module.css';
import { useAuth0 } from "@auth0/auth0-react";

function Acordeon () { 
     const { loginWithRedirect } = useAuth0();
     const [acordeon, setAcordeon] = useState({
      uno: false,
      dos: false,
      tres: false,
      cinco: false,
      seis: false,
      siete: false,
      ocho: false,
     })
    return (
   
              <> 
              <h1>Preguntas Frecuentes</h1> 
              <h1></h1> 
              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, uno: !acordeon.uno})}>Realizar un pedido</button>
              <div className={acordeon.uno ? style.panelActivo : style.panel }>
                 <p className={style.textot}>¿Cómo realizo un pedido?</p>
                 
                  <p className={style.texto}>
                      Solo tenés que seleccionar todos los productos que deseas adquirir y agregarlos a tu carrito. Seguidamente, en el carrito de compras, colocás los datos solicitados. Luego hacés clic en el botón COMPRAR y
                      podés acceder como cliente (si ya tenés cuenta en CompuShop) o crear un cliente nuevo. Por último, completás los pasos brindados por el asistente, hasta
                      confirmar la compra. Se te asignará un número de pedido y se mostrarán los datos del mismo en la seccion Tus compras.
                  </p>
              </div>
              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, dos: !acordeon.dos})}>Precio</button>
                <div className={acordeon.dos ? style.panelActivo : style.panel }>
                      <p className={style.textot}> ¿El precio que figura en la web es el precio final?</p>
      
                      <p className={style.texto}>Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos mexicanos.</p>
      
      
                  </div>
                  
              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, tres: !acordeon.tres})}>Formas de Pago</button>
                  <div className={acordeon.tres ? style.panelActivo : style.panel }>
                      <p className={style.textot}>¿Cuáles son las formas de pago?</p>
                      <p className={style.texto}>Contamos con dos formas de pago: a través de paypal, y tambien a través de las tarjetas de credito.
                          Tarjetas (Visa o MasterCard), al precio de lista o Paypal (Tarjetas online y tu saldo de Paypal) </p>
                  </div>

              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, seis: !acordeon.seis})}>Paypal</button>
              <div className={acordeon.seis ? style.panelActivo : style.panel }>
                <p className={style.textot}>   ¿Cómo puedo abonar a través de Paypal?</p>
                <p className={style.texto}>Podés hacerlo de dos formas: Con tarjetas online (no se puede acceder a cuotas sin interés) o con el saldo de tu cuenta de PayPal</p>
              </div>
      
              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, siete: !acordeon.siete})}>Envios</button>
                  <div className={acordeon.siete ? style.panelActivo : style.panel }>
                  <p className={style.textot}> ¿Cómo gestiono el envío de mi pedido?</p>
                  <p className={style.texto}>Es un método exclusivo de CompuShop, cuando se realice la compra se te asignara un numero de pedido, poniendote en contacto con el soporte se coordinara fecha y hora para la entrega de tu compra.</p>
                  </div>
      
              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, ocho: !acordeon.ocho})}>Facturación</button>
              <div className={acordeon.ocho ? style.panelActivo : style.panel }>
              <p className={style.textot}> ¿Cómo tramito la factura de mi compra?</p>
              <p className={style.texto}>Luego de finalizar tu compra tendras la factura de tu compra en el aparatado de las mismas dentro de la seccion de tu perfil. 
                </p>
              </div>
              </>

    );
  }
  
  export default Acordeon;
