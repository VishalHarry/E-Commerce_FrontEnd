import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/01.jpg',
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/02.jpg',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/03.jpg',
        cate: 'Phones',
        title: 'iPhone 12',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/04.jpg',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/05.jpg',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/06.jpg',
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/07.jpg',
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/08.jpg',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$199.00',
        id: 8,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/01.jpg',
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/02.jpg',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/03.jpg',
        cate: 'Phones',
        title: 'iPhone 12',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/04.jpg',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/05.jpg',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/06.jpg',
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/07.jpg',
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/08.jpg',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$199.00',
        id: 8,
    },
]


function HomeProductCatugry() {
    const [item, setItem] = useState(ProductData);
    //catugry based functioon
    const filterItem = (category) => {
        if (category === 'All') {
            setItem(ProductData);
        } else {
            setItem(ProductData.filter(item => item.cate === category))
        }
    }

    return (
        <div className="h-full w-full p-5 flex flex-col items-center">
            {/* Header Section */}
            <div className="w-[90%] rounded-md shadow-lg p-5 ">
                <h2 className="text-3xl font-bold text-center  mb-4">Our Products</h2>
                <div className="flex justify-center">
                    <ul className="flex gap-4 ">
                        <li
                            className="cursor-pointer px-4 py-2 bg-white rounded-md text-red-700 hover:bg-red-300 hover:text-white transition-all"
                            onClick={() => filterItem("All")}
                        >
                            All
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 bg-white rounded-md text-red-700 hover:bg-red-300 hover:text-white transition-all"
                            onClick={() => filterItem("Shoes")}
                        >
                            Shoes
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 bg-white rounded-md text-red-700 hover:bg-red-300 hover:text-white transition-all"
                            onClick={() => filterItem("Bags")}
                        >
                            Bags
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 bg-white rounded-md text-red-700 hover:bg-red-300 hover:text-white transition-all"
                            onClick={() => filterItem("Phones")}
                        >
                            Phone
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 bg-white rounded-md text-red-700 hover:bg-red-300 hover:text-white transition-all"
                            onClick={() => filterItem("Beauty")}
                        >
                            Beauty
                        </li>
                    </ul>
                </div>
            </div>

                {/* product Section */}

                <div className="h-auto w-[90%]  mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {item.map((product, index) => (
                        <Link to={`/shop`} key={index}>
                            <div className="w-full h-auto bg-white rounded-md shadow-lg hover:shadow-2xl transition-all p-5">
                                <div className="w-full h-[150px] overflow-hidden rounded-md">
                                    <img
                                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                                        src={product.imgUrl}
                                        alt="product"
                                    />
                                </div>
                                <div className="mt-3 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
                                    <p className="text-lg font-bold text-red-500 mt-2">{product.price}</p>
                                </div>
                                {/* Rating Component */}
                                <Rating value={Math.random() * 5} /> {/* Generate random ratings for now */}
                            </div>
                        </Link>
                    ))}
                </div>
        </div>

    )
}

export default HomeProductCatugry
