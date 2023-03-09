import React, { useEffect, useState } from 'react';
import style from './TableProductos.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import url from "../../../utils/deploy_back.js";
import swal from "sweetalert2"
import ModalVer from './ModalVer';
import ModalEdit from './ModalEditar';

const TableLoaded = ({allComponents, setAllComponents , setLoading, isActive}) => {
    const [componentOnVer, setComponenOnVer]=useState({})
    const [componentOnEdit, setComponenOnEdit]=useState({})
    const handleRevoke = async (component) => {
        try {
            console.log(`🚀 ~ file: TableProductos.jsx:14 ~ handleRevoke ~ component:`, component._id)
          await axios.put(`${url}/components/delete/${component._id}`)
            .then((res) => {
                console.log(`🚀 ~ file: TableProductos.jsx:17 ~ .then ~ res:`, res)
                getAllComponents(setAllComponents, setLoading)
                swal.fire({
                  title: 'Se elimino el producto con éxito',
                  icon: 'success',
                  confirmButtonText: 'Aceptar',
                  timerProgressBar: 3000
                });
            });
        } catch (error) {
            console.log(`🚀 ~ file: TableProductos.jsx:27 ~ handleRevoke ~ error:`, error)
            swal.fire({
                title: 'Error al eliminar el producto',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Aceptar',
                timerProgressBar: 3000
              });
        }
      };

    const handleRestore = async (component) => {
        try {
          await axios.put(`${url}/components/activate/${component._id}`);
          getAllComponents(setAllComponents, setLoading)
          swal.fire({
            title: 'Se restauro el producto con éxito',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timerProgressBar: 3000
          });
        } catch (error) {
            swal.fire({
                title: 'Error al eliminar el producto',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Aceptar',
                timerProgressBar: 3000
              });
        }
      };
    
    return (
        <div>
            <table className={style.card_table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Categoria</th>
                        <th>Marca</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        allComponents && allComponents?.map(component => {
                            if(component.isActive === isActive) {
                                return (
                                        <tr key={component._id}>
                                            <td>{component._id}</td>
                                            <td>{component.category}</td>
                                            <td>{component.maker}</td>
                                            <td>{component.name}</td>
                                            <td>{component.price}</td>
                                            <td>{component.quantityStock}</td>
                                            {
                                                isActive
                                                ? (
                                                    <td id={style.sectionButtons}>
                                                        <div>
                                                            <span onClick={()=>setComponenOnVer({...component,visible:true})}>Ver</span>
                                                            {/* <span onClick={()=>setComponenOnEdit({...component,visible:true})}>Editar</span> */}
                                                        </div>
                                                        <button onClick={()=> handleRevoke(component)}>Revocar</button>
                                                    </td>
                                                )
                                                : (
                                                    <td id={style.sectionButtons}>
                                                        <button onClick={()=> handleRestore(component)}>Restaurar</button>
                                                    </td>
                                                )
                                            }

                                        </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table> 
           {componentOnVer.visible?( <div id={style.modalVerContainer}>
                    <div>
                        <ModalVer component={componentOnVer} close={setComponenOnVer}></ModalVer>
                    </div>
            </div>):undefined}           
            {componentOnEdit.visible?( <div id={style.modalVerContainer}>
                    <div>
                        <ModalEdit component={componentOnVer} close={setComponenOnEdit}></ModalEdit>
                    </div>
            </div>):undefined}
        </div>
        
    )
}

const LoaderTableProducts = () => {
    return (
        <div class={style.table}>
                <h1>LOADING....</h1>
        </div>
    )
}

const getAllComponents = async(callback,callbackLoading)=>{
    const {data} = await axios.get(`${url}/components/`).catch(error => alert("Error en la tabla productos de admin al obtener la data"));
    if (data.length) {
        callback(data)
        callbackLoading(false)
    }
}

const TableProductos = () => {

    const [allComponents, setAllComponents] = useState([])
    const [isActive, setIsActive] = useState(true)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllComponents(setAllComponents, setLoading)
    }, [])

    const searchComponentDos = (value) => {
        return axios.get(`${url}/components?name=${value}`)
        .then(res=>res.data)
        .catch(error=>swal.fire({
            title: 'Error al encontrar el producto',
            text: "No existe ningun producto con ese nombre",
            icon: 'error',
            confirmButtonText: 'Aceptar',
            timerProgressBar: 3000
          }))
     };
     const handleSearch = async (value) => {
         const data1 = await searchComponentDos(value);
        //  console.log(value)
        const filterName= data1.map((e)=>({
            name: e.name,
            price: e.price,
            category: e.category,
            _id: e._id,
            maker: e.maker,
            quantityStock: e.quantityStock
        }))
        setAllComponents(filterName)
        setLoading(false)
      };
      

    return (
        <div id={style.ProductsPanelContainer}>
            {
                loading ? <div class={style.loader}></div> : undefined
            }
                
            <div id={style.card}>
                <h1>
                    Productos
                </h1>
                <p>
                    Administre los productos de CompuShop
                </p>
            </div>
            <div className={style.card}>
                
                <div className={style.card_header}>
                    <div>
                        {/* <input onChange={(e)=>handleSearch(e.target.value)}placeholder='Search by name...' className={style.searchBar} ></input> */}
                    </div>
                    <div>
                        <Link  className={style.buttons} to={'/admin/products/add'}>Agregar Producto</Link>
                        <button  className={ isActive ? style.buttonsInactive : style.buttonsActive } onClick={() => { console.log(isActive); return setIsActive(!isActive)}}>Mostrar {isActive ? 'inactivos' : 'activos'}</button>
                    </div>
                </div>
            <div className={style.card_body}>
                {
                    loading
                    ? (
                            <LoaderTableProducts/>
                    ) 
                    : (
                        <TableLoaded 
                            allComponents={allComponents}
                            setAllComponents={setAllComponents}
                            setLoading={setLoading}
                            isActive={isActive}
                        />
                            
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

export default TableProductos