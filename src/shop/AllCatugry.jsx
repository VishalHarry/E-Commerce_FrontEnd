import React from 'react';
import data from '../products.json';  // Import your product data (to reset to all items)

function AllCatugry({ filterItem, setItem, manuItem, setproduct, selectCatgurey }) {
  return (
    <div className="category-filter mt-20">
      <h3 className="text-xl font-semibold mb-4">All Category</h3>
      <ul className="space-y-2 flex gap-5 flex-wrap">
        {/* Render category buttons */}
        {manuItem.map((category, index) => (
          <li key={index}>
            <button
              className={` text-left   hover:bg-gray-200 ${selectCatgurey === category ? 'bg-[#FB8C00] text-white' : 'bg-white text-black'}`}
              onClick={() => {
                filterItem(category);  // Call filter function when category is selected
                setproduct(data.filter((product) => product.category === category)); // Update the product list
              }}
            >
              {category}
            </button>
          </li>
        ))}
        
        {/* "All" button to reset the filter */}
        <li>
          <button
            onClick={() => {
              filterItem('All');  // Reset filter to 'All'
              setproduct(data); // Reset product list to all products
            }}
            className={`w-full text-left     hover:bg-gray-200 ${selectCatgurey === 'All' ? 'bg-[#FB8C00] text-white' : 'bg-white text-black'}`}
          >
            All
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AllCatugry;
