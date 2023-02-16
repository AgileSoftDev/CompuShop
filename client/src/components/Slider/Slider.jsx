import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
 //import 'swiper/css';
// import 'swiper/css/free';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductCard from "../ProductCard/ProductCard";

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.webp';
import img3 from '../img/img3.jfif';
import img4 from '../img/img4.webp';
import img5 from '../img/img5.png';

const Slider = () => {
    return (
        <div className="container py-px-15 justify-content-center bg-dark">git status
           <Swiper
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode]}
              className="mySwiper"
              slidesPerView={5}
              spaceBetween={30}
        >
            <SwiperSlide> 
                <ProductCard data={{imgSrc:img1}} />  
            </SwiperSlide>
            <SwiperSlide> 
                <ProductCard data={{imgSrc:img2}} />  
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard data={{imgSrc:img3}} />  
            </SwiperSlide>
            <SwiperSlide> 
                <ProductCard data={{imgSrc:img4}} />  
            </SwiperSlide>
            <SwiperSlide> 
                <ProductCard data={{imgSrc:img5}} />  
            </SwiperSlide>
        </Swiper>
   </div>
    );
};


export default Slider;
