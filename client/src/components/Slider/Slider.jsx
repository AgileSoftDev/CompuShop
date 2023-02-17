import style from "./Slider.module.css"
import img1 from '../../assets/slider/img1.jpg';
import img2 from '../../assets/slider/img2.jpg';
import img3 from '../../assets/slider/img3.jpg'
import img4 from '../../assets/slider/img4.jpg'
import img5 from '../../assets/slider/img5.jpg'


const Slider = () => {
    return (
    <div id={style.SliderContainer}>
        <div>
            <ul>
                <li><img src={img1} alt="Img referencial" /></li>
                <li><img src={img2} alt="Img referencial" /></li>
                <li><img src={img3} alt="Img referencial" /></li>
                <li><img src={img4} alt="Img referencial" /></li>
                <li><img src={img5} alt="Img referencial" /></li>
            </ul>
        </div>

   </div>
    );
};


export default Slider;
