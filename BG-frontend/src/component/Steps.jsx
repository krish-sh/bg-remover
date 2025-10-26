import React from "react";
import upload from "../assets/arrow-up.png";
import download from "../assets/download.png";
import erase from "../assets/erase.png";

export default function Steps() {
  return (
    <div className="mx-4 lg:mx-44 py-20">
      <h1 className="text-center text-2xl md:text-3xl pb-1 lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-600 to-rose-800 bg-clip-text text-transparent">
        Steps to remove background <br /> images in seconds
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 md:space-x-5 xl:mt-24 justify-center">
        <div className="flex items-start gap-4 pb-10 rounded-lg hover:scale-105 transition-all duration-500">
          <img src={upload} alt="upload icon" className="max-w-9" />
          <div>
            <p className="text-xl font-medium ">Upload Image</p>
            <p className="text-sm mt-1 ">
              Select the image you want edit. Our tool supports various formats,
              including JPG, PNG, and more, ensuring a seamless experience.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 pb-10 rounded-lg hover:scale-105 transition-all duration-500">
          <img src={erase} alt="Remove image icon" className="max-w-9" />
          <div>
            <p className="text-xl font-medium ">Remove Image</p>
            <p className="text-sm mt-1 ">
              With a single click, our intelligent algorithm will remove the
              background, leaving you with clean and professional image ready
              for use
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 pb-10 rounded-lg hover:scale-105 transition-all duration-500">
          <img src={download} alt="download icon" className="max-w-9" />
          <div>
            <p className="text-xl font-medium ">Download Image</p>
            <p className="text-sm mt-1 ">
              Once you're satisfied with the result, simply download your image
              in high resolution, it's ready to be used for any purpose-be it
              presentation, design, or social media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
