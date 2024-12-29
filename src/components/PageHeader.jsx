import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import img1 from '../assets/images/cursorImg/banner.jpg'
import img2 from '../assets/images/cursorImg/img2.jpg'
import img3 from '../assets/images/cursorImg/img3.jpg'
import img4 from '../assets/images/cursorImg/img4.jpg'

function PageHeader({ titel, curPage }) {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[70vh] flex items-center justify-center overflow-hidden mt-20"
      style={{
        backgroundImage: `url(${img1})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>

      {/* Carousel Component */}
      <div className="absolute inset-0 z-0">
        <Carousel 
          infiniteLoop 
          autoPlay 
          showStatus={false} 
          showArrows={false} 
          interval={2000} 
          showThumbs={false}
          className="w-full h-full"
        >
          <div className="relative w-full h-full">
            <img
             src={img1} alt="Description of the image"
              
              className="object-cover w-full h-full"
            />
            <p className="legend absolute bottom-5 left-5 text-white text-xl font-bold"></p>
          </div>
          <div className="relative w-full h-full">
            <img
             src={img2} alt="Description of the image"
             
              className="object-cover w-full h-full"
            />
            <p className="legend absolute bottom-5 left-5 text-white text-xl font-bold"></p>
          </div>
          <div className="relative w-full h-full">
            <img
            src={img3} alt="Description of the image"
              
              className="object-cover w-full h-full"
            />
            <p className="legend absolute bottom-5 left-5 text-white text-xl font-bold"></p>
          </div>
          <div className="relative w-full h-full">
            <img
             src={img4} alt="Description of the image"
              
              className="object-cover w-full h-full"
            />
            <p className="legend absolute bottom-5 left-5 text-white text-xl font-bold"></p>
          </div>
          
        </Carousel>
      </div>

      {/* Content */}
      <div className="relative text-center text-white z-10">
        <h2 className="text-4xl font-bold mb-2">{titel}</h2>
        <nav aria-label="breadcrumb">
          <ol className="flex justify-center space-x-4 text-sm">
            <li className="breadcrumb-item">
              <Link
                to="/"
                className="text-white hover:text-orange-400 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li className="breadcrumb-item text-black">/{curPage}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default PageHeader;
