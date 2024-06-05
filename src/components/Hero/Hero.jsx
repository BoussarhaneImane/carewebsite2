import React from 'react';
import vid1 from '../Hero/vid1.mp4';
import './Hero.css'; // Assurez-vous d'importer votre fichier CSS
import { Link } from "react-router-dom";
import Button from "../Shared/Button";

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='main'>
        <video className='video' src={vid1} autoPlay loop muted />
        <div className='text-overlay'>
          <p className='text-amber-600 m-4 text-2xl font-medium'>Bienvenu chez nous </p>
          <Link to='/shop'>
            <Button
              id='botona'
              className='drop-shadow-lg  '
              text="Découvrir par là"
              bgColor="bg-gradient-to-br from-green-800 to-orange-900"
              textColor="text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
