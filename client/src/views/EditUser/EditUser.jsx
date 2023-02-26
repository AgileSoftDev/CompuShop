import React, { useEffect, useState } from "react";
import { Formik, Field, From, ErrorMessage, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import style from "./EditUser.module.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { editUser } from "../../redux/actions/actions";



const EditUser = ()=>{
  
    const dispatch = useDispatch();
    const history = useHistory();
    const usuario = useSelector(state => state.User)
    console.log(usuario, "soy el usuario")
    const [formularioEnviado, setformularioEnviado] = useState(false);

    useEffect(() => {
       
        
        if(usuario) {
            setformularioEnviado({
                image: usuario.image,
                name: usuario.name,
                surname: usuario.surname,
                nickname: usuario.nickname,
                email: usuario.email,
                phone_number: usuario.phone_number,
                address: usuario.address,
            })
        }
       
       
    }, [usuario])

    return(
      
        
              <div id={style.container}>
              <div id={style.formulario}>
                
            <Formik
                initialValues={{
                    image: usuario?.image ? usuario.image : "",  
                    name: usuario?.name ? usuario.name : "",
                    surname: usuario?.surname ? usuario.surname : "",
                    nickname: usuario?.nickname ? usuario.nickname : "",
                    email: usuario?.email ? usuario.email : "",
                    phone_number: usuario?.phone_number ? usuario.phone_number : "",
                    address: usuario?.address ? usuario.address : "",
                }}
                 
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    dispatch(editUser(valores.email, valores));
                    setformularioEnviado(true);
                    setTimeout(() => setformularioEnviado(false), 5000);
                    history('/home')
                    window.location.reload()
                }}
                validate={(valores) => {
                    let error = {};

                    //Validacion del nombre
                    if(!valores.name) {
                        error.name = "Ingresa tu nombre"
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                        error.name = "Tu nombre debe tener solo letras"
                    }

                    //Validacion del apellido
                    if (!valores.surname) {
                        error.surname = "Ingresa tu Apellido";
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.surname)) {
                        error.surname = "Tu apellido debe contener solo letras";
                    }

                    // validacion del nick name
                    if (!valores.nickname) {
                        error.nickname = "Ingresa tu Sobrenombre";
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nickname)) {
                        error.nickname = "Tu nickname debe contener solo letras";
                    }

                    //Validacion del email
                    if (!valores.email) {
                        error.email = "Ingresa tu Email";
                    } else if (
                        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                        valores.email
                        )
                    ) {
                        error.email = "Tu email debe ser en formato mail(@)";
                    }

                    //Validacion del celular
                    if (!valores.phone_number) {
                        error.phone_number = "Ingresa tu Celular";
                    } else if (!/^[0-9,$]*$/.test(valores.phone_number)) {
                        error.phone_number = "Solo puedes escribir numeros";
                    }

                    //Valiudacion direccion
                    if (!valores.address) {
                        error.address = "Ingresa tu Direccion";
                    }
                    return error;
                }}
            >
                {({ errors }) => (
                    <Form className="formulario">
                       
                        <div id={style.container}>
                         <div id={style.formualario}>
                            <h1>ACTUALIZA TUS DATOS</h1>
                            <div className="formulario"></div>
                            <div id={style.formik}>
                                <div></div>
                            <label htmlFor="image">Imagen de perfil</label>
                            <Field type="text" id="image" name="image"/>
                            <label htmlFor="name">Nombre: </label>
                            <Field type="text" id="name" name="name" placeholder="Tu nombre" />
                            <ErrorMessage
                                name="name"
                                component={() => (
                                    <div>{errors.name}</div>
                                )}
                            />
                       

                        </div>
                        <label htmlFor="surname">Apellido: </label>
                        <Field
                            type="text"
                            id="surname"
                            name="surname"
                            placeholder="Tu apellido"
                        />
                        <ErrorMessage
                            name="surname"
                            component={() => (
                            <div>{errors.surname}</div>
                            )}
                        /> 
                        <label htmlFor="nickname">Nombre de Usuario: </label>
                        <Field
                            type="text"
                            id="nickname"
                            name="nickname"
                            placeholder="Jhon Cena"
                        />
                        <ErrorMessage
                            name="nickname"
                            component={() => (
                            <div>{errors.nickname}</div>
                            )}
                        /><label htmlFor="phone_number">Numero de telefono: </label>
                        <Field
                            type="text"
                            id="phone_number"
                            name="phone_number"
                            placeholder="000-0000000"
                        />
                        <ErrorMessage
                            name="phone_number"
                            component={() => (
                            <div>{errors.phone_number}</div>
                            )}
                        />
                        <label htmlFor="address">Direccion: </label>
                        <Field
                            type="text"
                            id="adrdess"
                            name="address"
                            placeholder="address"
                        />
                        <ErrorMessage
                            name="address"
                            component={() => (
                            <div>{errors.address}</div>
                            )}
                        /> <label htmlFor="email">Correo: </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="correo@correo.com"
                        />
                        <ErrorMessage
                            name="email"
                            component={() => (
                            <div>{errors.email}</div>
                            )}
                        />   
                        <button type="submit">Enviar</button>
                        {formularioEnviado && (
                        <p>Enviado con exito!</p>
                        )}
                        </div>
                       
                        <div>
                        
                        </div>
                        <div>
                        
                        </div>
                     
                        
                        </div>
                        <div>
                        
                        </div>
                        <div>
                        
                        <Link to='/profile'>Regresar</Link>
                        </div>
                    </Form>
                    
                )}
            </Formik>
            </div>
        </div>
       
    );
   
     } 

export default EditUser;