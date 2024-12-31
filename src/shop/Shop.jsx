import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import data from '../products.json';
import ProductCart from './ProductCart';
import Search from './Search'; // Import the SearchBar component
import SelectCatgurey from '../components/SelectCatgurey';
import AllCatugry from './AllCatugry';
import PopularPost from './PopularPost';
import Tags from './Tags';

function Shop() {
  const [GridList, setGridList] = useState(false);
  const [product, setProduct] = useState(data); // Static product list
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [filteredProducts, setFilteredProducts] = useState(data); // State for filtered products
  const [selectCatgurey, setSelectCatgurey] = useState("All"); // Track selected category
  
  const manu = [...new Set(data.map((val) => val.category))]; // Get unique categories

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Filter products by category
  const filteredItem = (curcat) => {
    setSelectCatgurey(curcat);  // Update selected category
    const filteredData = curcat === "All" ? data : data.filter((newval) => newval.category === curcat);
    setFilteredProducts(filteredData);  // Update filtered products
    setProduct(filteredData);  // Update product list for the selected category
  };

  return (
    <div className='mt-20'>
      <PageHeader titel="Our Shop Page" curPage="Shop" />
      <div className="shop-page p-10">
        <div className="container">
          <div className="flex gap-6">
            <div className="w-[60%]">
              <article>
                {/* Shop title and pagination controls */}
                <div className="shop-title flex justify-between items-center mb-4">
                  <p>
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} results
                  </p>
                  <div className={`product-view-mode flex ${GridList ? 'gridActive' : 'listActive'}`}>
                    <button className="grid" onClick={() => setGridList(true)}>
                      <i className="icofont-ghost"></i>
                    </button>
                    <button className="list" onClick={() => setGridList(false)}>
                      <i className="icofont-listine-dots"></i>
                    </button>
                  </div>
                </div>

                {/* Product Cart */}
                <ProductCart GridList={GridList} products={currentProducts} />

                {/* Pagination Controls */}
                <div className="pagination-controls flex justify-center items-center gap-2 mt-6">
                  <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} onClick={() => goToPage(i + 1)} className={`px-3 py-1 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} rounded`}>
                      {i + 1}
                    </button>
                  ))}

                  <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                    Next
                  </button>
                </div>
              </article>
            </div>

            {/* Right-Hand Content with Search and Categories */}
            <div className="h-full flex-1 bg-gray-100 p-4 rounded-md shadow-md">
              <Search gridlist={GridList} />
              <AllCatugry filterItem={filteredItem} setItem={setProduct} manuItem={manu} setproduct={setProduct} selectCatgurey={selectCatgurey} />
              <PopularPost/>
              <Tags/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
