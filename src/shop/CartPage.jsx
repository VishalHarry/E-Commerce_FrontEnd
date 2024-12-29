import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import CheckOutPage from './CheckOutPage';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotalPrice = (item) => item.price * item.quantity;

  const handleIncreaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const cartSubtotal = cartItems.reduce((total, item) => total + calculateTotalPrice(item), 0);
  const orderTotal = cartSubtotal + 10; // Assume flat shipping fee of 10

  return (
    <div>
      <PageHeader titel="Shop Cart" curPage="Cart Page" />
      <div className="shop-cart p-8">
        <div className="container mx-auto">
          <div className="section-wrapper">
            {/* Cart Table */}
            <div className="cart-top bg-white shadow-md rounded-lg p-4">
              {cartItems.length > 0 ? (
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-4 border-b">Product</th>
                      <th className="text-right py-2 px-4 border-b">Price</th>
                      <th className="text-center py-2 px-4 border-b">Quantity</th>
                      <th className="text-right py-2 px-4 border-b">Total</th>
                      <th className="text-center py-2 px-4 border-b">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="py-2 px-4 border-b">
                          <div className="flex items-center">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded mr-4"
                            />
                            <span>{item.name}</span>
                          </div>
                        </td>
                        <td className="text-right py-2 px-4 border-b">${item.price}</td>
                        <td className="text-center py-2 px-4 border-b">
                          <div className="flex items-center justify-center">
                            <button
                              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                              onClick={() => handleDecreaseQuantity(item)}
                            >
                              -
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button
                              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                              onClick={() => handleIncreaseQuantity(item)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="text-right py-2 px-4 border-b">${calculateTotalPrice(item)}</td>
                        <td className="text-center py-2 px-4 border-b">
                          <button
                            className="text-red-500 "
                            onClick={() => handleRemoveItem(item)}
                          >
                         <span >🗑️</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center text-gray-600 py-8">Your cart is empty.</p>
              )}
            </div>

            {/* Cart Summary */}
            {cartItems.length > 0 && (
              <div className="mt-8 flex justify-end">
                <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                  <div className="flex justify-between py-2">
                    <span>Subtotal:</span>
                    <span>${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Shipping:</span>
                    <span>$10.00</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-bold py-2">
                    <span>Total:</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                  <form action="" className='cart-checkout'>
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckOutPage/>
                  </div>
                 </form>
                </div>
               
              </div>
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
