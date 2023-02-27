import React, { useEffect, useState } from 'react';
import style from './TableProductos.module.css';
import axios from 'axios';

const url= "https://compu-shop-5xi1u15qp-compushop.vercel.app"

const TableProductos = () => {

const [allComponents, setAllComponentes] = useState([])

    useEffect(() => {
        const getAllComponents =async()=>{
            const {data} = await axios.get(`${url}/components`).catch(error => alert("Error en la tabla productos de admin al obtener la data"));
            if (data.length)setAllComponentes(data)    
        }
        getAllComponents()
    }, [])
    
  return (
    <div id={style.ProductPanelContainer}>
        <div>
            <h1>
                Administración de Productos
            </h1>
        </div>
        <div id={style.containerTable}>
            <table id={style.table}>
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
                                    <td id={style.buttonSection}>
                                        <div>
                                        <button>Ver</button>
                                        <button>Editar</button>
                                        </div>
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