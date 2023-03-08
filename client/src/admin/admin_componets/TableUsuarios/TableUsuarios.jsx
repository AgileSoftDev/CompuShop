import React, { useEffect, useState } from 'react';
import style from './TableUsuarios.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import url from "../../../utils/deploy_back.js";
import swal from "sweetalert2"
const TableLoaded = ({allUsers}) => {
    console.log("HOLA")
    const [ setAllUsers] = useState([])
    // const [showUsers, setShowUsers] = useState(false);
    // const [selectedUsers, setSelectedUsers] = useState(null)
    const handleRevoke = async (user) => {
        try {
          const { data } = await axios.put(`${url}/users/delete/${user._id}`);
          if (data.message === 'User revoked successfully') {
            setAllUsers((prevState) =>
              prevState.filter((item) => item._id !== user._id)
            );
          }
          swal.fire({
            title: 'Se elimino el usuario con éxito',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timerProgressBar: 3000
          });
        } catch (error) {
            swal.fire({
                title: 'Error al eliminar el usuario',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Aceptar',
                timerProgressBar: 3000
              });
        }
      };
    return (
        <>
            <table className={style.card_table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Name</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        allUsers && allUsers?.map(Users => {
                            return (
                                    <tr key={Users._id}>
                                        <td>{Users.user_id}</td>
                                        <td>{Users.email}</td>
                                        <td>{Users.name}</td>
                                        <td id={style.sectionButtons}>
                                            <div>
                                                <button>Ver</button>
                                                <button>Editar</button>
                                            </div>
                                            <button onClick={()=> handleRevoke(Users)}>Revocar</button>
                                        </td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table> 
        </>
    )
}
const LoaderTableProducts = () => {
    // Acá iría el loadingUsers
    return (
        <div class={style.table}>
                <h1>LOADING....</h1>
        </div>
    )
}
const TableUsuarios = () => {
const [allUsers, setAllUsers] = useState([])
const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getallUsers =async()=>{
            const {data} = await axios.get(`${url}/users`).catch(error => alert("Error en la tabla usuarios de admin al obtener la data"));
            console.log(data)

            if (data.length) {
                setAllUsers(data)
                setLoading(false)
            }
        }
        getallUsers()
    }, [])
  return (
    <div id={style.ProductsPanelContainer}>
        {
            loading ? <div class={style.loader}></div> : undefined
        }
            
        <div id={style.card}>
            <h1>
                Usuarios
            </h1>
            <p>
                Administre los usuarios de CompuShop
            </p>
        </div>
        <div className={style.card}>
            
            <div className={style.card_header}>
                <div>
                    <input placeholder='Search...' className={style.searchBar}></input>
                </div>
                <div>
                    <Link  className={style.buttons} to={'/admin/users/add'}>Agregar Usuario</Link>
                    <button  className={style.buttons}>Mostrar Inactivos</button>
                </div>
            </div>
        <div className={style.card_body}>
            {
                loading
                ? (
                        <LoaderTableProducts/>
                ) 
                : (
                        <TableLoaded allUsers={allUsers}/>
                )
            }
        </div>
        <div className={style.card_footer}>
            <p>Compu Shop Management</p>
        </div>
        </div>
    </div>
  )
}
export default TableUsuarios