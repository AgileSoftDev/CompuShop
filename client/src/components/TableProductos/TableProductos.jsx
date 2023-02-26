import React, { useEffect } from 'react'
import {useDispatch ,useSelector} from "react-redux"
import { getAllComponents } from '../../redux/actions/actions';
import style from './TableProductos.module.css'

const TableProductos = () => {
    const dispatch = useDispatch();
    const allComponents = useSelector(store => store.allComponents);

    useEffect(() => {
      dispatch(getAllComponents())
    }, [])
    
  return (
    <div>
        <div id={style.containerTitle}>
            <h1>
                Productos
            </h1>
            <p>
                Administre los productos de CompuShop
            </p>
        </div>
        <div id={style.containerTable}>
            <table style={style.table}>
                <tr>
                    <th>ID</th>
                    <th>Categoria</th>
                    <th>Marca</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                </tr>
                {
                    allComponents && allComponents.map(component => {
                        return (
                                <tr key={component._id}>
                                    <td>{component._id}</td>
                                    <td>{component.category}</td>
                                    <td>{component.maker}</td>
                                    <td>{component.name}</td>
                                    <td>{component.price}</td>
                                    <td>{component.description}</td>
                                    <td>
                                        <button>Ver</button>
                                        <button>Editar</button>
                                        <button>Revocar</button>
                                    </td>
                                </tr>
                        )
                    })
                }
            </table> 
        </div>
    </div>
  )
}

export default TableProductos