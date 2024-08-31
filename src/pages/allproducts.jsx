import React from 'react'
import ProductCard from "../components/productCard";

export default function Allproducts() {
  return (
    <div className='pt-32'>
          <h1 className="text-center font-bold text-5xl">Categories</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto place-items-center">
      
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

  
      </div>
    </div>
  )
}
