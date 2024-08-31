import React from "react";
import Logo from "../assets/logo.webp"

const Footer = () => {
    return (
        <footer className="bg-white text-black py-8 border-t-[0.5px] border-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-5">
                            <img src={Logo} className="h-20 aspect-square" alt="Company Logo" />
                            <h1 className="text-2xl">JM INTERNATIONAL</h1>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <p className="text-sm">We are dedicated to providing the best shopping experience for our customers.</p>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <div className="px-2 py-0.5 flex w-fit border-2 border-orange-500 rounded-full text-orange-500 mb-8">+00 0000000000</div>
                    <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                    <p className="text-sm">Vill-Gomakhali post-Thanarpara Distric-Nadia pin 741152</p>
                    </div>



                    <iframe width="100%" height="250" title="Address" loading="lazy" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAVC1rp28LPP-kwCwVPZpZEt5LqLNYXVS8&amp;q=23.96122833,88.549275"></iframe>
                </div>

                <div className="flex items-center justify-between text-gray-500 px-5 mt-24 mb-14">
                    <div>Terms & Conditions</div>
                    <div>Return & Refund Policy</div>
                    <div>Privacy Policy</div>
                    <div>Shipping & Payment Policy</div>
                </div>

                
            </div>
                <div className="mt-8 border-t border-gray-500 pt-8 text-center">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()}. All rights reserved. Design and developed by </p>                
                </div>
        </footer>
    );
};

export default Footer;