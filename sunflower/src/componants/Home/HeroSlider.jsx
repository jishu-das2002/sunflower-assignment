import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slides = [
  { image: "https://i.postimg.cc/example1.png", title: "Learn Guitar" },
  { image: "https://i.postimg.cc/example2.png", title: "Spoken English" },
  { image: "https://i.postimg.cc/example3.png", title: "Python Programming" },
];

const HeroSlider = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-64 md:h-96">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute bottom-5 left-5 text-white text-2xl font-bold">{slide.title}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
