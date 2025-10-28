import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import NavBar from "../component/NavBar";
import Fotter from "../component/Fotter";

export default function Result() {
  const { image, resultImage } = useContext(AppContext);
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="mx-4 my-3 lg:mx-44 min-h-[75vh]">
        <div className="rounded-lg px-8 py-6 drop-shadow-sm">
          {/* image container */}
          <div className="flex flex-col sm:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold text-gray-600 mb-2 ">Original</p>
              <img
                src={image ? URL.createObjectURL(image) : ""}
                alt="image"
                className="rounded-md border"
              />
            </div>
            <div className="flex flex-row">
              <p className="font-semibold text-gray-600 mb-2">
                Background Removed
              </p>
              <div className="rounded-md border border-gray-300 relative  flex items-center justify-center ">
                <img src={resultImage ? resultImage : ""} alt="image" className="w-64 h-auto object-contain flex items-center  justify-center" />

                {!resultImage && image && (
                  <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
                    <div className="border-4 border-blue-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                  </div>
                )}
              </div>
            </div>
            {resultImage && (
              <div className="flex justify-center sm:justify-end items-center  felx-wrap gap-4 mt-6">
                <a
                  href={resultImage}
                  download
                  className="px-8 py-2.5 text0white text-sm bg-gradient-to-r from-rose-700 to-amber-500 rounded-full hover:scale-105 transition-all duration-700"
                >
                  Download Image
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
}
