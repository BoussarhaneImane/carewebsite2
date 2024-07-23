import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import TOMFORD from '../Catalogue/SL2.jpg';
import VERSACE from '../Catalogue/SL1.jpg';
import RITUALS from '../Catalogue/SL3.jpg';
import ROCHEPOSAY from '../Catalogue/SL4.jpg';
import YSL from '../Catalogue/SL5.jpg';
import DIOR from '../Catalogue/SL6.jpg';
import LV from '../Catalogue/SL7.jpg';
import PRADA from '../Catalogue/SL8.jpg';
import GUCCI from '../Catalogue/SL9.jpg';
import GIVENCHY from '../Catalogue/SL10.jpg';
import HERMES from '../Catalogue/SL11.jpg';
import CELINE from '../Catalogue/SL12.jpg';
import CHARLOTTETILBURY from '../Catalogue/SL13.jpg';
import HUDABEAUTY from '../Catalogue/SL14.jpg';
import NARS from '../Catalogue/SL15.jpg';
import ANASTASIA from '../Catalogue/SL16.jpg';
import SEPHORA from '../Catalogue/SL17.jpg';
import GOLDENROSE from '../Catalogue/SL18.jpg';
import './swiper-custom.css';
import Footer from '../Footer/Footer';
const images = [
  TOMFORD, VERSACE, RITUALS, ROCHEPOSAY, YSL, DIOR, LV, PRADA, GUCCI, GIVENCHY, HERMES, CELINE,
  CHARLOTTETILBURY, HUDABEAUTY, NARS, ANASTASIA, SEPHORA, GOLDENROSE
];

const MySwiperComponent = () => {
  return (
    <div className="container mx-auto py-8 mt-12">
      <h1 className=" text-pink-800 font-medium text-2xl text-center mb-4">OUR BRANDS</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full h-96 custom-swiper-pagination"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-center w-full h-full">
            <img src={image} alt={`slide_image_${index + 1}`} className="object-contain h-80 mb-4" />
            <Link to={`/shop`}>
              <button className="px-3 py-1 bg-pink-900 absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white rounded-2xl hover:bg-indigo-950">
                Learn More
              </button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
   
    </div>
  );
};

export default MySwiperComponent;
