import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import data from '../products.json'; // Importing product data

function Search({gridlist}) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredProduct, setFilteredProduct] = useState(data); // Initialize with all products

  // Search Functionality
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // Filter the products based on the search term
    const filtered = data.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProduct(filtered);
  };

  return (
    <form className="flex items-center justify-center space-x-2 text-black relative">
      <div className="flex items-center w-full max-w-xl shadow-lg shadow-gray-400 bg-gray-100 hover:shadow-xl focus-within:ring-2 focus-within:ring-[#FB8C00]">
        <input
          type="text"
          placeholder="Search Your Product"
          className="flex-1 overflow-hidden p-4 rounded-l-full focus:outline-none bg-gray-100 placeholder-gray-500"
          value={searchInput}
          onChange={handleSearch}
        />
        <button className="px-6 text-black">
          <AiOutlineSearch size={25} /> {/* Search Symbol Icon */}
        </button>
      </div>

      {/* Filtered Products Box */}
      {searchInput && (
        <div className="absolute top-20 w-full max-w-xl bg-white shadow-lg border border-gray-300 rounded-md max-h-56 overflow-y-auto z-10">
          <div className="flex flex-wrap gap-4 p-4">
            {filteredProduct.length > 0 ? (
              filteredProduct.map((product, i) => (
                <Link
                  to={`/shop/${product.id}`}
                  key={i}
                  className="p-2 w-full bg-gray-100 rounded-md shadow hover:shadow-lg transition-shadow flex"
                >
                <img src={product.img}alt=""  width={80}/>
                <div>
                  <p className=''> {product.name}</p>
                  <h6>${product.price}</h6>
                </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      )}
    </form>
  );
}

export default Search;
