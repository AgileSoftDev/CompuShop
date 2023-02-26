import React, { useEffect, useState } from 'react';
import style from './TableProductos.module.css';
import axios from 'axios';
// import { set } from 'immer/dist/internal';

const TableProductos = () => {

const [allComponents, setAllComponentes] = useState([])

    useEffect(() => {
        const getAllComponents =async()=>{
            const {data} = await axios.get("http://localhost:3001/components").catch(error => alert("Error en la tabla productos de admin al obtener la data"));
            if (data.length)setAllComponentes(data)    
        }
        getAllComponents()
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
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Categoria</th>
                        <th>Marca</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr> 
                </thead>
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