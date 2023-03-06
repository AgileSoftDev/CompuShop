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
                    <div id={style.categoryTitle} onClick={() => open !== "MotherBoards"? setOpen("MotherBoards"): setOpen(!"MotherBoards")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            MotherBoards    
                        </div> 
                        <img className={style.arrows} id={open === "MotherBoards" ?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open === "MotherBoards" ? style.categoryActive : style.categoryDesactive}>
                        <span id={categoryPick=== "MotherBoards INTEL" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory("MotherBoard","INTEL","MotherBoards INTEL"))}>
                            MotherBoards INTEL
                            </p>
                         </span>  
                         <span id={categoryPick=== "MotherBoards AMD" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory("MotherBoard","AMD","MotherBoards AMD"))}>
                            MotherBoards AMD
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
                         <span id={categoryPick=== "Discos Solidos SDD" ? style.categoryPick : undefined}> 
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

                <div  id={style.categoryContainer} >
                    <div id={style.categoryTitle} onClick={() => open !== "Monitores"? setOpen("Monitores"): setOpen(!"Monitores")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            Monitores 
                        </div> 
                        <img className={style.arrows} id={open === "Monitores"?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open === "Monitores"? style.categoryActiveOneElement : undefined}>
                        <span id={categoryPick=== "Monitores" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory('Monitor',"","Monitores"))}>
                            Monitores
                            </p>
                         </span>  
                              
                    </div>
                </div>   

                <div  id={style.categoryContainer} >
                    <div id={style.categoryTitle} onClick={() => open !== "Auriculares"? setOpen("Auriculares"): setOpen(!"Auriculares")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            Auriculares 
                        </div> 
                        <img className={style.arrows} id={open === "Auriculares"?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open === "Auriculares"? style.categoryActiveOneElement : undefined}>
                        <span id={categoryPick=== "Auriculares" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory('Headset',"","Auriculares"))}>
                            Auriculares
                            </p>
                         </span>  
                              
                    </div>
                </div>   

                <div  id={style.categoryContainer} >
                    <div id={style.categoryTitle} onClick={() => open !== "Mouses"? setOpen("Mouses"): setOpen(!"Mouses")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            Mouses 
                        </div> 
                        <img className={style.arrows} id={open === "Mouses"?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open === "Mouses"? style.categoryActiveOneElement : undefined}>
                        <span id={categoryPick=== "Mouses" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory('Mouse',"","Mouses"))}>
                            Mouses
                            </p>
                         </span>  
                              
                    </div>
                </div>     

                 <div  id={style.categoryContainer} >
                    <div id={style.categoryTitle} onClick={() => open !== "Teclados"? setOpen("Teclados"): setOpen(!"Teclados")}>
                        <div>
                            { items.icon && <i id={style.categoryIcon} className={items.icon}></i> }
                            Teclados 
                        </div> 
                        <img className={style.arrows} id={open === "Teclados"?style.arrowActive:undefined} src={arrow} alt="Arrow"  ></img>
                    </div>
                    <div id={style.childsContaier} className={open === "Teclados"? style.categoryActiveOneElement : undefined}>
                        <span id={categoryPick=== "Teclados" ? style.categoryPick : undefined}> 
                            -&nbsp;
                            <p onClick={()=>dispatch(filterByCategory('Keyboard',"","Teclados"))}>
                            Teclados
                            </p>
                         </span>  
                              
                    </div>
                </div>                                                                                         
                     
            </div>
        </div>
    )
}