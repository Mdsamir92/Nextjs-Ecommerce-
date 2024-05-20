'use client'
import React from 'react'
import Product from './components/allproducts/Product'
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer";

function page() {


  return (
    <div >
      <Navbar />
      <Product />
      <Footer/>
    </div>
  )
}
export default page

