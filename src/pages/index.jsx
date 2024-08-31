import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
import baseUrl from "../baseUrl";
import Hero from "../components/hero";
import Product from "./product";

const Home = () => {
 

  return (
    <>
      <Hero className=" mt-36"/>
      <h1 className="text-center font-bold text-5xl mt-16">Categories</h1>
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
    </>
  );
};

export default Home;
