import React, { useState, useEffect } from "react";
import baseUrl from "../baseUrl";
import axios from 'axios';
import { Link } from "react-router-dom";


const ProductCard = (props) => {

  

   return (
    <div className="group my-10 flex w-full max-w-xs flex-col justify-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      
          <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
            <div className=" bg-green-500 z-30 absolute top-auto bottom-3 left-4 text-white px-2 rounded-sm">12% OFF</div>
          <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={`${baseUrl}${props.product.images[0]}` } alt="product image" />
          <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src={`${baseUrl}${props.product.images[0]}`} alt="product image" />
         
          
          </a>
          <div className="mt-4 px-5 pb-5">
            <Link to={`/product/${props.product._id}`}><h5 className="text-xl tracking-tight text-slate-900">{props.product.name}</h5></Link>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">₹{props.product.price}</span>
              <span className="text-sm text-slate-900 line-through">₹{props.product.price+300}</span>
            </p>
          </div>
          <button  type="button" onClick={() => props.onClickHandle(props.product)} className="flex w-full items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-300 duration-150">
     
            Add to cart</button>
          </div>
          
      </div>
  );
};

export default ProductCard;
