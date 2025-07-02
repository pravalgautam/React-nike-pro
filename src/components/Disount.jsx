import React from "react";

const Discount = () => {
  return (
    <div className="w-full my-10 px-4 sm:px-6 flex justify-center items-center">
      <div className="relative w-full max-w-7xl rounded-xl overflow-hidden">
        <img
          src="https://static.nike.com/a/images/f_mp4/w_1680,c_limit/aa4f472a-c9a3-4de6-8b42-245d8cc275e2/nike-just-do-it.gif"
          alt="Nike Discount"
          className="rounded-xl w-full h-auto object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Get 50% OFF
          </h1>
          <span className="text-white text-sm sm:text-base mt-2">
            For all new product purchases. Min. purchase Rs. 11,450.00
          </span>
          <button className="w-32 sm:w-40 h-12 sm:h-14 bg-white rounded-full my-4 text-sm font-semibold hover:bg-gray-100 transition">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
