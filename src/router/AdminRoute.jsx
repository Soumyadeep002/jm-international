import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../baseUrl';
import Loading from '../components/loading';

const AdminRoute = ({ element }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const checkAuthorization = async () => {
      if (!token) {
        setIsAuthorized(false);
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${baseUrl}/api/me/hello`, {
          headers: { "x-auth-token": token }
        });
        setIsAuthorized(response.data.role === "ADMIN");
      } catch (error) {
        console.error("Authorization error:", error);
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthorization();
  }, [token]);

  if (isLoading) {
    return <Loading />;
  }

  return isAuthorized ? element : <Navigate to="/login" />;
};

export default AdminRoute;
