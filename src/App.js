
import React from 'react'
// import Header from './Newproject/Header';
import Header from './Component/Newproject/Header';
import HeroSection from './Component/Newproject/HeroSection';
import ProductList from './Component/Newproject/ProductList';
import Footer from './Component/Newproject/Footer';
import ProductDetail from './Component/Newproject/ProductDetail';
import { Routes,Route } from 'react-router-dom';
function App() {
  // const product = { id: 1, name: "Product Name", price: 10.99 };
  return (
    <>
  

<Header/>
<HeroSection/>
            <Routes>
            <Route exact path='/' element={<ProductList/>}/>
            <Route exact path='Productdetail/:id' element={<ProductDetail/>}/>
            </Routes>
<Footer/>
    
    
    </>
  )
}

export default App
