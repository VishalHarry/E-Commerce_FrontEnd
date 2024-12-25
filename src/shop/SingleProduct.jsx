import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper CSS
import "swiper/css"; // Optional: Add additional styles if needed
import { Autoplay } from 'swiper/modules'
import PopularPost from './PopularPost';



function SingleProduct() {
    const [product, setproduct] = useState([]);
    const { id } = useParams()
    // console.log(id);
    useEffect(() => {
        fetch("/src/products.json",).then(res => res.json()).then(data => setproduct(data)
        )
    }, [])
    const result = product.filter((p) => p.id === id);
    console.log(result);





    return (
        <div className="h-screen w-full pt-20 sm:h-auto">
            {/* Page Header */}
            <PageHeader titel="OUR SHOP SINGLE PAGE" curPage="shop / single Product" />
            <div className="min-h-screen bg-gray-100 p-5">

                <main className="mt-10 container mx-auto">

                    {
                        result.map((p) => (
                            <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col lg:flex-row">
                                {/* Left Side - Product Image */}
                                <div className="w-full lg:w-1/3 mb-5 lg:mb-0 lg:pr-5 overflow-hidden">
                                    <img
                                        key={p.id}
                                        className=" object-cover rounded-lg "
                                        src={p.img}
                                        alt="product"
                                    />

                                    <h1 className='text-3xl mt-5 text-gray-500'>{p.name}</h1>
                                     <h3 className='text-xl mt-3 text-green-700' >Brand:{p.seller}</h3>
                    
                                    <div className="mt-4">
                                        <label htmlFor="size" className="text-lg text-gray-700">Choose Size:</label>
                                        <select id="size" className="mt-2 p-2 border border-gray-300 rounded-md">
                                            <option value="S">Small</option>
                                            <option value="M">Medium</option>
                                            <option value="L">Large</option>
                                            <option value="XL">Extra Large</option>
                                        </select>
                                    </div>


                                </div>

                                {/* Right Side - Product Details */}
                                <div className="w-full lg:w-2/3">
                                    {/* Price */}
                                    <div className="mb-4">
                                        <p className="text-xl text-red-600 font-semibold">${p.price}</p>
                                        <p className="text-sm text-gray-500 line-through">$6</p>
                                        <p className="text-green-600 font-semibold">80% off</p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center space-x-2 mb-4">
                                        <span className="text-yellow-500">★★★★★</span>
                                        <span className="text-sm text-gray-600">4.5/5 (1,500 reviews)</span>
                                    </div>

                                    {/* Product Features */}
                                    <p className="text-xl font-bold mb-4">Key Features</p>
                                    <ul className="list-disc ml-5 mb-4 text-gray-700">
                                        <li>Durable Build</li>
                                        <li>High Quality</li>
                                        <li>Lightweight</li>
                                        <li>Easy to Use</li>
                                        <li>Affordable</li>
                                        <li>Stylish Design</li>
                                        <li>Premium Packaging</li>
                                    </ul>

                                    {/* Available Offers */}
                                    <p className="text-xl font-bold mb-4">Available Offers</p>
                                    <ul className="list-disc ml-5 mb-4 text-gray-700">
                                        <li>10% off on Bank ABC cards</li>
                                        <li>5% cashback on XYZ cards</li>
                                    </ul>

                                    {/* Stock Status */}
                                    <p className="text-xl font-bold mb-4">
                                        Stock Status: <span className="text-green-600">{p.stock}</span>
                                    </p>

                                    {/* Warranty */}
                                    <p className="text-xl font-bold mb-4">Warranty: 1 Year</p>

                                    {/* Add to Cart / Buy Now Buttons */}
                                    <div className="flex space-x-4 mt-6">
                                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                                            Add to Cart
                                        </button>
                                        <button className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition duration-300">
                                            Buy Now
                                        </button>
                                    </div>

                                    {/* Product Description */}
                                    <div className="mt-8">
                                        <p className="text-xl font-semibold mb-2">Product Description</p>
                                        <p className="text-gray-700">
                                            Made with high-quality materials designed to last, ensuring long-term use without wear and tear.
                                            Crafted with precision using premium materials, delivering excellent performance and reliability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </main>
            </div>

        </div>


    )
}

export default SingleProduct
