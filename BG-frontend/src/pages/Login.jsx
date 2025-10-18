import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

export default function Login() {
  const { handleLogin, loading } = useContext(AppContext);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmiit = async (e) => {
    e.preventDefault();

    const res = await handleLogin(formData);
    if (res?.success) {
      toast.success("Login successfully");
    }
  };

  return (
    <div className="p-2">
      <h2 className="font-bold">Register</h2>
      <form onSubmit={handleSubmiit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => ({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => ({ ...formData, password: e.target.value })}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
