import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/imgs/img5.png";
import Image2 from "../../assets/imgs/img2.png";

import Button from "../Shared/Button";

const Category = () => {
  return (
     <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-amber-700 to-orange-400 text-white rounded-2xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="text-3xl xl:text-4xl font-bold opacity-40 mb-2">Makeup </p>
                <p className="text-2xl font-semibold mb-[2px]"></p>
                <p className="text-3xl xl:text-4xl font-bold opacity-40 mb-2">
                 Brand
                </p>
                <Link to='/shop'><Button
                  text="Shop"
                  bgColor={" bg-gradient-to-br from-yellow-100 to-orange-500"}
                  textColor={"text-orange-500 font-bold opacity-40 mb-2"}
                /></Link> 
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[290px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* second col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-red-700 to-orange-500 text-white rounded-2xl relative h-[320px] flex items-end ">
            <div>
            <div className="ml-auto left-8" >
              <div className="mb-4">
              <p className="text-3xl xl:text-4xl font-bold opacity-40 mb-2 mt-[-40px]">Parfum</p>
             <p className="text-2xl font-semibold mb-[2px]"></p>
                <p className="text-3xl xl:text-4xl font-bold opacity-40 mb-4">
                 Brand
                </p>
              
               <Link to='/shop'><Button
                  text="Shop"
                  bgColor={"bg-gradient-to-br from-orange-400 to-orange-900"}
                  textColor={"text-orange-100 font-bold opacity-40 mb-2  "}
                /></Link> 
              </div>
              
            </div>
            
            <img
              src={Image2}
              alt=""
              className="w-[255px] absolute top-1/2 -translate-y-1/2 -right-0 "
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Category;
