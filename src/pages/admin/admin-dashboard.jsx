import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "../../components/editProfile";
import Orders from "../../components/admin/Orders";
import Products from "../../components/admin/products";
import Users from "../../components/admin/users";
import Settings from "../../components/admin/settings";
import Overview from "../../components/admin/overView";
import { FaTachometerAlt, FaBox, FaUsers, FaCog, FaUserEdit } from 'react-icons/fa'; // Added icons

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState("Overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const dashboardOptions = [
    { name: "Dashboard", path: "/admin/dashboard", component: "Overview" },
    { name: "Orders", path: "/admin/dashboard/orders", component: "Orders" },
    { name: "Products", path: "/admin/dashboard/products", component: "Products" },
    { name: "Users", path: "/admin/dashboard/users", component: "Users" },
    { name: "Settings", path: "/admin/dashboard/settings", component: "Settings" },
    { name: "Profile", path: "/admin/dashboard/profile", component: "Profile" },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeOption = dashboardOptions.find(
      (option) => option.path === currentPath
    );
    if (activeOption) {
      setActiveComponent(activeOption.component);
    } else {
      // Default to Dashboard if no match found
      setActiveComponent("Overview");
      navigate("/admin/dashboard");
    }
  }, [location.pathname, navigate]);

  const handleOptionClick = (path, component) => {
    navigate(path);
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Orders":
        return <Orders />;
      case "Products":
        return <Products />;
      case "Users":
        return <Users />;
      case "Settings":
        return <Settings />;
      case "Profile":
        return <Profile />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex overflow-hidden">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white p-6 transition-transform duration-300 ease-in-out fixed top-0 left-0 h-full overflow-y-auto z-10 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }} // Set fixed width for the sidebar
      >
        <div className="flex items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <div className="flex flex-col space-y-4">
          {dashboardOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.path, option.component)}
              className={`flex items-center p-4 rounded-lg shadow-md transition-colors duration-300 text-left ${
                activeComponent === option.component ? "bg-gray-700" : "bg-gray-800"
              }`}
            >
              {option.component === "Overview" && <FaTachometerAlt className="mr-2" />}
              {option.component === "Orders" && <FaBox className="mr-2" />}
              {option.component === "Users" && <FaUsers className="mr-2" />}
              {option.component === "Settings" && <FaCog className="mr-2" />}
              {option.component === "Profile" && <FaUserEdit className="mr-2" />}
              <h2 className="text-xl font-semibold">{option.name}</h2>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0" // Adjust margin-left based on sidebar width
        }`}
        style={{ marginTop: "64px" }} // Adjust margin-top to avoid overlap with header
      >
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-2xl font-bold">150</p>
          </div>
          {/* Add more cards as needed */}
        </div>
        {renderComponent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
