import React from "react";
import { FaGem, FaHeart, FaStar } from "react-icons/fa";
import { GiCrownedHeart, GiCutDiamond } from "react-icons/gi";

const ServiceData = [
  {
    id: 1,
    icon: <FaGem className="text-4xl md:text-5xl text-amber-700" />,
    title: "Quality Products",
    description: "Handpicked selection of top-tier items",
  },
  {
    id: 2,
    icon: <FaHeart className="text-4xl md:text-5xl text-red-400" />,
    title: "Customer Care",
    description: "Dedicated support team available 24/7",
  },
  {
    id: 3,
    icon: <FaStar className="text-4xl md:text-5xl text-yellow-400" />,
    title: "Top Ratings",
    description: "Highly rated products by satisfied customers",
  },
  {
    id: 4,
    icon: <GiCrownedHeart className="text-4xl md:text-5xl text-purple-500" />,
    title: "Exclusive Offers",
    description: "Access to special deals and promotions",
  },

];

const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div className="flex flex-col items-start sm:flex-row gap-4">
              {data.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
