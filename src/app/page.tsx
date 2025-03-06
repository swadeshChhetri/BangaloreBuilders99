'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
// import { MessageCircle, X, Send } from 'lucide-react';
import MobileNavbar from '@/components/mobileNavbar';

const properties = [
  {
    id: 1,
    image: "/images/house1.jpg",
    price: "₹ 60 L",
    title: "2 BHK Independent House",
    location: "In Nisarga Layout, Hoskote",
    posted: "Posted by Owner - 3 months ago",
  },
  {
    id: 2,
    image: "/images/house2.jpg",
    price: "₹ 1.49 Cr",
    title: "2 BHK Apartment, 3 Baths",
    location: "In Prestige Lakeside Habitat, Gunjur",
    posted: "Posted by Owner - 2 weeks ago",
  },
  {
    id: 3,
    image: "/images/house3.jpg",
    price: "₹ 14.4 L",
    title: "Land",
    location: "In Seegahalli, Bangalore",
    posted: "Posted by Owner - 2 months ago",
  },
  {
    id: 4,
    image: "/images/house4.jpg",
    price: "₹ 1.8 Cr",
    title: "Land",
    location: "In Munnekollal, Old Airport Road",
    posted: "Posted by Owner",
  },
  {
    id: 5,
    image: "/images/house5.jpg",
    price: "₹ 60 L",
    title: "2 BHK Independent House",
    location: "In Nisarga Layout, Hoskote",
    posted: "Posted by Owner - 3 months ago",
  },
  {
    id: 6,
    image: "/images/house6.jpg",
    price: "₹ 1.49 Cr",
    title: "2 BHK Apartment, 3 Baths",
    location: "In Prestige Lakeside Habitat, Gunjur",
    posted: "Posted by Owner - 2 weeks ago",
  },
];

const localities = [
  {
    id: 1,
    image: "/images/locality1.jpg",
    name: "Kadugodi",
    rating: 4.3,
    price: "₹6,750/ sq.ft",
    change: "▼ 3.6% YoY",
    changeColor: "text-red-500",
  },
  {
    id: 2,
    image: "/images/locality2.jpg",
    name: "Budigere Cross",
    rating: 3.9,
    price: "₹10,450/ sq.ft",
    change: "▲ 20.8% YoY",
    changeColor: "text-green-500",
  },
  {
    id: 3,
    image: "/images/locality3.jpg",
    name: "Pattandur Agrahara",
    rating: 3.8,
    price: "₹11,450/ sq.ft",
    change: "▲ 55.8% YoY",
    changeColor: "text-green-500",
  },
  {
    id: 4,
    image: "/images/locality4.jpg",
    name: "HBR Layout",
    rating: 4.2,
    price: "₹7,200/ sq.ft",
    change: "▲ 12.5% YoY",
    changeColor: "text-green-500",
  },
  {
    id: 5,
    image: "/images/locality5.jpg",
    name: "Marathahalli",
    rating: 4.4,
    price: "₹8,000/ sq.ft",
    change: "▼ 18.8% YoY",
    changeColor: "text-red-500",
  },
];



