import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

function ProductCart({ GridList, products }) {
  return (
    <div
      className={`mt-5 ${
        GridList
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          : 'w-full flex flex-col gap-8'
      }`}
    >
      {products.map((product, index) => (
        <div
          key={index}
          className={`relative group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${
            GridList ? 'w-full' : 'flex items-center'
          }`}
          style={{ minHeight: GridList ? '300px' : '150px', maxWidth: '900px' }}
        >
          {/* Image Section */}
          <div
            className={`overflow-hidden rounded-t-md relative ${
              GridList ? 'h-[200px]' : 'w-[150px] h-[150px] flex-shrink-0'
            }`}
          >
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform"
              src={product.img}
              alt={product.name}
            />
            {/* Popup Icons */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 bg-opacity-75 bg-gray-900 text-white flex justify-center items-center gap-4 p-2 transition-all">
              <button className="p-2 rounded-full bg-gray-800 hover:bg-red-500">
                <Link to={`/shop/${product.id}`}>
                  <i className="icofont-eye text-white"></i>
                </Link>
              </button>
              <button className="p-2 rounded-full bg-gray-800 hover:bg-blue-500">
                <i className="icofont-heart"></i>
              </button>
              <button className="p-2 rounded-full bg-gray-800 hover:bg-green-500">
                <Link to={`/cart-page`}>
                  <i className="icofont-cart text-white"></i>
                </Link>
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div
            className={`p-3 ${
              GridList
                ? 'text-center'
                : 'ml-4 flex flex-col justify-between flex-grow'
            }`}
          >
            <Link to={`/shop/${product.id}`}>
              <h3 className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm text-gray-600 mt-1">{product.seller}</p>
            <p className="text-lg font-bold text-red-500 mt-2">${product.price}</p>
          </div>

          {/* Rating Section */}
          <div
            className={`mt-2 ${
              GridList ? 'text-center' : 'ml-4'
            }`}
          >
            <Rating value={Math.random() * 5} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCart;
