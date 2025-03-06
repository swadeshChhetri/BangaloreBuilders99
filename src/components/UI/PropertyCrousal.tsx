"use client";

import { useState } from "react";
import Image from "next/image";
import {Heart } from "lucide-react";
import Carousel from "./Crousel";

interface Property {
  id: number;
  title: string;
  image: string;
  location: string;
  price?: string;
  posted?: string;
}

interface PropertyCarouselProps {
  title: string;
  description: string;
  items: Property[];
}

export const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ title, description, items }) => {
  const [liked, setLiked] = useState<Record<number, boolean>>({});


  const toggleLike = (id: number) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full p-6 pt-20 relative">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500 mb-4">{description}</p>

      <div className="relative w-full overflow-hidden">
        <Carousel itemWidth={300} totalItems={items.length}>
          {items.map((item) => (
            <div key={item.id} className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden relative transition-transform hover:scale-105">
              {/* Like Button */}
              <button
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
                onClick={() => toggleLike(item.id)}
              >
                <Heart className={`w-6 h-6 ${liked[item.id] ? "text-red-500 fill-red-500" : "text-gray-400"}`} />
              </button>

              {/* Property Image */}
              <Image src={item.image} alt={item.title} className="w-full h-40 object-cover" width={200} height={200} />
              <div className="p-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.location}</p>
                {item.price && <span className="bg-gray-200 text-black px-2 py-1 text-sm rounded absolute top-2 left-2">{item.price}</span>}
                {item.posted && <p className="text-xs text-gray-400">{item.posted}</p>}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};


