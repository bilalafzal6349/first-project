import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";
import Image7 from "../assets/image7.png";
import Image8 from "../assets/image8.png";
// Import Swiper styles
import "swiper/css";

export const ImageSlider = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const nextSlide = () => {
    controlledSwiper.slideNext();
  };

  const prevSlide = () => {
    controlledSwiper.slidePrev();
  };

  return (
    <div className="relative">
      <div className="overflow-hidden w-full">
        <Swiper
          loop={true}
          modules={[Controller]}
          controller={{ control: controlledSwiper }}
          onSwiper={setControlledSwiper}
          spaceBetween={50}
          slidesPerView={1}
        >
          <div onClick={prevSlide}>prev</div>
          <SwiperSlide>
            <img src={Image1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image8} />
          </SwiperSlide>
          <div onClick={nextSlide}>next slide</div>
        </Swiper>
      </div>
    </div>
  );
};
