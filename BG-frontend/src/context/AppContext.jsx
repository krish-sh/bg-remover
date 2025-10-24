import { createContext, useState } from "react";
import React from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = "http://localhost:4000";

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (formData) => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        `${backendUrl}/api/users/register`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setUser(data.user);
      }
      return data;
    } catch (error) {
      console.error(
        "error in handle register context",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (formData) => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        `${backendUrl}/api/users/login`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setUser(data.user);
      }

      return data;
    } catch (error) {
      console.error(
        "handle login error",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     if (!token) return;
  //     try {
  //       const { data } = await axios.get(`${backendUrl}/api/users/profile`, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       setUser(data.user);
  //     } catch (error) {
  //       console.error(
  //         "Error fetching user:",
  //         error.response?.data || error.message
  //       );
  //       localStorage.removeItem("token");
  //       setToken(null);
  //     }
  //   };
  //   fetchUser();
  // }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const value = {
    backendUrl,
    handleLogin,
    handleRegister,
    user,
    token,
    loading,
    setUser,
    setLoading,
    setToken,
    handleLogout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
