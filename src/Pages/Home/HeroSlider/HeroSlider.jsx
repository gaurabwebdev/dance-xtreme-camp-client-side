import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSlider.css";
import SlideItem from "../../../Components/Slides/SlideItem";

const HeroSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  const slides = [
    {
      cover_url: "https://wallpaperaccess.com/full/161458.jpg",
      cover_title: "Join The Summer Camp - 2023",
    },
    {
      cover_url:
        "https://dance2inspire.co.uk/wp-content/uploads/2019/07/slider-kids-1.jpg",
      cover_title: "Feel The Music With Rhythm",
    },
    {
      cover_url: "https://i.ibb.co/6sQkpw8/dance-cover-8.jpg",
      cover_title: "Let The World Cheer!",
    },
    {
      cover_url:
        "https://i.pinimg.com/originals/33/a9/e2/33a9e2ce2ad51d179ab355e83de0c27f.jpg",
      cover_title: "Have The Faith, Gain The Ability",
    },
  ];
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideItem slideContent={slides[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem slideContent={slides[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem slideContent={slides[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem slideContent={slides[3]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
