import React, { useState } from 'react'
import "../../../css/mobilecarsole.css"
import {Swiper,SwiperSlide} from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/effect-fade'
import { EffectCoverflow, Pagination } from 'swiper/modules';
function Mobilecarsole() {
    const [items,setItems]=useState([
        {image:require("../../../assets/mobileApps/01copy.png"),
            active:false
        },
        {image:require("../../../assets/mobileApps/02copy.png"),
        active:false
        },
        {image:require("../../../assets/mobileApps/03copy.png"),
        active:false
        },
        {image:require("../../../assets/mobileApps/04copy.png"),
        active:false
        },
        {image:require("../../../assets/mobileApps/05copy.png"),
        active:true
        },
        {image:require("../../../assets/mobileApps/06copy.png"),
        active:false
        },
        {image:require("../../../assets/mobileApps/07copy.png"),
        active:false
        },
        {image:require("../../../assets/mobileApps/08copy.png"),
        active:false
        },
        {image:require("../../../assets/mobileApps/08copy.png"),
        active:false
        },
        {image:require("../../../assets/mobileApps/09copy.png"),
        active:false
        },
    ]);

    const [activeIndex,setActiveIndex]=useState(3)

    const carsoleTransformStyle={
        transform:`translate3d(-${1 * 100}%)`
       }
    return (
        <>
        <div className="mobilecarsole">
        <div className="carsole-head">
                <h1>Our Mobile Apps</h1>
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
        {/* <div className="mobilecarsole">
            <div className="carsole-head">
                <h1>Our Mobile Apps</h1>
                <p>We are ready to help with these services</p>
            </div>
            <div className="carsole-body">
                <div className="slider-div">
                    <div className="img-div">
                    {items.map(
                        (item,i)=>{
                         
                            return <img key={i} className='img'  src={item.image} alt="slideImg" style={{ transform:`translatex(-${ (3) * 170}px)`}} />
                                         
                        }
                       )}
                    </div>
                       
                </div>

            </div>
        </div> */}

        
        </>
    )
}

export default Mobilecarsole
