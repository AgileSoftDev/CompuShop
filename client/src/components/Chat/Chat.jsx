import React from "react";
import ChatBot from 'react-simple-chatbot';



const Chat = () => {

    return(
        <ChatBot
            steps={[
                {
                    id: '1',
                    message: 'Bienvenido al soporte de CompuShop. Digite su nombre a continuación.',
                    trigger: '2',
                },
                {
                    id: '2',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: '¡Hola {previousValue}, un gusto poder ayudarte!',
                    trigger: "4",
                },
                {
                    id: '4',
                    message: '¿En que te podemos ayudar?',
                    trigger: '5',
                },

                ////// MENU PRINCIPAL //////
                {
                    id: '5',
                    options: [
                    { value: 1, label: 'Mi cuenta', trigger: 'micuenta' },
                    { value: 2, label: 'Compras', trigger: 'compras' },
                    { value: 3, label: 'Armar mi PC', trigger: 'armarpc' },
                    { value: 4, label: 'Componentes', trigger: 'componentes' },
                    { value: 5, label: 'Otras consultas', trigger: 'otras' },
                    ],
                },

                ////// OPCION MI CUENTA //////
                {
                    id: 'micuenta',
                    options: [
                        { value: 1, label:'Iniciar Sesion', trigger: 'iniciarsesion'},
                        { value: 2, label:'Perfil', trigger: 'perfil'},
                    ]
                },
                {
                    id: 'iniciarsesion',
                    message: 'Puedes elegir distintos tipos de inicio de sesion hacinedo click en el boton de la parte superior derecha de tu pantalla. Puedes iniciar con tus cuentas de preferencia o registrarte con tu email.',
                    trigger: 'otraconsulta'
                },
                {
                    id: 'perfil',
                    message: 'Haciendo click en tu foto de perfil puedes acceder al detalle de tu perfil en donde encontraras tus datos, compras, reviews, entre otros.',
                    trigger: 'otraconsulta'
                },

                ////// OPCION COMPRAS //////
                {
                    id: 'compras',
                    options: [
                        { value: 1, label:'Metodos de Pago', trigger: 'pago'},
                        { value: 2, label:'Mi Carrito', trigger: 'carrito'},
                        { value: 3, label:'Mis compras', trigger: 'miscompras'},
                    ]
                },
                {
                    id: 'pago',
                    message: 'Puedes abonar tu compra con tu cuenta de PayPal o puedes seleccionar la opcion de Tarjetas en la que podras pagar con tu tarjeta de preferencia (credito y debito)',
                    trigger: 'otraconsulta'
                },
                {
                    id: 'carrito',
                    message: 'En la seccion de tu carrito podras agregar o remover cantidades de los productos que previamente agregaste. Tambien tendras un boton directo para realizar el pago de tu compra.',
                    trigger: 'otraconsulta'
                },
                {
                    id: 'miscompras',
                    message: 'En la seccion de tu perfil podras encontrar una seccion dedicada a tus compras realizadas, pudiendo ver el detalle de las mismas.',
                    trigger: 'otraconsulta'
                },

                ////// OPCION ARMAR PC //////
                {
                    id: 'armarpc',
                    message: 'En esta seccion podras armar tu pc adaptada a tus gustos y necesidades. Tendras la opcion de elegir cada uno de los componentes compatibles eligiendo por tu marca y modelo de preferencia. Luego de finalizar el armado de tu pc podras clickear en el boton Finalizar para realizar la compra del mismo.',
                    trigger: 'otraconsulta',
                },
                
                ////// OPCION COMPONENTES //////
                {
                    id: 'componentes',
                    message: 'En esta seccion podras seleccionar tus componentes favoritos, en el menu de la izquierda tendras botones para filtrar los componentes por las marcas de tu preferencia. Tambien puedes clickear en un componente para acceder al detalle del mismo. Ademas puedes cambiar la vista de tus componentes en el boton de tu derecha.',
                    trigger: 'otraconsulta',
                },
                {
                    id: 'otras',
                    message: 'Por otras consultas comunicarse con nosotros via email: compushoppf@gmail.com',
                    trigger: 'otraconsulta',
                },


                ////// OTRA CONSULTA FINAL //////
                {
                    id: 'otraconsulta',
                    message: 'Deseas hacer otra consulta?',
                    trigger: 'opcionfinal'
                },
                {
                    id: 'opcionfinal',
                    options: [
                        { value: 1, label:'Si', trigger: '4'},
                        { value: 2, label:'No', trigger: 'final'},
                    ]
                },
                {
                    id: 'final',
                    message: 'Puedes volver a la ayuda en linea cuando quieras. ¡Hasta la proxima!',
                    end: true,
                },

                ]}
                
            />
    )
}

export default Chat
