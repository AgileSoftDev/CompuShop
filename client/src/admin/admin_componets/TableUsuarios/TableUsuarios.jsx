import React, { useEffect, useState } from 'react';
import style from './TableUsuarios.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import url from "../../../utils/deploy_back.js";
import swal from "sweetalert2";
import { useAuth0, User } from '@auth0/auth0-react';

const TableLoaded = ({allUsers = [], setAllUsers, setLoading}) => {
    const { user } = useAuth0();

    const handleRevoke = async (user) => {
        try {
          await axios.put(`${url}/users/${user._id}`)
            .then(() => {
                getallUsers(setAllUsers,setLoading)
                swal.fire({
                  title: 'Se elimino el usuario con éxito',
                  icon: 'success',
                  confirmButtonText: 'Aceptar',
                  timerProgressBar: 3000
                });
            })
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
            await axios.put(`${url}/users/giveAdmin/${user._id}`).then((response) => {console.log(response)})
            
            }else if(user.isAdmin === true){
             await axios.put(`${url}/users/removeAdmin/${user._id}`).then((response) => {console.log(response)})
            }
            getallUsers(setAllUsers,setLoading)
        } catch (error) {
            swal.fire({
                title: 'Error al cambiar de rol del usuario',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Aceptar',
                timerProgressBar: 3000
              });
        }
      }
    return (
        <div id={style.tableContainer}>
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
                            if(Users.isActive && Users.email !== user.email ){
                                return (
                                        <tr key={Users._id}>
                                            {!Users.userid ? 
                                            <td>{Users._id}</td>
                                            : <td>{Users.userid}</td>}
                                            <td>{Users.email}</td>
                                            {!Users.name ? 
                                            <td>{Users.nickname}</td>
                                            : <td>{Users.name}</td>}
                                            <td id={style.roleee}>
                                            {
                                                Users.isAdmin 
                                                ? (
                                                    <button  
                                                        onClick={()=>handleEdit(Users)}
                                                        className={style.buttonRoleAdmin}
                                                    >
                                                        <span>Administrador</span> 
                                                    </button>
                                                )
                                                : (
                                                    <button  
                                                        onClick={()=>handleEdit(Users)}
                                                        className={style.buttonRoleClient}
                                                    >
                                                        <span>Cliente</span> 
                                                    </button>
                                                )
                            }
                                            </td>
                                            <td id={style.sectionButtons}>
                                           
                                                <button onClick={()=> handleRevoke(Users)}>Revocar</button>
                                            </td>
                                        </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table> 
        </div>
    )
}

const TableLoadedInactive = ({allUsers = [], setAllUsers, setLoading}) => {
    const { user } = useAuth0();
    // const [showUsers, setShowUsers] = useState(false);
    // const [selectedUsers, setSelectedUsers] = useState(null)
    
    const handleRestore = async (user) => {
        try {
          await axios.put(`${url}/users/activate/${user._id}`)
            .then((res) => {
                console.log(`🚀 ~ file: TableUsuarios.jsx:14 ~ .then ~ res:`, res) 
                	getallUsers(setAllUsers,setLoading)
                	swal.fire({
                  	title: 'Se restauro el usuario con éxito',
                  	icon: 'success',
                  	confirmButtonText: 'Aceptar',
                  	timerProgressBar: 3000
                	});
            	});
        } catch (error) {
            swal.fire({
                title: 'Error al restaurar el usuario',
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
                            if(Users.isActive === false && Users.email !== user.email ){
                                return (
                                        <tr key={Users._id}>
                                            {!Users.userid ? 
                                            <td>{Users._id}</td>
                                            : <td>{Users.userid}</td>}
                                            <td>{Users.email}</td>
                                            {!Users.name ? 
                                            <td>{Users.nickname}</td>
                                            : <td>{Users.name}</td>}
                                        
                                            <td>
                                                <button style={{backgroundColor: 'green', color: 'beige', height: '30px', width: '100px', borderRadius: '8px' }} onClick={()=> handleRestore(Users)}>Restaurar</button>
                                            </td>
                                        </tr>
                                )
                            }
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

const getallUsers =async(setAllUsers,setLoading)=>{
    const {data} = await axios.get(`${url}/users/db`);
    console.log(data)

    if (data.length) {
        setAllUsers(data)
        setLoading(false)
    }
}

const TableUsuarios = () => {
const [allUsers, setAllUsers] = useState([])
const [loading, setLoading] = useState(true)
const [tableActive, setTableActive] = useState(true)

const [searchTerm, setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState([]);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
      };
      
    useEffect(() => {
        getallUsers(setAllUsers,setLoading)
    }, []) // ! el montaje

    useEffect(() => {
        setSearchResults(allUsers);
      }, [allUsers]); // ! actualizado el componente

    useEffect(() => {
        const results = allUsers.filter(item =>
          item.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]); // ! cuandop se busca se actualiza el componente
    //     getallUsers(setAllUsers,setLoading, searchUsuario)
    // }, [])

    const searchUsuario = async(value) => {
        return await axios.get(`${url}/users/db/${value}`)
        .then(res => {
          // Si la respuesta es un array, devolverla tal cual
          if(Array.isArray(res.data)){
            return res.data;
          }
          // Si la respuesta no es un array, devolverla dentro de un array
          else {
            return [res.data];
          }
        })
        .catch(error => {
          console.log(error);
          return []; // Devolver un array vacío si hay un error
        });
      };
      
    //   const handleSearch = async (value) => {
    //     const data1 = await searchUsuario(value);
    //     if(data1){
    //       const filterName = allUsers.filter(e=> e.email.toLowerCase().includes(value.toLowerCase()))
    //       console.log(filterName)
    //       if (Array.isArray(filterName)) {
    //         setAllUsers(filterName)
    //       } else {
    //         // swal.fire({
    //         //     title: 'Error al encontrar el usuario',
    //         //     text: "No existe ningun usuario con ese nombre",
    //         //     icon: 'error',
    //         //     confirmButtonText: 'Aceptar',
    //         //     timerProgressBar: 3000
    //         //   })
    //       }
    //       setLoading(false)
    //     } 
    //   };
      
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
                 
                    <input placeholder='Search...' 
                        className={style.searchBar} type="text" value={searchTerm} onChange={handleSearch} />
                </div>
                <div>
                    <button  className={style.buttons} onClick={() => setTableActive(!tableActive)}>Mostrar {tableActive ? 'inactivos' : 'activos'}</button>
                </div>
            </div>
        <div id={style.card_body}>
            {
                loading
                ? (
                        <LoaderTableProducts/>
                ) 
                : (
                        tableActive
                        ? (<TableLoaded allUsers={searchResults} setAllUsers={setAllUsers} setLoading={setLoading}/>)
                        : (<TableLoadedInactive allUsers={searchResults} setAllUsers={setAllUsers} setLoading={setLoading}/>)
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