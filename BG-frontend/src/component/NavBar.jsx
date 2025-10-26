import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function NavBar() {
  const navigate = useNavigate();
  const { token, handleLogout } = useContext(AppContext);

  return (
    <div className="flex justify-between  items-center shadow-xl   bg-rose-700 py-4 px-6 text-white  ">
      <h2
        onClick={() => navigate("/")}
        className="font-bold text-white text-4xl  lg:w-52 w-36 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-3d "
      >
        bg-remove
      </h2>
      <div className="flex items-center">
        {token ? (
          <button
            onClick={handleLogout}
            className="border-white px-3 py-1 text-xl rounded-md font-semibold bg-rose-700 text-gray-200 hover:bg-gray-200 hover:text-white transition duration-700 ease-in-out "
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="border-white px-3 py-1 text-xl rounded-md font-semibold bg-rose-700 text-white hover:bg-white hover:text-rose-700 transition duration-700 ease-in-out "
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
