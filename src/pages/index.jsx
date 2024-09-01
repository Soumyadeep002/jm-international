import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
import baseUrl from "../baseUrl";
import Hero from "../components/hero";
import Product from "./product";


const Home = () => {
  const [products, setProducts] = useState([]); // State to store all products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to fetch all products from the API
  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      // Fetch all products from the provided endpoint
      const response = await axios.get(`${baseUrl}api/product`);
      setProducts(response.data); // Store the fetched products in state
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to fetch products'); // Set error state if fetching fails
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Render loading, error, or product list
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products found.</p>;
  }
  return (
    <>
      <Hero className=" mt-36"/>
      <h1 className="text-center font-bold text-5xl mt-16">Categories</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto place-items-center">
      {products.data.map((product) => (
      // <h1>{product.name}</h1>
        <ProductCard key={product._id} product={product}/>
        // console.log(product)
       ))}
      </div>
    </>
  );
};

export default Home;
