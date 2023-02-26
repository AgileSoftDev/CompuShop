import React, { useEffect, useState } from 'react';
import style from './TableProductos.module.css';
import axios from 'axios';

const TableLoaded = ({allComponents}) => {
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
                                        <td>
                                            <button>Ver</button>
                                            <button>Editar</button>
                                            <button>Revocar</button>
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

const TableLoading = () => {
    return (
        <table class={style.table}>
            <thead>
                <tr>
                    <th><div className={style.thead}></div></th>
                    <th><div className={style.thead}></div></th>
                    <th><div className={style.thead}></div></th>
                    <th><div className={style.thead}></div></th>
                    <th><div className={style.thead}></div></th>
                    <th><div className={style.thead}></div></th>
                </tr>
            </thead>
            <tbody>
                <tr className={style.tr}>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                </tr>
                <tr className={style.tr}>
                                           <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                </tr>
                <tr className={style.tr}>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                </tr>
                <tr className={style.tr}>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                    <td className={style.td}><div className={style.loader}></div></td>
                </tr>
            </tbody>
        </table>
    )
}

const TableProductos = () => {

const [allComponents, setAllComponentes] = useState([])
const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAllComponents =async()=>{
            const {data} = await axios.get("https://compu-shop.vercel.app/components").catch(error => alert("Error en la tabla productos de admin al obtener la data"));
            if (data.length) {
                setAllComponentes(data)
                setLoading(false)
            }
        }
        getAllComponents()
    }, [])


    


  return (
    <>
        {
            loading ? <div class={style.loader}></div> : ''
        }
            
        <div className={style.card}>
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

                    <button role="button" className={style.button1}>Agregar Producto</button>
                    <button role="button" className={style.button1}>Mostrar Inactivos</button>
                </div>
            </div>
        <div className={style.card_body}>
            {
                loading
                ? (
                        <TableLoading/>
                ) 
                : (
                        <TableLoaded allComponents={allComponents}/>
                )
            }
        </div>
        <div className={style.card_footer}>
            <p>Este es el pie de página de la card</p>
        </div>
        </div>
    </>
  )
}

export default TableProductos