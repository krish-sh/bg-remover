import { Routes, Router } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Result from "./pages/Result";

export default function App() {
  return (
    <div className="container max-auto">
      <div className="w-full h-full">
        <Toaster />
        <NavBar />
        <Routes>
          <Router path="/" element={<Home />} />
          <Router path="/login" element={<Login />} />
          <Router path="/result" element={<Register />} />
          <Router path="/result" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}
