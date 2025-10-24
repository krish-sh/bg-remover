import React from "react";
import video from "../assets/video.mp4";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mb-14 mt-10 lg:px-44 sm:mt-20">
      {/* left side   */}
      <div>
        <h1 className="text-4xl xl:text-5xl font-bold  leading-tight">
          Remove
          <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-rose-700 to-amber-500 bg-clip-text text-transparent ">
            background
          </span>{" "}
          from
          <br className="max-md:hidden" /> images for free
        </h1>
        <p className="text-gray-700 my-6 text-[15px] w-[90%] ">
          Transform your photo effortlessly! From our Website Bg-remover, you
          can easily eliminate background from images, enhancing your creativity
          and making your visuals pop.
          <br className="max-sm:hidden" />
          Wheather for socials media, marketing, or personal projects, our tool
          is designed for everyone, ensuring high-quality results in just a few
          clicks.
        </p>
        <div>
          <input type="file" id="upload1" accept="image/*" hidden />
          <label
            className="inline-flex gap-3 px-8 py-3.5 md:px-6 md:py-2.5 rounded-full cursor-pointer bg-gradient-to-r from-rose-700 to-amber-500 m-auto hover:scale-105 transition-all duration-700"
            htmlFor="upload1"
          >
            <span className="text-white">Upload image</span>
          </label>
        </div>
      </div>
      {/* right side */}
      <div className="w-full max-w-lg">
        <video className="rounded-3xl bg-transparent " autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
