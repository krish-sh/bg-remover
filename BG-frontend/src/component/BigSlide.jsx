import React, { useState } from "react";
import camera from "../assets/bird.jpg";
import cameraRemover from "../assets/birdRemover.png";

function BigSlide() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handlePosition = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="pb-10 md:py-20 mx-2">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:3xl pb-1 lg:text-4xl font-semibold bg-gradient-to-r from-gray-600 to-rose-800 bg-clip-text text-transparent ">
        Remove Background with high <br /> Quality and accuracy
      </h1>
      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        {/* background Image */}
        <img
          src={camera}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0 )` }}
          alt="Image"
          className="absolute top-0 left-0 w-full h-full select-none"
        />
        {/* Foreground Image */}
        <img
          src={cameraRemover}
          alt=""
          className="select-none w-full"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />
        {/* slider */}
        <input
          onChange={handlePosition}
          type="range"
          min={0}
          max={100}
          value={setSliderPosition}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
        />
      </div>
    </div>
  );
}

export default BigSlide;
