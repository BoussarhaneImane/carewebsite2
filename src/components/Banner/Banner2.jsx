import React from "react";
import vd1 from '../Hero/vdx.mp4';
import vd2 from '../Hero/vdy.mp4';
import vd3 from '../Hero/vdz.mp4';
import './Banner2.css';

const Banner = ({ data }) => {
  return (
    <>
    <div className="min-h-[560px] flex justify-center items-center py-8 bg-white" id="box2">
      <div className="image-container">
        <video src={vd1} muted autoPlay loop className="vdexp"></video>
      </div>
      <div className="text-between-videos">
        <span className="video-text">achter maintenant<br></br>avec notre CareForU </span>
      </div>
      <div className="image-container">
        <video src={vd2} muted autoPlay loop className="vdexp2"></video>
        <video src={vd3} muted autoPlay loop className="vdexp2"></video>
      </div>
    
    </div>
    <center> <p className="text-3xl font-medium text-indigo-950 opacity-50 m-24 ">Bienvenue Nos Clients. !!</p></center>
     
      </>
  );
}

export default Banner;
