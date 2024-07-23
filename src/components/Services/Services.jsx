import React from "react";
import { FaGem, FaHeart, FaStar } from "react-icons/fa";
import { GiCrownedHeart, GiCutDiamond } from "react-icons/gi";

const ServiceData = [
  {
    id: 1,
    icon: <FaGem className="text-4xl md:text-5xl text-blue-500" />,
    title: "Produits de Qualité",
    description: "Sélection soignée d'articles de premier choix",
  },
  {
    id: 2,
    icon: <FaHeart className="text-4xl md:text-5xl text-red-400" />,
    title: "Service Client",
    description: "Équipe de support dédiée disponible 24/7",
  },
  {
    id: 3,
    icon: <FaStar className="text-4xl md:text-5xl text-yellow-400" />,
    title: "Meilleures Évaluations",
    description: "Produits très bien notés par des clients satisfaits",
  },
  {
    id: 4,
    icon: <GiCrownedHeart className="text-4xl md:text-5xl text-purple-500" />,
    title: "Offres Exclusives",
    description: "Accès à des offres spéciales et des promotions",
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
