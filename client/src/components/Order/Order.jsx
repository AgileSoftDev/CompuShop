import style from "./Order.module.css"


const Order = ()=> {
    return(
        <div className={style.container}>
            <select className={style.select}>
                <option>Ordenar por</option>
                <option>Destacados</option>
                <option>Mayor precio</option>
                <option>Menor preciso</option>
            </select>
        </div>
    )
}

export default Order;