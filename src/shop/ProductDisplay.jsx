import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductDisplay({ items }) {
    const { img,name, id, price, seller, ratingsCount, quantity } = items;
    const [prequantity, setquantity] = useState(quantity);
    const [coupn, setcoupon] = useState("");
    const [size, setsize] = useState("select size");
    const [color, setcolor] = useState("select color");

    const handleSizeChange = (e) => {
        setsize(e.target.value);
    };
    const handleColorChange = (e) => {
        setcolor(e.target.value);
    };

    const handledecr = () => {
        if (prequantity > 1) {
            setquantity(prequantity - 1);
        }
    };
    const handleIncre = () => {
        setquantity(prequantity + 1);
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        const product = {
            
            id: id,
            img:img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupn: coupn,
            
        };  
        // console.log(product);
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);
        
        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;
        } else {
            existingCart.push(product);
        }
        
        localStorage.setItem('cart', JSON.stringify(existingCart));
        setquantity(1);
        setsize("select size");
        setcolor("select color"); // Removed redundant setcolor call
        
    };

    return (
        <div key={id}>
            <h2 className='text-3xl text-black'>{name}</h2>
            <p className='rating text-orange-400'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span> /{ratingsCount} reviews</span>
            </p>
            <h4 className='text-2xl font-bold text-red-600'>${price}</h4>
            <p className='text-gray-700'>Seller: {seller}</p>
            <p className='text-gray-700 mt-2'>{name} offers unmatched performance and quality with cutting-edge technology and premium materials. Don't miss out—add it to your cart today!</p>
            
            <form onSubmit={handlesubmit} className='mt-4'>
                <div className='flex justify-between'>
                    {/* Size */}
                    <div className='select-product size w-48'>
                        <select value={size} onChange={handleSizeChange} className="border border-gray-300 rounded p-2">
                            <option value="Select Size">Select Size</option>
                            <option value="SM">SM</option>
                            <option value="LG">LG</option>
                            <option value="MD">MD</option>
                            <option value="XX">XX</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    {/* Color */}
                    <div className='select-product color w-48'>
                        <select value={color} onChange={handleColorChange} className="border border-gray-300 rounded p-2">
                            <option value="Select Color">Select Color</option>
                            <option value="Red">Red</option>
                            <option value="Black">Black</option>
                            <option value="Green">Green</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Pink">Pink</option>
                        </select>
                    </div>
                </div>

                <div className='mt-4 flex justify-between items-center'>
                    {/* Quantity */}
                    <div className='flex items-center'>
                        <button type="button" className='py-1 px-3 border border-gray-300 rounded hover:bg-gray-200' onClick={handledecr}>-</button>
                        <input className='w-12 text-center border border-gray-300 rounded mx-2' type="text" value={prequantity} onChange={(e) => setquantity(parseInt(e.target.value, 10))} />
                        <button type="button" className='py-1 px-3 border border-gray-300 rounded hover:bg-gray-200' onClick={handleIncre}>+</button>
                    </div>
                    {/* Coupon Field */}
                    <input type="text" placeholder='Enter Discount Code' className="border border-gray-300 rounded p-2 w-48" onChange={(e) => setcoupon(e.target.value)} />
                </div>

                <div className='mt-4 flex justify-between'>
                    <button type="submit" className='bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700'>Add to Cart</button>
                    <Link to="/cart-page">
                        <button type="button" className='bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600'>Check Out</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default ProductDisplay;
