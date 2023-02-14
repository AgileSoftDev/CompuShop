import style from "./SearchBar.module.css"
import { useState } from "react";
import lupa from "../../assets/icons/lupa.png"
import xIcon from "../../assets/icons/X-icon_black.svg"




const SearchBar = () =>{

    const [inputStatus,setInputStatus] = useState('') 
    const [logoSearchBarStatus, setLogoSearchBarStatus] = useState(true)

    const hanlderChange=(e)=>{
        const value = e.target.value
        setInputStatus(value)
        value.length > 0 ? setLogoSearchBarStatus(false): setLogoSearchBarStatus(true)
    }

    const handlerSubmit=(e) =>{
        e.preventDefault();
        alert(`estás buscando <<${inputStatus}>>`)
    }

    return(
        <div id={style.SearchBarContainer}  >
            <form action="" onSubmit={e=>handlerSubmit(e)}  >
                  <input placeholder="Buscar componente" type="text" value={inputStatus} onChange={hanlderChange}  />
            </form>
            {logoSearchBarStatus?
                                <button onClick={()=>{setInputStatus("")}  } ><img src={lupa} alt="lupa" /></button>   :
                                <button id={style.xIcon} onClick={()=>{setInputStatus(""); setLogoSearchBarStatus(!logoSearchBarStatus)}} ><img src={xIcon} alt="X icon" /></button>}
        </div>
    )
};


export default SearchBar;