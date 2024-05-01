

import React from 'react';

function Header() {
    return (
        <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold">Your Logo</a>
            <div className="flex gap-4">
                <a href="#" className="bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded-md">Login</a>
                <button className="bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded-md">Add to Cart</button>
                <button className="bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded-md">Favorite</button>
            </div>
        </header>
    );
}

export default Header;
