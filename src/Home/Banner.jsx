import React, { useState } from 'react';
import productdata from '../products.json';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import SelectCatgurey from '../components/SelectCatgurey';

function Banner() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredProduct, setFilteredProduct] = useState(productdata);

  // Search Functionality
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // Filter the product based on the search term
    const filtered = productdata.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProduct(filtered);
  };

  return (
    <div className="h-screen w-full pt-20 sm-h-full">
      <div className="flex items-center justify-center h-full">
        <div className="w-full h-full sm:w-3/5 sm:h-auto rounded-lg p-8 flex flex-col items-center j   space-y-4">
          {/* Banner Content */}
          <div className="banner-container text-center space-y-6">
            {/* Title */}
            <h1 className="text-5xl font-thin text-gray-800">
              Search Your One From{' '}
              <span className="font-semibold text-[#FB8C00]">Thousand</span> Of
              Products
            </h1>

            {/* Search Form */}
            {/* Search Form */}
            <form className="flex items-center justify-center space-x-2 text-black relative">
              {/* <SelectCatgurey select="all" /> */}
              <div className="flex items-center w-full max-w-xl rounded-full shadow-lg shadow-gray-400 bg-gray-100 hover:shadow-xl focus-within:ring-2 focus-within:ring-[#FB8C00]">
                <input
                  type="text"
                  placeholder="Search Your Product"
                  className="flex-1 overflow-hidden p-4 rounded-l-full focus:outline-none bg-gray-100 placeholder-gray-500"
                  value={searchInput}
                  onChange={handleSearch}
                />
                <button
                  className="px-6 text-black"
                >
                  <AiOutlineSearch size={25} className="" /> {/* Search Symbol Icon */}
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
                          className="p-2 bg-gray-100 rounded-md shadow hover:shadow-lg transition-shadow"
                        >
                          {product.name}
                        </Link>
                      ))
                    ) : (
                      <p className="text-gray-500">No products found.</p>
                    )}
                  </div>
                </div>
              )}
            </form>


            {/* Subtitle */}
            <p className="text-lg text-gray-600">
              Discover amazing products and deals just for you!
            </p>
          </div>

        </div>
      </div>


    </div>
  );
}

export default Banner;
