import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/pageheader/bg/02.jpg';

function PageHeader({titel,curPage}) {
  return (
    <div
      className="  relative bg-cover bg-center bg-no-repeat h-[70vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${img1})` }} // Correctly using the imported image
    >
      {/* Overlay */}
      <div className="absolute inset-0   bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative text-center text-white">
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
            <li  className="breadcrumb-item text-black">/{curPage}</li>
           
            
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default PageHeader;
