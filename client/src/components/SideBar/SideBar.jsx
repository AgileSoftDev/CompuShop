import style from "./SideBar.module.css"
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
            <h1>CATEGORÍAS</h1>
            <div>
                  
                <div  id={style.categoryContainer} >
                    <div id={style.categoryTitle} onClick={() => open !== "Procesadores"? setOpen("Procesadores"): setOpen(!"Procesadores")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            Procesadores    
                        </div> 
                        <img className={style.arrows} id={open === "Procesadores"?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open === "Procesadores" ? style.categoryActive : style.categoryDesactive}>
                        <span id={categoryPick=== "Procesadores INTEL" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory('CPU',"INTEL","Procesadores INTEL"))}>
                            Procesadores INTEL
                            </p>
                         </span>  
                         <span id={categoryPick=== "Procesadores AMD" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory("CPU","AMD","Procesadores AMD"))}>
                            Procesadores AMD
                            </p>
                         </span> 
                                
                    </div>
                </div>  

                <div  id={style.categoryContainer} >
                    <div id={style.categoryTitle} onClick={() => open !== "MothearBoards"? setOpen("MothearBoards"): setOpen(!"MothearBoards")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            MothearBoards    
                        </div> 
                        <img className={style.arrows} id={open === "MothearBoards" ?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open === "MothearBoards" ? style.categoryActive : style.categoryDesactive}>
                        <span id={categoryPick=== "MothearBoards INTEL" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory('BOARD',"INTEL","MothearBoards INTEL"))}>
                            MothearBoards INTEL
                            </p>
                         </span>  
                         <span id={categoryPick=== "MothearBoards AMD" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory("BOARD","AMD","MothearBoards AMD"))}>
                            MothearBoards AMD
                            </p>
                         </span> 
                                
                    </div>
                </div>                                  
                <div  id={style.categoryContainer} >
                    <div id={style.categoryTitle} onClick={() => open !== "Placas de Video"? setOpen("Placas de Video"): setOpen(!"Placas de Video")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            Placas de Video   
                        </div> 
                        <img className={style.arrows} id={open=== "Placas de Video"?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open=== "Placas de Video" ? style.categoryActive : undefined}>
                        <span id={categoryPick=== "Placas de Video GeForce" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory('GPU',"GeForce","Placas de Video GeForce"))}>
                            Placas de Video GeForce
                            </p>
                         </span>  
                         <span id={categoryPick=== "Placas de Video Radeon AMD" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory("GPU","Radeon","Placas de Video Radeon AMD"))}>
                            Placas de Video Radeon AMD
                            </p>
                         </span> 
                                
                    </div>
                </div>                                  
                <div  id={style.categoryContainer} >
                    <div id={style.categoryTitle} onClick={() => open !== "Memorias RAM"? setOpen("Memorias RAM"): setOpen(!"Memorias RAM")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            Memorias RAM  
                        </div> 
                        <img className={style.arrows} id={open === "Memorias RAM" ?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open === "Memorias RAM" ? style.categoryActiveOneElement : undefined}>
                        <span id={categoryPick=== "Memorias RAM" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory('RAM',"","Memorias RAM"))}>
                            Memorias RAM
                            </p>
                         </span>  
                         {/* <span> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory("RAM"))}>
                            Memorias Notebook
                            </p>
                         </span>  */}
                                
                    </div>
                </div>                                  
                <div  id={style.categoryContainer} >
                    <div id={style.categoryTitle} onClick={() => open !== "Almacenamiento"? setOpen("Almacenamiento"): setOpen(!"Almacenamiento")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            Almacenamiento    
                        </div> 
                        <img className={style.arrows} id={open==="Almacenamiento"?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open==="Almacenamiento" ? style.categoryActive : style.categoryDesactive}>
                        <span id={categoryPick=== "Discos Duros" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory('STORAGE',"","Discos Duros"))}>
                            Discos Duros
                            </p>
                         </span>  
                         <span id={categoryPick=== "Placas de Video" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory("SSD","","Discos Solidos SDD"))}>
                            Discos Solidos SDD
                            </p>
                         </span> 
                                
                    </div>
                </div>                                  
                <div  id={style.categoryContainer} >
                    <div id={style.categoryTitle} onClick={() => open !== "Fuentes"? setOpen("Fuentes"): setOpen(!"Fuentes")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            Fuentes 
                        </div> 
                        <img className={style.arrows} id={open === "Fuentes"?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open === "Fuentes"? style.categoryActiveOneElement : undefined}>
                        <span id={categoryPick=== "Fuentes de Alimentación" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory('FUENTE',"","Fuentes de Alimentación"))}>
                            Fuentes de Alimentación
                            </p>
                         </span>  

                    </div>
                </div>                                  
                <div  id={style.categoryContainer} >
                    <div id={style.categoryTitle} onClick={() => open !== "Gabinetes"? setOpen("Gabinetes"): setOpen(!"Gabinetes")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            Gabinetes   
                        </div> 
                        <img className={style.arrows} id={open==="Gabinetes"?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open==="Gabinetes" ? style.categoryActiveOneElement : undefined}>
                        <span id={categoryPick=== "Gabinetes" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory('CHASIS',"","Gabinetes"))}>
                            Gabinetes
                            </p>
                         </span>  

                                
                    </div>
                </div>                                                                                                        
                     
            </div>
        </div>
    )
}