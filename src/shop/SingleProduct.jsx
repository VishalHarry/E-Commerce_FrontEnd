import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import "swiper/css"; // Import Swiper CSS
import { Autoplay } from 'swiper/modules';
import PopularPost from './PopularPost';
import ProductDisplay from './ProductDisplay';

function SingleProduct() {
    const [product, setproduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("/src/products.json")
            .then(res => res.json())
            .then(data => setproduct(data));
    }, []);

    const result = product.filter((p) => p.id === id);
    console.log(result);

    return (
        <div className="min-h-screen w-full pt-20 sm:h-auto bg-gray-100">
            {/* Page Header */}
            <PageHeader titel="OUR SHOP SINGLE PAGE" curPage="shop / single Product" />
            {/* main components div */}
            {
                result.map((p) => (
                    <div className="flex w-full px-5 py-10">
                        {/* Left Part */}
                        <div className="w-1/3 h-90 p-6 bg-white ">
                            <div className="h-[90%] w-full  rounded-lg overflow-hidden mt-12">
                                {/* Ensure the image is properly contained and responsive */}
                                <img
                                    className="w-full h-fullobject-cover rounded-lg"
                                    src={p.img}
                                    alt="Product"
                                />
                            </div>
                        </div>

                        {/* Middle Part */}
                        <div className="w-1/2 h-90 bg-white p-6 ">
                         <div className='mt-10'>
                            <div>
                              <ProductDisplay key={p.id} items={p}/>
                            </div>
                         </div>

                        </div>

                        {/* Right Part */}
                        <div className="w-1/3 bg-white overflow-hidden  pl-6 ">
                          <PopularPost/>
                        </div>
                    </div>
                ))
            }


        </div>
    );
}

export default SingleProduct;
