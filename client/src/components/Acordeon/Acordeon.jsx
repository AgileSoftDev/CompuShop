import React from 'react';  
//import {Accordion,body, Header} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Acordeon.css';
import { useAuth0 } from "@auth0/auth0-react";

function Acordeon () { 
     const { loginWithRedirect } = useAuth0();
    return (
        <div id={style.Container}>
      <Accordion id={style.Accordion}>
<h1>Preguntas Frecuentes</h1>
        <Accordion.Item eventKey="0">
        
          <Accordion.Header>Realizar un pedido</Accordion.Header>
          <Accordion.Body>
          <Accordion.Body>
             ¿Cómo realizo un pedido?
          </Accordion.Body>
         

          Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras, para conocer el costo del envío colocás tu código 
          postal en el recuadro correspondiente, elegís la mensajería de tu preferencia y debajo seleccionas la forma de pago. Luego hacés clic en el botón COMPRAR y 
          podés acceder como cliente (si ya tenés cuenta en Compra Gamer) o crear un cliente nuevo. Por último, completás los pasos brindados por el asistente, hasta 
          confirmar la compra. Se te asignará un número de pedido y se mostrarán los datos del mismo. También enviaremos un mail a tu correo electrónico registrado 
          con los detalles del pedido realizado.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Precio</Accordion.Header>
          <Accordion.Body>
             ¿El precio que figura en la web es el precio final?
          </Accordion.Body>
          
          <Accordion.Body>
          Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Formas de Pago</Accordion.Header>
          <Accordion.Body>
            ¿Cuáles son las formas de pago?
          </Accordion.Body>
            
          <Accordion.Body>
      

          Contamos con dos formas de pago: a través de depósito/transferencia bancaria, con la cual obtenés el precio especial, o bien, a través de los métodos Pago 
          Gamer (Visa o MasterCard) o MercadoPago (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar en cuotas, al precio de lista.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="0">
          <Accordion.Header>Deposito- Transferencia bancaria</Accordion.Header>
          <Accordion.Body>
             ¿Cómo abono a través de depósito/transferencia?
          </Accordion.Body>
         
          <Accordion.Body>
      
          Una vez se realiza el pedido, te facilitamos los datos del CBU. Debes abonar e informar el pago desde nuestra web, antes de la fecha de vencimiento de la
           reserva.
          
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pago Gamer</Accordion.Header>
          <Accordion.Body>
              ¿Qué es Pago Gamer?
          </Accordion.Body>
      
          <Accordion.Body>
          Es un método exclusivo de Compra Gamer, para abonar de manera online a través de tarjetas Visa y Mastercard, con el cual podés acceder a 3 y 12 cuotas sin
          interés si empleas una tarjeta de crédito brindada por una entidad bancaria.


          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Mercado Pago</Accordion.Header>
          <Accordion.Body>
          <Accordion.Body>
              ¿Cómo puedo abonar a través de MercadoPago?
          </Accordion.Body>
          </Accordion.Body>
        
          <Accordion.Body>
          Podés hacerlo de tres formas: Con tarjetas online en cuotas (no se puede acceder a cuotas sin interés); A través de RapiPago/ PagoFácil (se abona al precio de
           lista, pero no se pueden hacer cuotas, sólo se puede abonar en un pago); y realizando una transferencia desde tu cuenta de MercadoPago.

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Envios</Accordion.Header>
          <Accordion.Body>
              ¿Cómo gestiono el envío de mi pedido? 
          </Accordion.Body>
       
          <Accordion.Body>
          En primer lugar, para conocer el costo del envío, una vez al agregues al carrito tu compra, solo debes colocar tu código postal en el recuadro correspondiente, 
          seleccionar la mensajería de tu preferencia y elegir si deseas el retiro en alguna sucursal o la entrega a domicilio. Actualmente realizamos envíos a todo el país
          través de Oca y Andreani; y si te encontrás en CABA o alrededores, podrás seleccionar el servicio de Mensajería Privada que es exclusivo de Compra Gamer. Tené en cuenta que, para calcular el costo del envío, se toman en consideración tanto las dimensiones y peso del paquete como la distancia de la localidad de 
          entrega.

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Facturación</Accordion.Header>
          <Accordion.Body>
            ¿Cómo tramito la factura de mi compra?
          </Accordion.Body>
        
          <Accordion.Body>
          En todas las compras efectuadas en la web, brindamos sin excepción alguna, la factura de compra. Una vez que realiza y abona el pedido, enviamos a tu 
          dirección de correo electrónico la factura correspondiente. Por supuesto, también podés descargarla desde la sección Mi cuenta Mis facturas. En caso de que
           precises factura A, solo debes ingresar tu CUIT al cargar el pedido por la web. Tené en cuenta que la factura A puede tener percepciones.

          </Accordion.Body>
        </Accordion.Item>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Compra Gamer te ayuda. ¿Cuál es tu consulta?</Accordion.Header>
        <Accordion.Body>
        Para realizar una consulta es necesario que inicies sesión en tu cuenta
        </Accordion.Body>
       
        <button 
    className={style.logging} 
    onClick={() => loginWithRedirect()}
    >INICIAR SESIÓN</button>
      </Accordion.Item>
    </Accordion>
      </Accordion>
      </div>
    );
  }
  
  export default Acordeon;