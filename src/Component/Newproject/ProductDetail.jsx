// // ProductDetail.js

// import React, { useState } from 'react';

// function ProductDetail({ product }) {
//     const [quantity, setQuantity] = useState(1);

//     const handleIncrement = () => {
//         setQuantity(quantity + 1);
//     };

//     const handleDecrement = () => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     };

//     return (
//         <div className="container mx-auto py-8">
//             <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
//             <p className="text-gray-600">${product.price * quantity}</p>
//             <div className="flex items-center mt-4">
//                 <button onClick={handleDecrement} className="bg-blue-500 text-white px-3 py-1 rounded-l">-</button>
//                 <span className="px-3">{quantity}</span>
//                 <button onClick={handleIncrement} className="bg-blue-500 text-white px-3 py-1 rounded-r">+</button>
//             </div>
//         </div>
//     );
// }

// export default ProductDetail;

// ProductDetail.js




// import React, { useState } from 'react';

// function ProductDetail({ product }) {
//     const [quantity, setQuantity] = useState(1);

//     const handleIncrement = () => {
//         setQuantity(quantity + 1);
//     };

//     const handleDecrement = () => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     };

//     // Convert price to INR format
//     const priceInINR = product.price * quantity;
//     const formattedPrice = new Intl.NumberFormat('en-IN', {
//         style: 'currency',
//         currency: 'INR'
//     }).format(priceInINR);

//     return (
//         <div className="container mx-auto py-8">
//             <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
//             <p className="text-gray-600">{formattedPrice}</p>
//             <div className="flex items-center mt-4">
//                 <button onClick={handleDecrement} className="bg-blue-500 text-white px-3 py-1 rounded-l">-</button>
//                 <span className="px-3">{quantity}</span>
//                 <button onClick={handleIncrement} className="bg-blue-500 text-white px-3 py-1 rounded-r">+</button>
//             </div>
//         </div>
//     );
// }

// export default ProductDetail;




import React from "react"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
    const{id}=useParams();
    const [product, setProduct] = useState(null);
     useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            })
            .catch(error => console.error('Error fetching products:', error));
   },[id]);

   return (
    <>
    <div className='grid grid-cols-3 h-[100vh] w-full mt-6 px-10'>
    {product && ( // Check if product is not null before rendering
    <div className="flex justify-center">
        <div className='mt-5 w-[35vw] h-[45vh]  items-center'>
            <img  src={product.images[2]} alt="" />
          <h1 className='text-2xl pt-5 text-black text-center'>Id:{product.id}</h1>
          <h1 className='text-2xl pt-5 text-black-400 text-center'>title:- {product.title}</h1>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>description:- {product.description}</h2>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>price- {product.price}</h2>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>discountPercentage:- {product.discountPercentage}</h2>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>Rating:- {product.rating}</h2>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>Stock:- {product.stock}</h2>
          <h2 className='text-1xl pt-2 text-black pl-[2rem]'>Brand- {product.brand}</h2>

          
          </div>


        </div>
      )}
    </div>
    </>
   )
 }
 
 export default ProductDetail
