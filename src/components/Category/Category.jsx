import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/imgs/img5.png";
import Image2 from "../../assets/imgs/img2.png";
import Button from "../Shared/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-white text-indigo-950 relative h-[320px] flex items-end" data-aos="fade-up">
            <div>
              <div className="mb-4">
                <p className="text-3xl xl:text-4xl font-bold mb-2">Makeup</p>
                <p className="text-2xl font-semibold mb-[2px]"></p>
                <p className="text-3xl xl:text-4xl font-bold mb-2">Brand</p>
                <Link to='/shop'>
                  <Button
                    text="acheter"
                    bgColor={"bg-indigo-950"}
                    textColor={"text-white font-bold mb-2"}
                  />
                </Link>
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[200px] sm:w-[230px] md:w-[260px] lg:w-[290px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* second col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-indigo-950 to-pink-800 text-white relative h-[320px] flex items-end" data-aos="fade-down">
            <div>
              <div className="ml-auto left-8">
                <div className="mb-4">
                  <p className="text-3xl xl:text-4xl font-bold mb-2">Parfum</p>
                  <p className="text-2xl font-semibold mb-[2px]"></p>
                  <p className="text-3xl xl:text-4xl font-bold mb-4">Brand</p>
                  <Link to='/shop'>
                    <Button
                      text="acheter"
                      bgColor={"bg-white"}
                      textColor={"text-pink-800 font-bold mb-2"}
                    />
                  </Link>
                </div>
              </div>
              <img
                src={Image2}
                alt=""
                className="w-[170px] sm:w-[200px] md:w-[230px] lg:w-[255px] absolute top-1/2 -translate-y-1/2 -right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
