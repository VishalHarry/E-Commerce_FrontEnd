import React from 'react';
import { Link } from 'react-router-dom';

const categoryList = [
  {
    imgUrl: 'src/assets/images/category/01.jpg',
    imgAlt: 'DSLR Camera',
    iconName: 'icofont-camera',
    title: 'DSLR Camera',
  },
  {
    imgUrl: 'src/assets/images/category/02.jpg',
    imgAlt: 'Shoes',
    iconName:'icofont-shoe',
    title: 'Shoes',
  },
  {
    imgUrl: 'src/assets/images/category/03.jpg',
    imgAlt: 'Photography',
    iconName: 'icofont-camera-alt',
    title: 'Photography',
  },
  {
    imgUrl: 'src/assets/images/category/04.jpg',
    imgAlt: 'Formal Dress',
    iconName: 'icofont-business-man',
    title: 'Formal Dress',
  },
  {
    imgUrl: 'src/assets/images/category/05.jpg',
    imgAlt: 'Colorful Bags',
    iconName: 'icofont-bag',
    title: 'Colorful Bags',
  },
  {
    imgUrl: 'src/assets/images/category/06.jpg',
    imgAlt: 'Home Decor',
    iconName: 'icofont-home',
    title: 'Home Decor',
  },
];

function HomeCategory() {
  return (
    <div className='w-full  py-16 flex flex-col items-center'>
      {/* Title Section */}
      <div className='text-center mb-12'>
        <h2 className='text-lg mb-2 uppercase text-orange-400'>Choose Any Product</h2>
        <h1 className='text-4xl font-bold text-gray-800'>Buy Everything with Us</h1>
      </div>

      {/* Category Boxes Section */}
      <div className='w-full max-w-screen-xl px-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
          {categoryList.map((category, i) => (
           <Link to="/shop">
            <div key={i} className='relative rounded-lg overflow-hidden shadow-lg bg-white group hover:scale-105 transition-transform duration-300'>
              {/* Category Image */}
              <img
                src={category.imgUrl}
                alt={category.imgAlt}
                className='w-full h-72 object-cover group-hover:opacity-80 transition-opacity duration-300'
              />

              {/* Category Info */}
              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white'>
                <h3 className='text-xl font-semibold'>{category.title}</h3>
                <div className='mt-2 flex items-center space-x-2'>
                  <i className={`icofont ${category.iconName} text-2xl`} />
                  <span className='text-sm'>Explore</span>
                </div>
              </div>
            </div>
           </Link>
          ))}
          
        </div>
        
      </div>
     <Link to="/shop"> <button className='mt-10 py-3 px-4 bg-red-400  rounded-md text-white'>Get Started Now</button></Link>
    </div>
  );
}

export default HomeCategory;
