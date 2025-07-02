import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

  return (
    <div className="h-20 bg-[#f5f4f4] flex items-center px-6 justify-between ">
      <div className="flex items-center gap-4">
        <CiMenuBurger size={24} />
      </div>
       <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-2xl font-thin">Nike-Pro</h1>
      </div>
      <div className="flex justify-center items-center gap-12">
        <div className="hidden md:flex gap-6 text-lg font-thin">
          <span>About Us</span>
          <span>Blog</span>
          <span>FAQ</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-white h-10 w-10 flex justify-center items-center">
            <IoPersonSharp />
          </div>
          <div className="rounded-full bg-white h-10 w-10 flex justify-center items-center" onClick={() => navigate("/cart")}>
            
            <BsCart4 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
