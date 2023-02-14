import style from "./NavBar.module.css"

const NavBar = () =>{
    return(
        <div id={style.NavBarContainer}>
            <ul>
                <li>PRODUCTOS</li>
                <li>ARMA TU PC</li>
                <li>CATEGORÍAS</li>
                <li>MARCAS</li>
            </ul>
        </div>
    )
};


export default NavBar;