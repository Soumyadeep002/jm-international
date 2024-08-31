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
  var [a, b] = useState(0);

  return (
    <div className=" h-full w-full" >
      {/* Add dynamic routing */}
      <Header />
      <RouteComponent />
      <Footer />
      {/* <div>{a}</div>
      <button className="btn px-3 py-1 bg-slate-500" onClick={() => b(a + 1)}>
        {a}
      </button> */}
      {/* <BuyNow />
      <AddToCart /> */}
      {/* <ProductCard /> */}
      {/* <Home /> */}
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
