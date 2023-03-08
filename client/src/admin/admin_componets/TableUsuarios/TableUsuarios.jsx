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
          const { data } = await axios.put(`http://localhost:3001/users/${user._id}`);
          if (data.status == 200) {
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
      const handleEdit = async (user) => {
        try {
            if(user.isAdmin === false) {
            await axios.put(`http://localhost:3001/users/giveAdmin/${user._id}`).then((response) => {console.log(response)})
            
            }else if(user.isAdmin === true){
             await axios.put(`http://localhost:3001/users/removeAdmin/${user._id}`).then((response) => {console.log(response)})
            }
            
            
        } catch (error) {
            swal.fire({
                title: 'Error al editar el usuario',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Aceptar',
                timerProgressBar: 3000
              });
        }
      }
    return (
        <>
            <table className={style.card_table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        allUsers && allUsers?.map(Users => {
                            return (
                                    <tr key={Users._id}>
                                        {!Users.userid ? 
                                        <td>{Users._id}</td>
                                        : <td>{Users.userid}</td>}
                                        <td>{Users.email}</td>
                                        {!Users.name ? 
                                        <td>{Users.nickname}</td>
                                        : <td>{Users.name}</td>}
                                        <td><button onClick={()=>handleEdit(Users)}>{Users.isAdmin ? "Administrador" : "Cliente"}</button></td>
                                        <td id={style.sectionButtons}>
                                            <div>
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
            const {data} = await axios.get(`http://localhost:3001/users/db`);
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