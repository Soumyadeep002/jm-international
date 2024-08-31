import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Orders from "../components/orders";
import Wishlist from "../components/wishlist";
import GiftCards from "../components/giftCards";
import ContactUs from "../components/ContactUs";
import Profile from "../components/editProfile";
import MyProfile from "../components/myProfile";

const UserDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeComponent, setActiveComponent] = useState("MyProfile");

    const dashboardOptions = [
        { name: "My Profile", path: "/user/dashboard/profile", component: "MyProfile" },
        { name: "Orders", path: "/user/dashboard/orders", component: "Orders" },
        { name: "Wishlist", path: "/user/dashboard/wishlist", component: "Wishlist" },
        { name: "Gift Cards", path: "/user/dashboard/gift-cards", component: "GiftCards" },
        { name: "Contact Us", path: "/user/dashboard/contact", component: "ContactUs" },
        { name: "Edit Profile", path: "/user/dashboard/edit-profile", component: "Profile" },
    ];

    useEffect(() => {
        const currentPath = location.pathname;
        const activeOption = dashboardOptions.find(option => option.path === currentPath);
        if (activeOption) {
            setActiveComponent(activeOption.component);
        } else {
            // Default to MyProfile if no match found
            setActiveComponent("MyProfile");
            navigate("/user/dashboard/profile");
        }
    }, [location.pathname]);

    const handleOptionClick = (path, component) => {
        navigate(path);
        setActiveComponent(component);
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case "MyProfile":
                return <MyProfile />;
            case "Orders":
                return <Orders />;
            case "Wishlist":
                return <Wishlist />;
            case "GiftCards":
                return <GiftCards />;
            case "ContactUs":
                return <ContactUs />;
            case "Profile":
                return <Profile />;
            default:
                return <MyProfile />;
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 flex">
            <div className="w-1/4 pr-6">
                <h1 className="text-3xl font-bold mb-6">My Account</h1>
                <div className="flex flex-col space-y-4">
                    {dashboardOptions.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(option.path, option.component)}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
                        >
                            <h2 className="text-xl font-semibold">{option.name}</h2>
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-3/4 bg-white p-6 rounded-lg shadow-md">
                {renderComponent()}
            </div>
        </div>
    );
};

export default UserDashboard;
