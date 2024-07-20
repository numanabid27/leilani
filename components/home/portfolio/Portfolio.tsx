import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import React, { useRef, useState } from "react";
import style from "./Portfolio.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

const Portfolio = () => {
  const [isShow, setIsShow] = useState(1);
  return (
    <div className={style.overview}>
      <div className={style.container}>
        <h2>Portfolio</h2> 
        {/* picture and circle code start */}
        <div className={style.main}>
          <div className={style.buttons}>
            <button onClick={() => setIsShow(1)} style={{color : isShow === 1 ? "#fff" :"rgba(255, 255, 255, 0.555)"}}>Desktop </button>
            <button onClick={() => setIsShow(2)} style={{color : isShow === 2 ? "#fff" :"rgba(255, 255, 255, 0.555)"}}>Mobile </button>
          </div>

          {isShow == 1 && (
            <>
             <DesktopSlider />
            </>
          )}

          {isShow == 2 && (
            <>
              <DesktopSlider />
            </>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;

const DesktopSlider = () => {
  const swiperRef = useRef<any>(null);
  return (
    <>
    <div className={style.swiper_main}>
    <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        scrollbar={{ draggable: true }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        {/* swiper Slides */}
        
        <SwiperSlide>
          <img src="/images/laptop1.png" alt="" />
          <h3 className={style.swiper_heading}>
           YIP
            <span>NEXT JS, Framer motion, Node.js</span>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/laptop2.png" alt="" />
          <h3 className={style.swiper_heading}>
           Solidery dev
            <span>NEXT JS, Tailwind CSS, Node.js</span>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/laptop3.png" alt="" />
          <h3 className={style.swiper_heading}>
            ChatBot
            <span>React JS, Tailwind CSS, Node.js, Socket.io</span>
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
      
      <div className={style.swiper_arrow}>
        <img
          src="./images/port-arrow-left.png"
          alt="solidery"
          className={style.prev_btn}
          onClick={() => swiperRef.current?.slidePrev()}
        />
         
        <img
          src="./images/port-arrow-right.png"
          alt="solidery"
          className={style.next_btn}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
    </>
  );
};