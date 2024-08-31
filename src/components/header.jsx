import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from "react-icons/fa";
import axios from "axios";
import baseUrl from "../baseUrl";
import Logo from "../assets/logo.webp"

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [wishlistItems, setWishlistItems] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");
    if (token && storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
      setIsAdmin(role === "ADMIN");
      setIsUser(role === "USER");
      fetchUserDetails(token);
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
      setIsUser(false);
    }
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      const response = await axios.get(`${baseUrl}/api/me/hello`, {
        headers: {
          "x-auth-token": token
        }
      });
      if (response.data && response.data.name) {
        setUserName(response.data.name);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      handleLogout();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("role");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isUser");
    setIsLoggedIn(false);
    setUserName("");
    setIsAdmin(false);
    setIsUser(false);
    window.location.href = "/";
  };

  return (
    <>
    <header className=" bg-orange-500 text-white py-4 px-8 fixed w-full z-50">
      {/* Logo or Company Name */}
      <div className="flex items-center justify-between lg:w-4/5 mx-auto">

      
      <div className="flex items-center space-x-4">
        <div className="font-bold flex justify-center items-center text-3xl gap-3">
          <a href="logo">
            <img src={Logo} alt=" Logo" className=" h-14" /> {/* Update logo path */}
          </a>
          <h1 className="block md:hidden">JM ...</h1>
          <h1 className="hidden md:block">JM INTERNATIONAL</h1>
        </div>
      </div>

    

        {/* navlinks */}
        <div className="flex items-center space-x-4 relative ">
        <div className="hidden space-x-4 md:flex">
          <div className="text-xl">Home</div>
          <div className=" text-xl">About us</div>
        </div>
        {/* <div className="text-xl group">Shop
          <div className="absolute right-0 mt-2 w-52 bg-white text-gray-800 rounded-md shadow-lg hidden group-hover:block">
            <div className="p-6">
              <div>
                <h1>Link 1</h1>
              </div>
            </div>
          </div>
          </div> */}
       
          
          <div className="bg-white p-3 rounded-lg"><FaShoppingCart className="text-2xl  text-orange-500" />
          </div>
         
          
          <div className="relative group">
            <FaUser className="text-2xl" />
            <div className="absolute right-0 mt-2 w-52 bg-white text-gray-800 rounded-md shadow-lg hidden group-hover:block">
              <div className="p-6">
                <h1>Home</h1>
                {isLoggedIn && userName ? (
                  <div>
                    <p className="mb-2">
                      Hello,{" "}
                      <a href="/user/dashboard" className="hover:font-bold">
                        {userName}
                      </a>
                    </p>
                    {isAdmin && (
                      <p>
                        <a href="/admin/dashboard" className="hover:font-bold">
                          Admin Dashboard
                        </a>
                      </p>
                    )}
                    {isUser && (
                      <>
                        <p>
                          <a href="/user/dashboard/orders" className="hover:font-bold">
                            Orders
                          </a>
                        </p>
                        <p>
                          <a href="/user/dashboard/wishlist" className="hover:font-bold">
                            Wishlist
                          </a>
                        </p>
                        <p>
                          <a href="/user/dashboard/gift-cards" className="hover:font-bold">
                            Gift Cards
                          </a>
                        </p>
                        <p>
                          <a href="/user/dashboard/contact" className="hover:font-bold">
                            Contact Us
                          </a>
                        </p>
                        <p>
                          <a href="/user/dashboard/edit-profile" className="hover:font-bold">
                            Edit Profile
                          </a>
                        </p>
                      </>
                    )}
                    <p className="mt-2">
                      <a href="#" className="hover:font-bold" onClick={handleLogout}>
                        Logout
                      </a>
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      Please{" "}
                      <a href="/login" className="hover:font-bold">
                        login
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {isUser && (
            <>
              <div className="relative group cursor-pointer">
                <FaHeart className="text-2xl" />
                {/* Add wishlist items count here */}
                {wishlistItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {wishlistItems}
                  </span>
                )}
              </div>
              <div className="relative group cursor-pointer">
                <FaShoppingCart className="text-2xl" />
                {/* Add cart items count here */}
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </div>
            </>
          )}

        <div className="w-9 flex flex-col items-end gap-[0.475rem] cursor-pointer group  md:hidden">
            <div className="w-5 h-[0.25rem] group-hover:w-7 duration-300 bg-white"></div>
            <div className="w-9 h-[0.25rem] group-hover:w-5 duration-300 bg-white"></div>
            <div className="w-7 h-[0.25rem] group-hover:w-9 duration-300 bg-white"></div>
          </div>
        </div>
        
      </div>

      



    </header>
      <div className="w-screen h-96 fixed z-40 mt-20 md:hidden -translate-y-96 duration-500 bg-orange-500 block">
        <div className="py-5">Home</div>
        <div className="py-5">About Us</div>
        <div className="py-5">Products</div>
        <div className="py-5">User Account</div>
      </div>
    </>
  );
};

export default Header;
