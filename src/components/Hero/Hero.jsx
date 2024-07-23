import React, { useEffect } from 'react';
import './Hero.css';
import { Link } from "react-router-dom";
import Button from "../Shared/Button";
import sampleImage from './shape1.png';
import sampleImage2 from './shapex2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({handleOrderPopup}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <div className='hero-image'>
          <img src={sampleImage} alt="Publicité" className='image-style' data-aos="fade-up"/>
          <img src={sampleImage2} alt="Publicité" className='image-style2' data-aos="fade-down"/>
        </div>
        <div className='hero-text' >
          <h1 className='m-4 text-4xl font-bold'>Bienvenue chez nous</h1>
          <p className='mb-6 ml-7 text-xl' >
            Découvrez notre gamme exclusive de produits cosmétiques conçus spécialement pour sublimer votre beauté naturelle.
            Offrez-vous le meilleur des soins et laissez-vous choyer par nos produits de qualité supérieure. 
            Rejoignez-nous et révélez votre éclat !
          </p>
          <Link to='/shop'  id='btn'>
            <Button
         
              className='drop-shadow-lg '
              text="Découvrir par là"
              bgColor="bg-gradient-to-br from-pink-800 to-indigo-950"
              textColor="text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
