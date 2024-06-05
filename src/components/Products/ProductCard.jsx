import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group relative p-4 rounded-md flex flex-col items-center justify-center"
            key={data.id}
          >
          <div className="h-52 w-52 flex items-center justify-center">
  <img
    src={data.img}
    alt=""
    className="h-48 w-48  transition duration-300 ease-in-out rounded-full "
  />
</div>

            {/* hover button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-200 bg-opacity-50 rounded-md">
              <Button
                text={"Shop"}
                bgColor={"bg-green-700"}
                textColor={"text-white"}
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-serif text-green-950">{data.title}</h2>
              <h2 className="font-serif text-green-900">{data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;


