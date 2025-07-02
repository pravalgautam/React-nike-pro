import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import OurProducts from "./OurProducts";
import Disount from "./Disount";
import FeaturedCollection from "./FeaturedCollection"
import Footer from "./Footer";

const HomeScreen = () => {
  return (
    <div>
        <div className="fixed top-0 w-screen z-50">
      <Navbar />
      </div>
      <div className="bg-[#f5f4f4] h-full">
        <div className=" flex justify-center items-center w-full ">
          <div className="mt-10 px-20">
            <h1 className="text-7xl font-normal w-full ">
              Unleash Your Style Shop the Latest Trends
            </h1>
            <h5 className="text-sm font-normal w-96 mt-8">
              Discover the latest trend and energy and styple Your Style Shop
              the Latest Trends Your Style{" "}
            </h5>
          </div>
          <div className="w-full p-10 mt-20">
            <img
              src="https://images.unsplash.com/photo-1608541737042-87a12275d313?q=80&w=2361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-3xl   "
              alt="Trendy sneakers"
            />
          </div>
        </div>
             <Category/>
             <OurProducts/>
             <Disount/>
             <FeaturedCollection/>
             <Footer/>
      </div>

    </div>
  );
};

export default HomeScreen;
