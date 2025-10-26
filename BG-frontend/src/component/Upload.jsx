import React from 'react'

export default function Upload() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl mt-4 mb-4 font-semibold bg-gradient-to-r from-rose-700 to-gray-700 bg-clip-text text-transparent">
        Remove Background from your Images. Try it!
      </h1>
      <div className="text-center mb-24">
        <input type="file" id="upload2" accept="image/*" hidden />
        <label
          className="inline-flex gap-3 px-8 py-3.5 md:px-6 md:py-2.5 rounded-full cursor-pointer bg-gradient-to-r from-rose-700 to bg-amber-600 m-auto hover:scale-105 transition-all duration-700 text-white"
          htmlFor="upload2"
        >
          Upload Image
        </label>
      </div>
    </div>
  );
}
