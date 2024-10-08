import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from "react-icons/fa";
import axios from "axios";
import baseUrl from "../baseUrl";
import Logo from "../assets/logo.webp"
import { Link, NavLink } from "react-router-dom";


const Header = ({cartsize}) => {

  

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [wishlistItems, setWishlistItems] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    // const role = localStorage.getItem("role");
    // if (token && storedIsLoggedIn === "true") {
    if (token) {
      setIsLoggedIn(true);
      console.log("Token is true");
      
      // setIsAdmin(role === "ADMIN");
      // setIsUser(role === "USER");
      // fetchUserDetails(token);
    } else {
      setIsLoggedIn(false);
      console.log("Token is false");

      // setIsAdmin(false);
      // setIsUser(false);
    }
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      const response = await axios.get(`${baseUrl}api/me/hello`, {
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

  const handleToggle = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);

    }
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className=" bg-orange-500 text-white py-4 px-8 fixed w-full z-50">
      {/* Logo or Company Name */}
      <div className="flex items-center justify-between lg:w-4/5 mx-auto">

      
      <div className="flex items-center space-x-4">
      <Link to="/">
        <div className="font-bold flex justify-center items-center text-3xl gap-3">
          
            <img src={Logo} alt=" Logo" className=" h-14" /> {/* Update logo path */}
          
          <h1 className="block md:hidden">JM ...</h1>
          <h1 className="hidden md:block">JM INTERNATIONAL</h1>
          
        </div>
        </Link>
      </div>

    

        {/* navlinks */}
        <div className="flex items-center space-x-4 relative ">
        <div className="hidden space-x-4 md:flex">
          <Link to="/" className="text-xl">Home</Link>
          
          <Link to="/about-us" className=" text-xl">About us</Link>
          <Link to="/all-products" className=" text-xl">Shop</Link>
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
       
          
          <Link to="/cart">
            <div className="bg-white p-3 rounded-lg">
              <FaShoppingCart className="text-2xl  text-orange-500" />
              {cartsize>0?<span className="bg-green-600 text-white py-1 px-2 rounded-3xl absolute top-0 bottom-auto translate-x-6 -translate-y-4">{cartsize}</span>:""}
              
            </div>
          </Link>
          {!isLoggedIn && 
          <Link to="/login" className=" text-xl">Login</Link>
      }
          
          {isLoggedIn && 
            <div className="relative ">
            <FaUser onClick={handleToggle} className="text-2xl cursor-pointer" />
              <div className={`absolute right-0 mt-2 w-52 bg-white text-gray-800 rounded-md shadow-lg ${open===true?'block':'hidden'}`}>
              <div className="p-6">
                {isLoggedIn? (
                  <div>
                    <p className="mb-2">
                      Welcome, User
                      {/* Hello,{" "} */}
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
          }


        <div className="w-9 flex flex-col items-end gap-[0.475rem] cursor-pointer group  md:hidden" onClick={()=>setIsOpen(!isOpen)}>
            <div className={`h-[0.25rem] duration-300 relative ${!isOpen? 'w-5 group-hover:w-7': 'rotate-45 translate-y-1.5 w-9'} bg-white`}></div>
            <div className={`h-[0.25rem] duration-300 relative ${!isOpen? 'w-9 group-hover:w-5': 'hidden'} bg-white`}></div>
            <div className={`h-[0.25rem] duration-300 relative ${!isOpen? 'w-7 group-hover:w-9': '-rotate-45 -translate-y-1.5 w-9'} bg-white`}></div>
          </div>
        </div>
        
      </div>

      



    </header>
      <div className={`w-screen  fixed flex text-white font-semibold justify-cente items-center text-xl flex-col z-40 mt-20 md:hidden  ${isOpen? '': '-translate-y-96'} duration-500 bg-orange-500 block`}>
        <Link to="/" className="py-5 ">Home</Link>
        <Link to="/about-us" className="py-5 ">About Us</Link>
        <Link to="/all-products" className="py-5 ">Products</Link>
        <Link to="/" className="py-5 ">User Account</Link>
      </div>
    </>
  );
};

export default Header;
