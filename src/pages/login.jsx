import axios from "axios";
import React, { useState } from "react";
import baseUrl from "../baseUrl";
import Loading from "../components/loading";
import Logo from "../assets/logo.webp"
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {


  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Data to be sent in the POST request
    const postData = {
      email: email,
      password: password,
    };

    try {
      // Make the POST request
      const response = await axios.post(`${baseUrl}api/auth/login`, postData);

      // Handle successful response
      setSuccess('Login successful!');
      console.log("success");
      console.log(postData);
      setError('');
      console.log('Response:', response.data);

      if (response.data.code == 200) {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("loggedin", true)
        navigate('/');
      }

    } catch (error) {
      // Handle the error
      setError('Login failed. Please try again.');
      console.log("Failed");
      console.log(postData);
      
      setSuccess('');
      console.error('Error posting data:', error.response ? error.response.data : error.message);
    }
  };






  return (
    <section className="">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 drop-shadow-xl pt-36 md:pt-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex justify-center items-center w-full mx-auto">
                <img src={Logo} className="w-14 mr-2" alt="company logo"/>
                 <h1 className="text-2xl font-semibold"> JM INTERNATIONAL </h1>
              </div>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " required=""/>
                    </div>
                    <div className="flex items-center justify-between">
                        
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-orange-500">Sign in</button>
                    <p className="text-sm font-light text-gray-500 ">
                        Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline ">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  );
};

export default Login;
