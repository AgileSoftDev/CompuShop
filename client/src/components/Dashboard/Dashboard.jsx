import style from "./Dashboard.module.css"
import items from "./sidebar.json"
import { useState } from "react"
import arrow from "../../assets/category_filtros/orange_arrow.svg";
import {useDispatch} from 'react-redux';
import { filterByCategory } from "../../redux/actions/actions";
import { useSelector } from "react-redux";

export default function Sidebar(){
    const dispatch = useDispatch()
    const [open, setOpen] = useState()
    const categoryPick = useSelector(s=>s.categoryPick)


    return (
        <div id= {style.SidebarContainer}>
            
            <img src="https://hubspot.contentools.com/api/v1/media/144652/download/" className="img"  />
            <h1 >CompuShot</h1>
            <div>
            
                 
            <div>
                    { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                          Agregar Producto 
            </div> 
                                 
                                 </div> 
                    </div>
                    
                
                
                
                
             
            
    )
}