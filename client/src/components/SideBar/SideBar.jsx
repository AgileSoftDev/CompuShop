import style from "./SideBar.module.css"


const SideBar = ()=> {
    return(
        <div className={style.SideBar}>
            <ul className={style.menu}>
                <p>CATEGORÍAS</p>
                <li className={style.activado}><a>Equipos y Notebooks</a></li>
                <li><a>Kits de actualización</a></li>
                <li><a>Procesadores</a></li>
                <li><a>Mothers</a></li>
                <li><a>Placas de Video</a></li>
                <li><a>Memorias RAM</a></li>
                <li><a>Almacenamiento</a></li>
                <li><a>Refrigeración</a></li>
                <li><a>Gabinetes</a></li>
                <li><a>Fuentes</a></li>
                <li><a>Monitores y Televisores</a></li>
                <li><a>Periféricos</a></li>
                <li><a>Sillas Gamers</a></li>
                <li><a>Conectividad</a></li>
                <li><a>Estabilizadores y UPS</a></li>
                <li><a>Cables y Adaptadores</a></li>
            </ul>
        </div>
    )
}

export default SideBar;