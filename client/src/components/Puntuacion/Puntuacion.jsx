import { useState, useEffect, useRef } from "react";
import style from "./Puntuacion.module.css"
import { FaAlignJustify, FaStar } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';
import url from "../../utils/deploy_back.js";
import swal from "sweetalert2"
import { useAuth0 } from "@auth0/auth0-react"

const colors = {
        orange: "#FFBA5A",
    grey: "#a9a9a9"
};

export default function Puntuacion({componentId}) {

const { user } = useAuth0()

const ref = useRef(null)

// const [orders,setUser] = useState([])
// const [nameUser, setNameUser] = useState()

const [review ,setAllreviews] = useState({
    email: "",
    score: 0,
    review: "",
    componentId: componentId
})
// const handleChange = (e) => {
//     setAllreviews({
//         ...review,
//         review: e.target.value
//     })
// }

const handleClick = value => {
    setAllreviews({...review, score: value})
    setCurrentValue(value)
}

const handleReview = async (review) => {
    try {
        console.log(user)
        console.log(review)
        console.log(review.email)
        const { data } = await axios.post(`${url}/review`, review);

        setCurrentValue(0)
        setAllreviews({...review, review: ""})
        const textarea = document.querySelector("textarea")
        textarea.value = ""

        swal.fire({
        title: 'Se creo la review con éxito',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timerProgressBar: 3000
        });
    } catch (error) {
        swal.fire({
            title: 'Error al enviar la review',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Aceptar',
            timerProgressBar: 3000
            });
    }
    };

function handleAutoResize(event) {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
    }

const [currentValue, setCurrentValue] = useState(0);
const [hoverValue, setHoverValue] = useState(undefined);
const stars = Array(5).fill(0)

const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
};

const handleMouseLeave = () => {
    setHoverValue(undefined)
}
    
return (
    <main id={style.ContainerDetailsProduct}>
    <div style={styles.container}>
    <p id={style.p}> ¿Qué te pareció nuestro producto? </p>
    <div style={styles.stars}>
        {stars.map((_, index) => {
        return (
            <FaStar
            key={index}
            size={24}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave} 
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
        style={{
                marginRight: 10,
                cursor: "pointer"
            }}
            />
        )
        })}
    </div>
    
    <p id={style.p}>Agregá un Comentario </p>
    <span id={style.span}>(Opcional)</span>
    <textarea 
        // ref={ref}
        onChange={(e)=> setAllreviews({...review, review: e.target.value, email: user.email})}
        id="review" 
        name="review" 
        placeholder="Comentario"
        style ={styles.textarea}
    />

    <button onClick={()=> handleReview(review)} style={styles.button}>Comentar</button>
        </div>
    </main>
);
};


const styles = {
container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
},
stars: {
    display: "flex",
    flexDirection: "row",
    fontsize: "100px",
    padding: "80px"
},
textarea: {
    border: "1px center #f96400",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    maxHeiht: 200,
    width: 420,
    alignItems: "center"
},
button: {
    border: "1px solid #f96400",
    borderRadius: 5,
    width: 420,
    padding: 10,
color:"#f96400",
fontsize: 12,
    font:"Montserrat",
    backgroundcolor: "#f96400"

}

};