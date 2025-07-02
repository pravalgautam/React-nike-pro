import React from 'react';
import { Facebook, Youtube, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-6 py-16">
      <div className=" w-full flex flex-col justify-center text-center">

        <div className="grid grid-cols-1 md:grid-cols-5  place-items-center gap-8 mb-12">

          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-black mb-4">Nike-Pro</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Seamless transactions, personalized insights, and innovative solutions for a smarter tomorrow.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <Facebook size={18} className="text-gray-600" />
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <Youtube size={18} className="text-gray-600" />
              </div>

              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <Instagram size={18} className="text-gray-600" />
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <Twitter size={18} className="text-gray-600" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">About</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Leadership</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Support Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Men</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Women</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Children</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Popular</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About Treadly</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">News & Blogs</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright © 2025 Treadly All Rights Reserved.
          </p>
          <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;