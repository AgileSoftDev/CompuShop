import style from "./SearchBar.module.css"
import { useEffect, useRef, useState } from "react";
import lupa from "../../assets/icons/lupa.png"
import xIcon from "../../assets/icons/X-icon_black.svg"
import { searchComponent,getAllComponents } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"





const SearchBar = () =>{
    const pathname = useHistory().location.pathname; 

    const inputRef = useRef()
    const dispatch = useDispatch();
    const [inputStatus,setInputStatus] = useState('') 
    const [logoSearchBarStatus, setLogoSearchBarStatus] = useState(true)

    const hanlderChange=(e)=>{
        e.preventDefault();
        const value = e.target.value
        setInputStatus(value)
        value.length > 0 ? setLogoSearchBarStatus(false): setLogoSearchBarStatus(true)
    }

    const  handlerSubmit=(e) =>{
        e.preventDefault();
        dispatch(searchComponent(inputStatus))
    }


    const loupeHadler = () =>{
        inputRef.current.focus(); 
    }

    useEffect(()=>{
        setInputStatus("")
    },[pathname])

    return(
        <div id={style.SearchBarContainer}  >
            <form action="" onSubmit={e=>handlerSubmit(e)}  >
                  <input placeholder="Buscar componente" type="text" value={inputStatus} onChange={hanlderChange} ref={inputRef} />
            </form>
            {logoSearchBarStatus?
                                <button onClick={()=>loupeHadler() } ><img src={lupa} alt="lupa" /></button>   :
                                <button id={style.xIcon} onClick={()=>{setInputStatus(""); setLogoSearchBarStatus(!logoSearchBarStatus);dispatch(getAllComponents())}} ><img src={xIcon} alt="X icon" /></button>}
        </div>
    )
};


export default SearchBar;