import React, { useEffect, useState } from 'react';
import style from './TableProductos.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import url from "../../../utils/deploy_back.js";
import swal from "sweetalert2"
const TableLoaded = ({allComponents}) => {
    const [ setAllComponentes] = useState([])
    const handleRevoke = async (component) => {
        try {
          const { data } = await axios.delete(`${url}/components/${component._id}`);
          if (data.message === 'Component revoked successfully') {
            setAllComponentes((prevState) =>
              prevState.filter((item) => item._id !== component._id)
            );
          }
          swal.fire({
            title: 'Se elimino el producto con éxito',
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
        <>
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
                            return (
                                    <tr key={component._id}>
                                        <td>{component._id}</td>
                                        <td>{component.category}</td>
                                        <td>{component.maker}</td>
                                        <td>{component.name}</td>
                                        <td>{component.price}</td>
                                        <td>{component.quantityStock}</td>
                                        <td id={style.sectionButtons}>
                                            <div>
                                                <button>Ver</button>
                                                <button>Editar</button>
                                            </div>
                                            <button onClick={()=> handleRevoke(component)}>Revocar</button>
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
    // Acá iría el loadingComponent
    return (
        <div class={style.table}>
                <h1>LOADING....</h1>
        </div>
    )
}

const TableProductos = () => {

const [allComponents, setAllComponentes] = useState([])

const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAllComponents =async()=>{
            const {data} = await axios.get(`${url}/components/`).catch(error => alert("Error en la tabla productos de admin al obtener la data"));
            if (data.length) {
                setAllComponentes(data)
                setLoading(false)
            }
        }
        getAllComponents()
    }, [])
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
                    <input placeholder='Search...' className={style.searchBar}></input>
                </div>
                <div>
                    <Link  className={style.buttons} to={'/admin/products/add'}>Agregar Producto</Link>
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
                        <TableLoaded allComponents={allComponents}/>
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