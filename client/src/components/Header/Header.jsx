import style from "./Header.module.css";
import Head from '../Head/Head';
import NavBar from "../NavBar/NavBar";



const Header = (props) =>{


    return(
        <div id={style.Header} ref={props.headerRef}>
            <Head isAdmin={props.isAdmin}/>
            <NavBar/>
        </div>
    )
};

export default Header;