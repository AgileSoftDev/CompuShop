import style from "./Notfound.module.css"
import herramienta from "../../assets/herramienta.png"

const Notfound = () => {

    return(
            <div className={style.container}>
                <div>
                    <img src={herramienta} alt={"herramienta"}/>
                    <p>NOT FOUND</p>
                </div>
                <div>
                    <button>VOLVER A HOME</button>
                </div>
            </div>
    )
}

export default Notfound;