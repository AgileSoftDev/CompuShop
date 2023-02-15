import style from "./Footer.module.css"
import QR_dataFiscal from "../../assets/QR_dataFiscal.jpg";
import { Link } from "react-router-dom";
import facebook_icon from "../../assets/redes-sociaes_icons/facebook_icon.svg"
import instagram_icon from "../../assets/redes-sociaes_icons/instagram_icon.svg"
import youtube_icon from "../../assets/redes-sociaes_icons/youtube_icon.svg"
import twitter_icon from "../../assets/redes-sociaes_icons/twitter_icon.svg"


const Footer = () =>{
    return(
        <footer id={style.Footer}>
            <nav>
                <div>
                    <img src={QR_dataFiscal} alt="QR" />
                </div>

                <div>
                     <h1>Ayuda</h1> 
                     <p>Si tenés sugerencias o comentarios</p> 
                </div>

                <div>
                    <Link>¡Trabajá con nosotros!</Link> 
                    <Link>Botón de arrepentimiento</Link> 
                </div>

                <div>
                    <p>Siguenos en:</p> 
                    <div>
                        <img src={facebook_icon} alt="" />
                        <img src={instagram_icon} alt="" />
                        <img src={youtube_icon} alt="" />
                        <img src={twitter_icon} alt="" />
                    </div>
                </div>
            </nav>
            <p>Las marcas y logos de compragamer.com compragamer.com/tv compragamer.com/reviews son propiedad de Newton Station SRL
                <br/>
            Todos los derechos reservados 2017</p>
        </footer>
    )
};

export default Footer;