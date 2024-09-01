import React, { useRef, useState, useEffect } from 'react'
import ProductCard from "../components/productCard";
import axios from "axios"
import baseUrl from "../baseUrl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


export default function productItem() {

  const { id } = useParams();
  const [products, setProducts] = useState([]); // State to store all products
  const [productItem, setProductItem] = useState([]); // State to store all products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to fetch all products from the API
  const fetchProductById = async (id) => {
    try {
      setLoading(true);
      // Fetch all products from the provided endpoint
      const response1 = await axios.get(`${baseUrl}api/product/${id}`);
      console.log(response1);
      setProductItem(response1); // Store the fetched products in state
      console.log(productItem);
      
    } catch (err) {
      console.error('Error fetching products:', err);
     
    } finally {
      setLoading(false);
    }
  };

  const fetchAllProducts = async () => {
    try {
    //   setLoading(true); 
      // Fetch all products from the provided endpoint
      const response = await axios.get(`${baseUrl}api/product`);
      setProducts(response.data); // Store the fetched products in state
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to fetch products'); // Set error state if fetching fails
    } 
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchProductById(id);
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
console.log(productItem.data.name+"sdasdsadsd");


  return (
    <div className='px-5 pb-9 mx-auto '>
        <div className='pt-32 lg:w-3/4 border-b-[2px] border-slate-200 mx-auto flex flex-col md:flex-row justify-center item center py-16'>
            <div className="left lg:w-1/2 flex justify-center items-center">
                <img src={`${baseUrl}${productItem.data.images[0]}`} alt="product image" />
            </div>
            <div className="right lg:w-1/2">
                <h1 className='text-4xl font-semibold mb-10'>{productItem.data.name}</h1>
                <div className='flex  items-center'>
                    <div className='text-3xl font-bold text-orange-500'>₹{productItem.data.price}</div>
                    <div className='text-2xl text-slate-300 line-through ml-4'>₹{productItem.data.price+300}</div>
                    <div className=" bg-green-500 text-white px-2 rounded-sm w-fit h-fit ml-8">12% OFF</div>
                </div>
                
                <div className="btns flex flex-col md:flex-row gap-5 mt-8">
                    <button type="button" className='w-full md:w-1/2 border-[2px] border-orange-500 text-center py-3 font-semibold duration-200 text-lg rounded-md hover:bg-orange-500 hover:text-white text-orange-500 '>Buy Now</button>
                    <button type="button" className='w-full md:w-1/2 border-[2px] border-orange-500 text-center py-3 font-semibold duration-200 text-lg rounded-md hover:bg-orange-500 hover:text-white text-orange-500 '>Add to Cart</button>
                    <button type="button"></button>
                </div>
                <h3 className='text-xl font-semibold mt-5'>Product Description</h3>
                <p className='text-justify'>{productItem.data.description}</p>
                
            </div>
        </div>
        <div className='lg:w-3/4 mx-auto'>
        <h3 className='text-2xl font-semibold '>Other products in store</h3>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                    // When the viewport is >= 640px
                    100: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    // When the viewport is >= 768px
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    // When the viewport is >= 1024px
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    // Add more breakpoints as needed
                  }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                  {products.data.map((product) => (
                <SwiperSlide key={product._id}><ProductCard  product={product}/></SwiperSlide>
            ))}
            
            </Swiper>
      </div>

    </div>
  )
}
