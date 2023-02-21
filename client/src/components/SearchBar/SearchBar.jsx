import style from "./SearchBar.module.css"
import { useRef, useState } from "react";
import lupa from "../../assets/icons/lupa.png"
import xIcon from "../../assets/icons/X-icon_black.svg"
import { searchComponent } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";




const SearchBar = () =>{

    const inputRef = useRef()
    const dispatch = useDispatch();
    const [inputStatus,setInputStatus] = useState('') 
    const [logoSearchBarStatus, setLogoSearchBarStatus] = useState(true)

    const hanlderChange=(e)=>{
        e.preventDefault();
        const value = e.target.value
        setInputStatus(value)
        value.length > 0 ? setLogoSearchBarStatus(false): setLogoSearchBarStatus(true)
        dispatch(searchComponent(value))
    }

    const handlerSubmit=(e) =>{
        e.preventDefault();
        alert(`Buscaste:   *${inputStatus}*`)
        setInputStatus("")
        setLogoSearchBarStatus(true)
    }


    const loupeHadler = () =>{
        inputRef.current.focus(); 
    }

    return(
        <div id={style.SearchBarContainer}  >
            <form action="" onSubmit={e=>handlerSubmit(e)}  >
                  <input placeholder="Buscar componente" type="text" value={inputStatus} onChange={hanlderChange} ref={inputRef} />
            </form>
            {logoSearchBarStatus?
                                <button onClick={()=>loupeHadler() } ><img src={lupa} alt="lupa" /></button>   :
                                <button id={style.xIcon} onClick={()=>{setInputStatus(""); setLogoSearchBarStatus(!logoSearchBarStatus)}} ><img src={xIcon} alt="X icon" /></button>}
        </div>
    )
};


export default SearchBar;