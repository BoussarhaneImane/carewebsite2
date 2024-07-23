import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import CreamImg from "../../assets/imgs/m1.jpg";
import SerumImg from "../../assets/imgs/m2.jpg";
import CleanserImg from "../../assets/imgs/m3.jpg";
import PerfumeImg from "../../assets/imgs/m4.jpg";
import MistImg from "../../assets/imgs/s1.jpg";
import MaskImg from "../../assets/imgs/s2.jpg";
import LipBalmImg from "../../assets/imgs/s3.jpg";
import EyeCreamImg from "../../assets/imgs/s4.jpg";
const ProductsData = [
  {
    id: 1,
    img: CreamImg,
    title: "Hydrating Day Cream",
    price: "$25",
    aosDelay: "0",
  },
  {
    id: 2,
    img: SerumImg,
    title: "Vitamin C Serum",
    price: "$35",
    aosDelay: "200",
  },
  {
    id: 3,
    img: CleanserImg,
    title: "Gentle Cleansing Foam",
    price: "$20",
    aosDelay: "400",
  },
  {
    id: 4,
    img: PerfumeImg,
    title: "Eau de Parfum",
    price: "$50",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 5,
    img: MistImg,
    title: "Refreshing Facial Mist",
    price: "$15",
    aosDelay: "0",
  },
  {
    id: 6,
    img: MaskImg,
    title: "Detoxifying Clay Mask",
    price: "$30",
    aosDelay: "200",
  },
  {
    id: 7,
    img: LipBalmImg,
    title: "Moisturizing Lip Balm",
    price: "$10",
    aosDelay: "400",
  },
  {
    id: 8,
    img: EyeCreamImg,
    title: "Revitalizing Eye Cream",
    price: "$40",
    aosDelay: "600",
  },
];


const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading  title="Nos Produits"  subtitle={"Suivi des produits"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
