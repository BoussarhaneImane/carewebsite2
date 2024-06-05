import React from "react";
import { Link } from "react-router-dom";
import image from '../../assets/imgs/chambre2.jpg';

const Banner = ({ data }) => {
  return (
    <div className="min-h-[560px] flex justify-center items-center py-12 m-0">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-gradient-to-r from-orange-100 to-amber-700">
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-lg text-yellow-900 italic">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="text-3xl xl:text-4xl font-bold opacity-40 mb-2 text-yellow-900 italic"
            >
              {data.title}
            </h1><br></br>
            <p data-aos="fade-up" className="text-xs text-yellow-900 italic">
              {data.date}
            </p>
          </div>
          {/* second col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={image}
              alt=""
              className="scale-125 w-[200px] md:w-[200px] mx-auto object-cover rounded-xl"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className="font-semibold text-xl text-orange-200 italic">
              {data.title2}
            </p>
            <p data-aos="fade-up" className="text-4xl font-semibold text-orange-200 italic">
              {data.title3}
            </p>
            <p data-aos="fade-up" className="text-xs tracking-wide leading-5 text-orange-200 italic">
              {data.title4}
            </p>
            <div data-aos="fade-up" data-aos-offset="0">
              <Link to='/shop'>
                <button className=" bg-gradient-to-r from-orange-100 to-amber-700 py-2 px-4 rounded-full text-amber-800 italic ">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