export default function Home() {
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollAmount = 300;

  const toggleLike = (id: number) => {
    setLiked((prev) => ({ ...prev, [id]: !(prev[id] || false) }));
  };

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - scrollAmount, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + scrollAmount, properties.length * 250));
  };


  return (
    <>
      <div className="w-full p-6 pt-20">
        <h2 className="text-2xl font-bold">Recommended Properties</h2>
        <p className="text-gray-500 mb-4">Curated especially for you</p>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            style={{ width: `${properties.length * 260}px` }}
            animate={{ x: -scrollPosition }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {properties.map((property) => (
              <div
                key={property.id}
                className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden relative transition-transform transform hover:scale-105"
              >
                <Image src={property.image} alt={property.title} className="w-full h-40 object-cover" width={200} height={200} />
                <button onClick={() => toggleLike(property.id)} className="absolute top-2 right-2 bg-white p-1 rounded-full">
                  <Heart className={`h-6 w-6 ${liked[property.id] ? "text-pink-500 fill-pink-500" : "text-gray-400"}`} />
                </button>
                <div className="p-3">
                  <span className="bg-gray-200 text-black px-2 py-1 text-sm rounded absolute top-2 left-2">
                    {property.price}
                  </span>
                  <h3 className="text-lg font-semibold mt-3">{property.title}</h3>
                  <p className="text-gray-600 text-sm">{property.location}</p>
                  <p className="text-gray-400 text-xs mt-1">{property.posted}</p>
                </div>
              </div>

            ))}
          </motion.div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            onClick={scrollLeft}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            onClick={scrollRight}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="w-full p-6 pt-20">
        <h2 className="text-2xl font-bold">Recommended Projects</h2>
        <p className="text-gray-500 mb-4">Curated especially for you</p>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            style={{ width: `${properties.length * 260}px` }}
            animate={{ x: -scrollPosition }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {properties.map((property) => (
              <div
                key={property.id}
                className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden relative transition-transform transform hover:scale-105"
              >
                <Image src={property.image} alt={property.title} className="w-full h-40 object-cover" width={200} height={200} />
                <button onClick={() => toggleLike(property.id)} className="absolute top-2 right-2 bg-white p-1 rounded-full">
                  <Heart className={`h-6 w-6 ${liked[property.id] ? "text-pink-500 fill-pink-500" : "text-gray-400"}`} />
                </button>
                <div className="p-3">
                  <span className="bg-gray-200 text-black px-2 py-1 text-sm rounded absolute top-2 left-2">
                    {property.price}
                  </span>
                  <h3 className="text-lg font-semibold mt-3">{property.title}</h3>
                  <p className="text-gray-600 text-sm">{property.location}</p>
                  <p className="text-gray-400 text-xs mt-1">{property.posted}</p>
                </div>
              </div>

            ))}
          </motion.div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            onClick={scrollLeft}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            onClick={scrollRight}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="w-full p-6">
        <h2 className="text-2xl font-bold">Localities you may like</h2>
        <p className="text-gray-500 mb-4">Based on the localities you have explored in Bangalore East</p>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 overflow-hidden"
            animate={{ x: -scrollPosition }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {localities.map((locality) => (
              <div key={locality.id} className="w-[250px] bg-white shadow-md rounded-lg p-4 text-center">
                <img src={locality.image} alt={locality.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
                <h3 className="text-lg font-semibold">{locality.name}</h3>
                <span className="bg-green-100 text-green-700 px-2 py-1 text-sm rounded">{locality.rating} ★</span>
                <p className="text-gray-600 text-sm mt-1">{locality.price}</p>
                <p className={`text-sm font-semibold ${locality.changeColor}`}>{locality.change}</p>
                <div className="mt-2 flex justify-center gap-4 text-blue-500">
                  <a href="#" className="hover:underline">Insights</a>
                  <span>|</span>
                  <a href="#" className="hover:underline">Properties</a>
                </div>
              </div>
            ))}
          </motion.div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            onClick={scrollLeft}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            onClick={scrollRight}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="w-full p-6">
        <h2 className="text-2xl font-bold">Apartments, Villas and More</h2>
        <p className="text-gray-500 mb-4">in Bangalore East</p>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
            onClick={scrollLeft}
          >
            <ChevronLeft />
          </button>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {properties.map((property) => (
              <motion.div
                key={property.id}
                className="min-w-[300px] p-4 rounded-lg shadow-md bg-white border"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="flex justify-between items-center mt-2">
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <Heart className="text-gray-500 hover:text-red-500 cursor-pointer" />
                </div>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-lg font-bold text-blue-600">{property.price}</p>
                <p className="text-sm text-gray-400">{property.posted}</p>
              </motion.div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
            onClick={scrollRight}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="w-full p-6 pt-20">
        <h2 className="text-2xl font-bold">Properties in High Demand</h2>
        <p className="text-gray-500 mb-4">Curated especially for you</p>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            style={{ width: `${properties.length * 260}px` }}
            animate={{ x: -scrollPosition }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {properties.map((property) => (
              <div
                key={property.id}
                className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden relative transition-transform transform hover:scale-105"
              >
                <Image src={property.image} alt={property.title} className="w-full h-40 object-cover" width={200} height={200} />
                <button onClick={() => toggleLike(property.id)} className="absolute top-2 right-2 bg-white p-1 rounded-full">
                  <Heart className={`h-6 w-6 ${liked[property.id] ? "text-pink-500 fill-pink-500" : "text-gray-400"}`} />
                </button>
                <div className="p-3">
                  <span className="bg-gray-200 text-black px-2 py-1 text-sm rounded absolute top-2 left-2">
                    {property.price}
                  </span>
                  <h3 className="text-lg font-semibold mt-3">{property.title}</h3>
                  <p className="text-gray-600 text-sm">{property.location}</p>
                  <p className="text-gray-400 text-xs mt-1">{property.posted}</p>
                </div>
              </div>

            ))}
          </motion.div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            onClick={scrollLeft}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            onClick={scrollRight}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
     <MobileNavbar/>
    </>

  );
}
