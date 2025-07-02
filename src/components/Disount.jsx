import React from "react";

const Discount = () => {
  return (
    <div className="w-full my-10 px-6 flex justify-center items-center">
      <div className="relative rounded-xl overflow-hidden">
        <img
          src="https://static.nike.com/a/images/f_mp4/w_1680,c_limit/aa4f472a-c9a3-4de6-8b42-245d8cc275e2/nike-just-do-it.gif"
          alt="Nike Discount"
          className="rounded-xl w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center  justify-center">
          <h1 className=" text-white text-4xl font-bold">Get 50% OFF</h1>
          <span className="text-white">
            for all new product purchases min. purchase $ 450.000
          </span>
          <button className="w-40 h-14 bg-white rounded-full my-4">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
