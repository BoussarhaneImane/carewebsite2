import React from "react";
import Image1 from "../../assets/imgs/img7.png";
import Image2 from "../../assets/imgs/imag2.png";
import Button from "../Shared/Button";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-amber-200 to-orange-700 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
              <p className="text-3xl xl:text-4xl font-bold opacity-40 mb-2"> Skin-<br/>Care</p>
                <p className="text-2xl font-semibold mb-[2px]"></p>
                <p className="text-3xl xl:text-4xl font-bold opacity-40 mb-2">
               Brand
                </p>
                <Link to='/shop'><Button
                  text="Shop"
                  bgColor={" bg-gradient-to-br from-yellow-100 to-purple-900"}
                  textColor={"text-orange-700 font-bold opacity-40 mb-2"}
                /></Link> 
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[300px] absolute top-1/2 -translate-y-1/2 right-0 "
            />
          </div>
         {/* Second col */}
         <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-orange-400 to-yellow-500 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
              <p className="text-3xl xl:text-4xl font-bold opacity-40 mb-2"> Brume</p>
                <p className="text-2xl font-semibold mb-[2px]"></p>
                <p className="text-3xl xl:text-4xl font-bold opacity-40 mb-2">
               Brand
                </p>
                <Link to='/shop'><Button
                  text="Shop"
                  bgColor={" bg-gradient-to-br from-yellow-600 to-amber-900"}
                  textColor={"text-orange-200 font-bold opacity-40 mb-2"}
                /></Link> 
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[300px] absolute top-1/2 -translate-y-1/2 right-2 "
            />
          </div>
 </div>
      </div>
    </div>
  );
};

export default Category;
