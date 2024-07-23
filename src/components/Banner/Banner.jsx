import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from '../Hero/p1.png';
import image2 from '../Hero/p2.png';
import image3 from '../Hero/p3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css';

const Banner = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="min-h-[560px] flex justify-center items-center py-8 bg-white" id="box1">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-white rounded-3xl">
          {/* Product Images */}
          <div className="flex flex-col items-center gap-4">
            <img src={image1} alt="Product 1" className="w-[180px] h-[180px] object-cover rounded-xl hover:scale-105 filter-animation" data-aos="fade-up"/>
            <img src={image2} alt="Product 2" className="w-[180px] h-[180px] object-cover rounded-xl hover:scale-108 filter-animation" data-aos="fade-up"/>
            <img src={image3} alt="Product 3" className="w-[180px] h-[180px] object-cover rounded-xl hover:scale-105 filter-animation" data-aos="fade-up" />
          </div>
          {/* Advertisement Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 sm:p-6 text-indigo-950 filter-animation bg-[#f0f0f0]" data-aos="fade-down">
            <h1 className="text-3xl font-bold mb-4">CareForU</h1>
            <p className="mb-6 text-sm">
              Découvrez notre gamme exclusive de produits cosmétiques conçus spécialement pour sublimer votre beauté naturelle. Offrez-vous le meilleur des soins et laissez-vous choyer par nos produits de qualité supérieure. Rejoignez-nous et révélez votre éclat !
            </p>
            <Link to='/shop'>
              <button className="bg-gradient-to-r from-pink-800 to-indigo-950 py-2 px-4 rounded-full text-white italic hover:bg-pink-900 transition duration-300">
                Découvrir par là
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
