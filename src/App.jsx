import React, { useState } from "react";
import BuyNow from "./components/buyNow";
import AddToCart from "./components/addToCart";
import ProductCard from "./components/productCard";
import Header from "./components/header";
import Home from "./pages";
import axios from 'axios';

import Login from "./pages/login";
import Register from "./pages/register";
import RouteComponent from "./router/route";
import Hero from "./components/hero";
import baseUrl from "../src/baseUrl";

import Footer from "./components/fotter";

function App() {
  const [cart, setCart] = useState([]);

  const token = localStorage.getItem("token");

  const addProductApi = `${baseUrl}api/cart/add`;

  // Handles adding items to the cart
  const onClickHandle = async(id, name, amount) => {
    let isPresent = false;
    cart.forEach((cartItem) => {
      if (id === cartItem.id) isPresent = true;
    });

    if (isPresent) {
      alert("Item already in cart!");
      return;
    }
    setCart([...cart, { id: id, name: name, amount: amount, quantity: 1 }]);

    const postData = {
      productId: id,
      quantity: 1
    };

    const config = {
      headers: {
        'x-auth-token': token, 
        'Content-Type': 'application/json', 
      },
    };

    // add to cart api call 
    try {
      const response = await axios.post(addProductApi, postData, config);
      console.log(response);
      
    } catch (error) {
      console.error("Authorization error:", error);
      // setIsAuthorized(false);
    } finally {
      // setIsLoading(false);
      console.log("All done");
      
    }




    // console.log(cart);
  };

    // Function to remove products with quantity 0
    const removeZeroQuantity = (id) => {
      const updatedProducts = cart.filter((product) => product.id !== id);
      setCart(updatedProducts);
      console.log("Deleted items with zero quantity");
    };

  // Handles the quantity change of cart items
  const handleChange = (product, operation) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === product.id) {
          // Handle increment and decrement operations
          const updatedQuantity = operation === "+"? item.quantity + 1: item.quantity >= 0? item.quantity - 1: 0;
          
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      })
    );

    // Remove items with zero quantity
    if (product.quantity - 1 == 0 && operation == "-") {
      removeZeroQuantity(product.id);
    }
  };

console.log(cart);


  return (
    <div className="h-full w-full">
      <Header cartsize={cart.length} />
      <RouteComponent
        handleClick={onClickHandle}
        cart={cart}
        handleChange={handleChange}
      />
      <Footer />
    </div>
  );
}

export default App;
