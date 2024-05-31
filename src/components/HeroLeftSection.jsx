import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
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
export const HeroLeftSection = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const nextSlide = () => {
    controlledSwiper.slideNext();
  };

  const prevSlide = () => {
    controlledSwiper.slidePrev();
  };
  return (
    <div className="bg-[#212121] -pt-40 flex   rounded-tr-[4rem] rounded-bl-[4rem] lg:rounded-bl-[10rem] lg:rounded-tr-[0]  py-8 mx-auto w-full">
      <div className=" w-full mx-auto flex  items-center justify-between    px-4 ">
        <IoArrowBackCircleOutline
          height={1}
          className="text-white w-full max-w-[48px] text-3xl sm:text-4xl lg:text-5xl "
          onClick={prevSlide}
        />
        <Swiper
          loop={true}
          modules={[Controller]}
          controller={{ control: controlledSwiper }}
          onSwiper={setControlledSwiper}
          spaceBetween={10}
          slidesPerView={1}
          className=""
        >
          <SwiperSlide>
            <img src={Image1} className="max-w-[278px] w-full mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image2} className="max-w-[278px] w-full mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} className="max-w-[278px] w-full mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image4} className="max-w-[278px] w-full mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image5} className="max-w-[278px] w-full mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image6} className="max-w-[278px] w-full mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image6} className="max-w-[278px] w-full mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image7} className="max-w-[278px] w-full mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image8} className="max-w-[278px] w-full mx-auto" />
          </SwiperSlide>
        </Swiper>
        <IoArrowForwardCircleOutline
          className="text-white max-w-[48px] w-full text-3xl sm:text-4xl lg:text-5xl "
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};
