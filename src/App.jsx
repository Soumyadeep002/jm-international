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

  return (
    <div className=" h-full w-full" >
      {/* Add dynamic routing */}
      <Header />
      <RouteComponent />
      <Footer />

    </div>
  );
}

export default App;
