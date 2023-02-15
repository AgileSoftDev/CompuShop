import style from "./Order.module.css"


const Order = ()=> {
    return(
        <div className={style.container}>
            <select className={style.select}>
                <option hidden>Ordenar por</option>
                <option>Todos</option>
                <option>Destacados</option>
                <option>Mayor precio</option>
                <option>Menor precio</option>
            </select>
        </div>
    )
}

export default Order;