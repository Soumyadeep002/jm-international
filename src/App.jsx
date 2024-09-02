import React, { useState } from "react";
import BuyNow from "./components/buyNow";
import AddToCart from "./components/addToCart";
import ProductCard from "./components/productCard";
import Header from "./components/header";
import Home from "./pages";
import Login from "./pages/login";
import Register from "./pages/register";
import RouteComponent from "./router/route";
import Hero from "./components/hero";
import Footer from "./components/fotter";

function App() {

  const [cart, setCart] = useState([]);


  const onClickHandle = (product) => {
    // console.log(product._id);
    if (cart.length != 0) {
      cart.forEach((cartItem)=>{
        // console.log(cartItem._id);
        
        if(product._id === cartItem._id) {
          console.log("Item already in cart")
          return
        }
        setCart([...cart, product])
        
      })
    }else{
      setCart([...cart,product])
    }
    
    
  };
  console.log(cart);
  

  return (
    <div className=" h-full w-full" >
      {/* Add dynamic routing */}
      <Header cartsize={cart.length}/>
      <RouteComponent handleClick={onClickHandle} cart={cart}/>
      <Footer />

    </div>
  );
}

export default App;
