
import React from "react";
import style from "./Reseñas.module.css"


const Reseñas = (review) => {

    return (
        <section id={style.testimonios}>
            <div id={style.testimonios_header}>
                <h1>Opiniones del Producto</h1>
                <div id={style.caja_top}>
                    <div id={style.perfil}>
                        <div id={style.name_user}>
                            <strong id={style.strong}>{review.score}</strong>
                        </div>
                        <div id={style.reseñas}>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <div id={style.comenarios_clientes}>
                                <p>3 calificaciones
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={style.testimonios_header}>
                <div id={style.testimonios_contenedor}>

                    <div id={style.testimonios_caja}>
                        <div id={style.caja_top}>
                            <div id={style.perfil}>

                                <div id={style.name_user}>
                                    <strong>Bruno B.</strong>
                                </div>
                            </div>
                            <div id={style.reseñas}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div id={style.comenarios_clientes}>
                            <p>Este producto es lo mejor, 100% recomendado para cada internauta que este interesado
                                Este producto es lo mejor, 100% recomendado para cada internauta que este interesado
                                Este producto es lo mejor, 100% recomendado para cada internauta que este interesado
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


}
export default Reseñas;