import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/app/01.jpg'
import img2 from '../assets/images/app/02.jpg'

function LearnAnywhere() {
    return (
        <div className="flex flex-col items-center justify-center py-16 bg-white">
            {/* Sign Up Button */}
            <div className="mb-6">
                <Link
                    to="/sign-up"
                    className="inline-block px-6 py-3 text-white font-medium text-lg bg-yellow-500 hover:bg-yellow-600 rounded-full shadow-md transition-all duration-300 ease-in-out"
                >
                    Sign Up For Free
                </Link>
            </div>

            {/* Title and Description */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn Anytime, Anywhere</h2>
                <p className="text-gray-600 text-base max-w-md mx-auto">
                    Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn.
                </p>
            </div>

            {/* App Store and Google Play Buttons */}
            <div className="flex gap-4 mt-8">
                <button className="w-56 w-10 flex items-center px-4 py-2">
                    <img
                        src={img1}
                        alt="Apple Logo"
                        className="w-full h-full mr-3"
                    />
                   
                </button>
                <button className="w-56 w-10  flex items-center px-4 py-2">
                    <img
                        src={img2}
                        className="w-full h-full mr-3"
                    />
                   
                </button>
            </div>
        </div>
    );
}

export default LearnAnywhere;
