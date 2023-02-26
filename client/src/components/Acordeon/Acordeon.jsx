import React, { useState } from 'react';  
import style from './Acordeon.module.css';
import { useAuth0 } from "@auth0/auth0-react";

function Acordeon () { 
     const { loginWithRedirect } = useAuth0();
     const [acordeon, setAcordeon] = useState({
      uno: false,
      dos: false,
      tres: false,
      cuatro: false,
      cinco: false,
      seis: false,
      siete: false,
      ocho: false,
      nueve: false,
     })
    return (
   
              <> 
              <h1>Preguntas Frecuentes</h1> 
              <h1></h1> 
              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, uno: !acordeon.uno})}>Realizar un pedido</button>
              <div className={acordeon.uno ? style.panelActivo : style.panel }>
                 <p>¿Cómo realizo un pedido?</p>
                 
                  <p>
                      Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras, para conocer el costo del envío colocás tu código
                      postal en el recuadro correspondiente, elegís la mensajería de tu preferencia y debajo seleccionas la forma de pago. Luego hacés clic en el botón COMPRAR y
                      podés acceder como cliente (si ya tenés cuenta en Compra Gamer) o crear un cliente nuevo. Por último, completás los pasos brindados por el asistente, hasta
                      confirmar la compra. Se te asignará un número de pedido y se mostrarán los datos del mismo. También enviaremos un mail a tu correo electrónico registrado
                      con los detalles del pedido realizado.
                  </p>
              </div>

              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, dos: !acordeon.dos})}>Precio</button>
                <div className={acordeon.dos ? style.panelActivo : style.panel }>
                      <p> ¿El precio que figura en la web es el precio final?</p>
      
                      <p>Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.</p>
      
      
                  </div>
                  
              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, tres: !acordeon.tres})}>Formas de Pago</button>
                  <div className={acordeon.tres ? style.panelActivo : style.panel }>
                      <p>¿Cuáles son las formas de pago?</p>
                      <p>Contamos con dos formas de pago: a través de depósito/transferencia bancaria, con la cual obtenés el precio especial, o bien, a través de los métodos Pago
                          Gamer (Visa o MasterCard) o MercadoPago (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar en cuotas, al precio de lista</p>
                  </div>
      
                  <button className={style.accordion} onClick={() => setAcordeon({...acordeon, cuatro: !acordeon.cuatro})}>Deposito- Transferencia bancaria</button>
                  <div className={acordeon.cuatro ? style.panelActivo : style.panel }>
                     <p>  ¿Cómo abono a través de depósito/transferencia?</p>
                     <p>
                      Una vez se realiza el pedido, te facilitamos los datos del CBU. Debes abonar e informar el pago desde nuestra web, antes de la fecha de vencimiento de la
                      reserva.
                      </p>
                    </div>
      
                  <button className={style.accordion} onClick={() => setAcordeon({...acordeon, cinco: !acordeon.cinco})}>Pago Gamer</button>
                  <div className={acordeon.cinco ? style.panelActivo : style.panel }>
                  <p>  ¿Qué es pago gamer?</p>
                  <p>Es un método exclusivo de Compra Gamer, para abonar de manera online a través de tarjetas Visa y Mastercard, con el cual podés acceder a 3 y 12 cuotas sin
                     interés si empleas una tarjeta de crédito brindada por una entidad bancaria.</p>
                  </div>
      
              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, seis: !acordeon.seis})}>Mercado Pago</button>
              <div className={acordeon.seis ? style.panelActivo : style.panel }>
                <p>   ¿Cómo puedo abonar a través de MercadoPago?</p>
                <p>Podés hacerlo de tres formas: Con tarjetas online en cuotas (no se puede acceder a cuotas sin interés); A través de RapiPago/ PagoFácil (se abona al precio de
                  lista, pero no se pueden hacer cuotas, sólo se puede abonar en un pago); y realizando una transferencia desde tu cuenta de MercadoPago.</p>
              </div>
      
              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, siete: !acordeon.siete})}>Envios</button>
                  <div className={acordeon.siete ? style.panelActivo : style.panel }>
                  <p> ¿Cómo gestiono el envío de mi pedido?</p>
                  <p>Es un método exclusivo de Compra Gamer, para abonar de manera online a través de tarjetas Visa y Mastercard, con el cual podés acceder a 3 y 12 cuotas sin
                     interés si empleas una tarjeta de crédito brindada por una entidad bancaria.</p>
                  </div>
      
              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, ocho: !acordeon.ocho})}>Facturación</button>
              <div className={acordeon.ocho ? style.panelActivo : style.panel }>
              <p> ¿Cómo tramito la factura de mi compra?</p>
              <p>En primer lugar, para conocer el costo del envío, una vez al agregues al carrito tu compra, solo debes colocar tu código postal en el recuadro correspondiente, 
                seleccionar la mensajería de tu preferencia y elegir si deseas el retiro en alguna sucursal o la entrega a domicilio. Actualmente realizamos envíos a todo el país
                través de Oca y Andreani; y si te encontrás en CABA o alrededores, podrás seleccionar el servicio de Mensajería Privada que es exclusivo de Compra Gamer. Tené en cuenta que, para calcular el costo del envío, se toman en consideración tanto las dimensiones y peso del paquete como la distancia de la localidad de 
                entrega.
                </p>
              </div>
              <button className={style.accordion} onClick={() => setAcordeon({...acordeon, nueve: !acordeon.nueve})}>Compra Gamer te ayuda</button>
              <div className={acordeon.nueve ? style.panelActivo : style.panel }>
                  <p>¿Cuál es tu consulta?</p>
                  <p>
                  Para realizar una consulta es necesario que inicies sesión en tu cuenta.
                  </p>
                 <button 
                  className={style.logging} 
                  onClick={() => loginWithRedirect()}
                  >INICIAR SESIÓN</button>
                  
              </div>
              </>

    );
  }
  
  export default Acordeon;
