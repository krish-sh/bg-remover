import { Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Result from "./pages/Result";

export default function App() {
  return (
    <div className="container max-auto">
      <div className="w-full h-full min-w-screen">
        <Toaster />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}
