import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import OurProducts from "./OurProducts";
import Disount from "./Disount";
import FeaturedCollection from "./FeaturedCollection";
import Footer from "./Footer";

const HomeScreen = () => {
    
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="bg-[#f5f4f4] pt-24">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full px-4 lg:px-20">
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight">
              Unleash Your Style,
              <br className="hidden sm:block" />
              Shop the Latest Trends
            </h1>
            <h5 className="text-sm font-normal mt-6 max-w-md text-gray-700">
              Discover the latest trends, energy, and style. Step into fashion that defines you.
            </h5>
          </div>

          <div className="w-full lg:w-1/2 p-4 sm:p-10 mt-10 lg:mt-20">
            <img
              src="https://images.unsplash.com/photo-1608541737042-87a12275d313?q=80&w=2361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-3xl w-full h-auto object-cover shadow-lg"
              alt="Trendy sneakers"
            />
          </div>
        </div>

        <Category />
        <OurProducts />
        <Disount />
        <FeaturedCollection />
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
