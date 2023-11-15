import React, { useState } from 'react'
import "../../../css/desktopcarsole.css"
import {Swiper,SwiperSlide} from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/effect-fade'

import { EffectCoverflow, Pagination } from 'swiper/modules';

function Desktopcarsole() {
   const [items,setItems]=useState(
    [
        {
            image:require("../../../assets/desktopApps/w-0.png")
        },
        {
            image:require("../../../assets/desktopApps/w-1.png")
        },
        {
            image:require("../../../assets/desktopApps/w-2.png")
        },
        {
            image:require("../../../assets/desktopApps/w-3.png")
        },
        {
            image:require("../../../assets/desktopApps/w-4.png")
        },
        {
            image:require("../../../assets/desktopApps/w-5.png")
        },
        {
            image:require("../../../assets/desktopApps/w-6.png")
        },
        {
            image:require("../../../assets/desktopApps/w-7.png")
        },
        {
            image:require("../../../assets/desktopApps/w-8.png")
        },
        {
            image:require("../../../assets/desktopApps/w-9.png")
        },
        {
            image:require("../../../assets/desktopApps/w-10.png")
        },
        {
            image:require("../../../assets/desktopApps/w-11.png")
        },
        
    ]
   );
    return (
        <>
             <div className="desktop-carsole">
        <div className="carsole-head">
                <h1>Our desktop Apps</h1>
                <p>We are ready to help with these services</p>
            </div>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
          fadeEffect:true,
          
        }}
       loop={true}
       navigation={true}
      
       pagination={{
         clickable: true,
       }}

        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
         {items.map(
                        (item,i)=>{
                          return    <SwiperSlide >
                          <img src={item.image} />
                        </SwiperSlide>     
                        }
                       )}

        
      </Swiper>
        </div>
        </>
    )
}

export default Desktopcarsole
