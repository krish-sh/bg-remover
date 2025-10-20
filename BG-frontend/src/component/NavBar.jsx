import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mt-8 ml-36 w-full p-4 text-white bg-gray-200  rounded-2xl  ">
      <h2
        onClick={() => navigate("/")}
        className="font-bold text-rose-700 text-4xl lg:w-52 w-36 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-3d hover:text-rose-500"
      >
        bg-remove
      </h2>
      <div className="flex items-center">
        <button className="border-white px-3 py-1 text-xl rounded-md font-semibold bg-rose-700 text-gray-200 hover:bg-gray-200 hover:text-rose-700 transition duration-500 ease-in-out ">
          Login
        </button>
      </div>
    </div>
  );
}

export default NavBar;
