import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
 //import 'swiper/css';
// import 'swiper/css/free';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductCard from "../ProductCard/ProducCard";

import img1 from './img/img1.jpeg';
import img2 from './img/img2.jpeg';
import img3 from './img/img3.jpeg';
import img4 from './img/img4.jpeg';
// import img5 from '../img/img5.jpeg';

const Slider = () => {
    return (
        <div className="container py-px-15 justify-content-center bg-dark">
           <Swiper
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode]}
              className="mySwiper"
              slidesPerView={5}
              spaceBetween={30}
        >
            <SwiperSlide> 
                <ProductCard imgSrc={img1} />  
            </SwiperSlide>
            <SwiperSlide> 
                <ProductCard imgSrc={img2} />  
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard imgSrc={img3} />  
            </SwiperSlide>
            <SwiperSlide> 
                <ProductCard imgSrc={img4} />  
            </SwiperSlide>
        </Swiper>
   </div>
    );
};


export default Slider;
