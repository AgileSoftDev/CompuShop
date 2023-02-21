import Acordeon from '../../components/Acordeon/Acordeon';
import style from './Ayuda.module.css'

const Ayuda = ()=>{
    return(
      
        <div>
            <div id={style.Container}>
            <div id={style.Ayuda}>
            { <Acordeon/> }
            </div>  
       </div>
       </div>
    )
};

export default Ayuda;