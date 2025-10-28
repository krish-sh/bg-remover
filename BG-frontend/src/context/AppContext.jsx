import { createContext, useState } from "react";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = "http://localhost:4000";

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(false);

  const [Image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  const handleRegister = async (formData) => {
    try {
      setLoading(true);
      console.log(
        "sending register request to:",
        `${backendUrl}/api/users/register`,
        formData
      );

      const { data } = await axios.post(
        `${backendUrl}/api/users/register`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);

        setUser(data.user);
      }
      return data;
    } catch (error) {
      return (
        error.response?.data || { success: false, message: "Request failed" }
      );
      console.log("axios error:", error);
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
        },
        { withCredentials: true }
      );

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);

        setUser(data.user);
        toast.success("User Logined Successfully");
        navigate("/");
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

  const removeBg = async (image) => {
    try {
      setImage(image);
      setResultImage(false);

      navigate("/result");

      const formData = new FormData();
      image && formData.append("image", image);

      console.log("🟡 Token being sent:", token);

      const { data } = await axios.post(
        `${backendUrl}/api/images/bgRemover`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("🟢 Response from backend:", data);

      if (data.success) {
        console.log("✅ Background removed successfully");
        setResultImage(data.resultData);
      } else {
        console.log(error.message);
        console.error("❌ Backend error:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("🔥 Error in removeBg:", error);
      toast.error("Remove background is not work yet.");
    }
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
    removeBg,
    setResultImage,
    setImage,
    resultImage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
