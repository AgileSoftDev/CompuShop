import style from "./Footer.module.css"
import QR_dataFiscal from "../../assets/QR_dataFiscal.jpg";
import { Link } from "react-router-dom";
import facebook_icon from "../../assets/redes-sociaes_icons/facebook_icon.svg"
import instagram_icon from "../../assets/redes-sociaes_icons/instagram_icon.svg"
import youtube_icon from "../../assets/redes-sociaes_icons/youtube_icon.svg"
import twitter_icon from "../../assets/redes-sociaes_icons/twitter_icon.svg"
import SliderBrands from "../SliderBrands/SliderBrands"

const Footer = () =>{
    return(
        <>  
          <SliderBrands></SliderBrands>
          <footer id={style.Footer}>
            <nav>
                <div>
                    <img src={QR_dataFiscal} alt="QR" />
                </div>

                <div>
                     <h1>Ayuda</h1> 
                     <p>Si tienes sugerencias o comentarios</p> 
                     <Link to="">CONTACTANOS</Link> 
                </div>

                <div>
                    <Link to="">¡Trabaja con nosotros!</Link> 
                    <Link to="">Botón de arrepentimiento</Link> 
                </div>

                <div>
                    <p>Siguenos en:</p> 
                    <div>
                        <img src={instagram_icon} alt="instagram" />
                        <img src={facebook_icon} alt="facebook" />
                        <img src={youtube_icon} alt="youtube" />
                        <img src={twitter_icon} alt="twitter" />
                    </div>
                </div>
            </nav>
            <p>Las marcas y logos de compuShop.com  compuShop.com/productos son propiedad de Newton Station SRL
                <br/>
            Todos los derechos reservados 2023</p>
        </footer>
        </>
      
    )
};

export default Footer;