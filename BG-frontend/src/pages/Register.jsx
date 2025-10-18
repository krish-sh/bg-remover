import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

export default function Register() {
  const { handleRegister, loading } = useContext(AppContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = async(e) => {
    e.preventDefault();
    const res = await handleRegister(formData);
    if (res?.success) {
      toast.success("user Signup Successfully");
    }
  };

  return (
    <div className="p-2">
      <h2 className="font-bold">Register</h2>
      <form onSubmit={handleSignup}>
        <input
          type="username"
          placeholder="username"
          value={formData.username}
          onChange={(e) => {
            setFormData({ ...formData, username: e.target.value });
          }}
        />
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
