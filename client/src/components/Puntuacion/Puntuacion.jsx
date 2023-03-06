 import { useState } from "react";
 import style from "./Puntuacion.module.css"
 import { FaAlignJustify, FaStar } from "react-icons/fa";

 const colors = {
     orange: "#FFBA5A",
     grey: "#a9a9a9"
    
 };



 export default function Puntuacion() {
   const [currentValue, setCurrentValue] = useState(0);
   const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

   const handleClick = value => {
     setCurrentValue(value)
   }

   const handleMouseOver = newHoverValue => {
     setHoverValue(newHoverValue)
   };

  const handleMouseLeave = () => {
     setHoverValue(undefined)
   }


   return (
     <div id={style.card}>
     <div style={styles.container}>
       <p id={style.p}> Que te parecio nuestro producto? </p>
       <div style={styles.stars}>
         {stars.map((_, index) => {
           return (
             <FaStar
               key={index}
               size={24}
               onClick={() => handleClick(index + 1)}               onMouseOver={() => handleMouseOver(index + 1)}
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
       </div>
      <div id={style.card}>
       <p id={style.p}>Agregá un Comentario </p>
       <span id={style.span}>(Opcional)</span>
       
      <textarea 
         placeholder="Comentario"
         style ={styles.textarea}
       />

       <button style={styles.button}> Comentar</button>
           </div>
     </div>
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


