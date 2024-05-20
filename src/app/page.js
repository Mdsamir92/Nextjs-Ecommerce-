'use client'
import React from 'react'
import Product from './components/allproducts/Product'
import Navbar from './components/Navbar/Navbar'
// import Footer from "./components/Footer/Footer";

import dynamic  from "next/dynamic";

const Footer = dynamic(() => import("./components/Footer/Footer"), {
  ssr: false,
});
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

