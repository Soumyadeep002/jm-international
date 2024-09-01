import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Register from "../pages/register";
import Allproducts from "../pages/allproducts";
import Login from "../pages/login";
import Home from "../pages/index";
import About from "../pages/about";
import Orders from "../pages/orders";
import Product from "../pages/product";
import UserDashboard from "../pages/userDashboard";
import Cart from "../pages/cart";
import AdminDashboard from "../pages/admin/admin-dashboard";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const RouteComponent = () => {
  return (
    
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-products" element={<Allproducts/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/item" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        {/* Protected Routes for Logged In Users */}
        <Route
          path="/user/*"
          element={<PrivateRoute element={<UserDashboard />} />}
        />

        {/* Admin Protected Routes */}
        <Route
          path="/admin/*"
          element={<AdminRoute element={<AdminDashboard />} />}
        />

        {/* catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>

  );
};

export default RouteComponent;
