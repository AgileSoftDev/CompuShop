import style from "./SearchBar.module.css"
import lupa from "../../assets/icons/lupa.png"

const SearchBar = () =>{
    return(
        <div id={style.SearchBarContainer}><input placeholder="Buscar componente" type="text" /><button><img src={lupa} alt="lupa" /></button></div>
    )
};


export default SearchBar;