import React, { useState, useEffect } from "react";
import baseUrl from "../baseUrl";
import axios from 'axios';


const ProductCard = (product) => {

  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);


  // const fetchProductDetails = async (id) => {
  //   try {
  //     setLoading(true); // Set loading state
  //     // Replace with your actual API endpoint
  //     const response = await axios.get(`https://api.example.com/products/${id}`);
  //     setProduct(response.data); // Set the fetched product data
  //   } catch (err) {
  //     console.error(`Error fetching product with ID ${id}:`, err);
  //     setError('Failed to fetch product data'); // Handle errors
  //   } finally {
  //     setLoading(false); // Set loading state to false
  //   }
  // };


  // useEffect(() => {
  //   if (productId) {
  //     fetchProductDetails(productId);
  //   }
  // }, [productId]);

  // // Render loading, error, or product details
  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // if (!product) {
  //   return <p>No product found.</p>;

  // }

  // console.log(product.product.images[0]);
  
  return (
    <div className="group my-10 flex w-full max-w-xs flex-col justify-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      
          <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
            <div className=" bg-green-500 z-30 absolute top-auto bottom-3 left-4 text-white px-2 rounded-sm">12% OFF</div>
          <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={`${baseUrl}${product.product.images[0]}`} alt="product image" />
          <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src={`${baseUrl}${product.product.images[0]}`} alt="product image" />
         
          
          </a>
          <div className="mt-4 px-5 pb-5">
          {/* {
            product[].map((product) => (
              // <h1>{product.name}</h1>
              
                // console.log(product)
               ))
          } */}
            <h5 className="text-xl tracking-tight text-slate-900">{product.product.name}</h5>
         
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">₹{product.product.price}</span>
              <span className="text-sm text-slate-900 line-through">₹{product.product.price+300}</span>
            </p>
          </div>
          <button type="button" className="flex w-full items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-300 duration-150">
     
            Add to cart</button>
          </div>
          
      </div>
  );
};

export default ProductCard;
