'use client';

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h3 className="text-white font-semibold text-lg border-b-2 border-pink-500 pb-1">Company</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Services</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
          </ul>
        </div>

        {/* Get Help Section */}
        <div>
          <h3 className="text-white font-semibold text-lg border-b-2 border-pink-500 pb-1">Get Help</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Order Status</a></li>
            <li><a href="#" className="hover:text-white">Payment Options</a></li>
          </ul>
        </div>

        {/* Online Shop Section */}
        <div>
          <h3 className="text-white font-semibold text-lg border-b-2 border-pink-500 pb-1">Online Shop</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Watch</a></li>
            <li><a href="#" className="hover:text-white">Bag</a></li>
            <li><a href="#" className="hover:text-white">Shoes</a></li>
            <li><a href="#" className="hover:text-white">Dress</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-white font-semibold text-lg border-b-2 border-pink-500 pb-1">Follow Us</h3>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500">
              <Facebook className="text-white text-lg" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500">
              <Twitter className="text-white text-lg" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500">
              <Instagram className="text-white text-lg" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500">
              <Linkedin className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
