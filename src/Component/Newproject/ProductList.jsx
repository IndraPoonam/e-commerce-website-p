import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function ProductList() {
    const [products, setProducts] = useState([]);
    // const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

  
    // const handleSearchChange = (e) => {
    //     setSearchQuery(e.target.value);
    //   };
    
    //   const filteredProducts = products.filter(item =>
    //     item.technology.toLowerCase().includes(searchQuery.toLowerCase())
    //   );
    

    return (
        <section className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
            <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="bg-gray-100 p-4 rounded-lg">
                         <Link to={`/Productdetail/${product.id}`}>
                        <img src={product.images[2]} alt=""  />
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <p className="text-gray-500">{product.description}</p>
                       
                        </Link>
                    </div>
                ))}
            </div>
        </section>

    //     <section className="container mx-auto py-8">
    //     <h2 className="text-2xl font-bold mb-4">Product List</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //         {filteredProducts.map(product => (
    //             <div key={product.id} className="bg-gray-100 p-4 rounded-lg">
    //                 <Link to={`/Productdetail/${product.id}`}>
    //                     <img src={product.images[2]} alt="" />
    //                     <h3 className="text-lg font-semibold">{product.title}</h3>
    //                     <p className="text-gray-500">{product.description}</p>
    //                 </Link>
    //             </div>
    //         ))}
    //     </div>
    //     <div className="mt-4">
    //         <input
    //             type="text"
    //             placeholder="Search by technology"
    //             className="border border-gray-300 rounded p-2"
    //             value={searchQuery}
    //             onChange={handleSearchChange}
    //         />
    //     </div>
    // </section>
    );
}

export default ProductList;