'use client'
import { useState } from "react";
import { ChevronDown, ChevronUp, Search, Menu, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-blue-700 text-white flex items-center justify-between p-4 shadow-lg z-[4]">
      {/* Logo */}
      <Link href={"/products"} className="text-2xl font-bold">BangloreBuilders99</Link>

      {/* Location Dropdown */}
      <div className="relative">
        <button
          className="flex items-center gap-1 text-white hover:text-gray-300"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          Buy in Bangalore East {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 w-48 bg-white text-black shadow-md rounded-md p-2"
          >
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Link 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Link 2</a>
          </motion.div>
        )}
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white text-black rounded-md overflow-hidden">
        <select className="p-2 bg-gray-200 border-r">
          <option>Buy</option>
          <option>Rent</option>
        </select>
        <input
          type="text"
          placeholder="Enter Locality / Project / Society"
          className="p-2 w-60 outline-none"
        />
        <button className="p-2">
          <Search className="text-gray-500" />
        </button>
      </div>

      {/* Post Property */}
      <a href="/postproperty" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
        Post Property
      </a>

      {/* User Icon */}
      <div className="relative">
        <button onMouseEnter={() => setUserMenuOpen(true)} onMouseLeave={() => setUserMenuOpen(false)}>
          <User className="text-white" />
        </button>
        {isUserMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-40 bg-white text-black shadow-md rounded-md p-2"
          >
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
          </motion.div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="relative">
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="text-white" />
        </button>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ x: 200 }}
            className="fixed top-0 right-0 w-64 h-full bg-white text-black shadow-lg p-4"
          >
            <button className="absolute top-2 right-2" onClick={() => setMobileMenuOpen(false)}>
              ✖
            </button>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
