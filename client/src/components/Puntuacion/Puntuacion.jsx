// import { useState } from "react";
// import style from "./Puntuacion.module.css"
// import { FaAlignJustify, FaStar } from "react-icons/fa";

// const colors = {
//     orange: "#FFBA5A",
//     grey: "#a9a9a9"
    
// };



// export default function Puntuacion() {
//   const [currentValue, setCurrentValue] = useState(0);
//   const [hoverValue, setHoverValue] = useState(undefined);
//   const stars = Array(5).fill(0)

//   const handleClick = value => {
//     setCurrentValue(value)
//   }

//   const handleMouseOver = newHoverValue => {
//     setHoverValue(newHoverValue)
//   };

//   const handleMouseLeave = () => {
//     setHoverValue(undefined)
//   }


//   return (
//     <div id={style.card}>
//     <div style={styles.container}>
//       <p id={style.p}> Que te parecio nuestro producto? </p>
//       <div style={styles.stars}>
//         {stars.map((_, index) => {
//           return (
//             <FaStar
//               key={index}
//               size={24}
//               onClick={() => handleClick(index + 1)}
//               onMouseOver={() => handleMouseOver(index + 1)}
//               onMouseLeave={handleMouseLeave}
//               color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
//               style={{
//                 marginRight: 10,
//                 cursor: "pointer"
//               }}
//             />
//           )
//         })}
//       </div>
//       </div>
//      <div id={style.card}>
//       <p id={style.p}>Agregá un Comentario </p>
//       <span id={style.span}>(Opcional)</span>
       
//       <textarea 
//         placeholder="Comentario"
//         style ={styles.textarea}
//       />

//       <button style={styles.button}> Comentar</button>
      
//     </div>
//     </div>
//   );
// };


// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   stars: {
//     display: "flex",
//     flexDirection: "row",
//     fontsize: "100px",
//     padding: "80px"
//   },
//   textarea: {
//     border: "1px center #f96400",
//     borderRadius: 5,
//     padding: 10,
//     margin: "20px 0",
//     minHeight: 100,
//     maxHeiht: 200,
//     width: 420,
//     alignItems: "center"
//   },
//   button: {
//     border: "1px solid #f96400",
//     borderRadius: 5,
//     width: 420,
//     padding: 10,
//    color:"#f96400",
//    fontsize: 12,
//    font:"Montserrat",
//    backgroundcolor: "#f96400"
   
//   }

// };


/*
import React from 'react'; 
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import style from "./Puntuacion.module.css"; 


const Puntuacion= (props) =>{


    
    function handleAutoResize(event) {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
      }
    return (
   
      <><div id={style.card}>

            <p id={style.p}>Que te parecio tu producto?</p>
            
              <span id={style.span}>(Da tu mejor puntuacion)</span>
              <p id={style.estrella}>{[...new Array(5)].map((start, index) => {
                    return index < props.score ? < AiFillStar /> : <AiOutlineStar />;
                })}</p>
                
          

        </div><div>
                <div id={style.comentario}>
                 
                        <div>

                            <p id={style.p}>Agregá un Comentario </p>

                            <span  id={style.span}>(Opcional)</span>
                           
                                <label id={style.label}>
                                    <div >
                                        <textarea  name="" onInput={handleAutoResize}>
                                        </textarea>
                                    </div>
                                    <button id={style.button}>Comentar</button>

                                </label>
                            

                        </div>
                    

                </div>

            </div></>
             
     

    )
}


export default Puntuacion;
*/