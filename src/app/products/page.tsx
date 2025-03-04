'use client'
import { useState, useEffect } from "react";
import { Heart, PhoneCall, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/1.jpg",
  "/images/4.jpg",
  "/images/3.jpg",
];

export default function ProductCard() {
  const [currentImage, setCurrentImage] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showMoreProperty, setShowMoreProperty] = useState(false);
  const [showMoreBedrooms, setShowMoreBedrooms] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex pt-20">
      {/* Sidebar */}
      <div className="fixed left-0 h-full w-1/4 p-4 bg-white shadow-lg rounded-xl border h-fit">
        {/* Property Type Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Type of property</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Residential Apartment",
              "Independent House/Villa",
              "Residential Land",
              "Independent/Builder Floor",
              "Farm House",
            ].map((item, index) => (
              <button
                key={index}
                className="border px-3 py-1 rounded-full text-sm bg-gray-100"
              >
                + {item}
              </button>
            ))}
            {showMoreProperty && (
              <button className="border px-3 py-1 rounded-full text-sm bg-gray-100">
                + Other
              </button>
            )}
          </div>
          <button
            className="text-blue-600 text-sm mt-2"
            onClick={() => setShowMoreProperty(!showMoreProperty)}
          >
            {showMoreProperty ? "- Show less" : "+ 1 more"}
          </button>
        </div>

        {/* No. of Bedrooms Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">No. of Bedrooms</h2>
          <div className="flex flex-wrap gap-2">
            {["1 RK/1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"].map(
              (item, index) => (
                <button
                  key={index}
                  className="border px-3 py-1 rounded-full text-sm bg-gray-100"
                >
                  + {item}
                </button>
              )
            )}
            {showMoreBedrooms && (
              <button className="border px-3 py-1 rounded-full text-sm bg-gray-100">
                + Other
              </button>
            )}
          </div>
          <button
            className="text-blue-600 text-sm mt-2"
            onClick={() => setShowMoreBedrooms(!showMoreBedrooms)}
          >
            {showMoreBedrooms ? "- Show less" : "+ 5 more"}
          </button>
        </div>
      </div>

      {/*Main-content */}
      <div className="ml-96">
        <div className="mt-2 max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border bg-white flex">
          {/* Image Section */}
          <div className="relative w-2/5">
            <Image
              src={images[currentImage]}
              alt="Property"
              width={300}   // ✅ Define width & height for optimization
              height={200}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform scale-100"
            />
            <button
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
              onClick={() => setLiked(!liked)}
            >
              <Heart className={liked ? "text-red-500 fill-red-500" : "text-gray-500"} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
              onClick={prevSlide}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
              onClick={nextSlide}
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-blue-600 scale-125' : 'bg-gray-400'}`}
                ></span>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="w-3/5 p-4">
            {/* Content 1: Title & Address */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">Stellar Kings Court</h2>
                <Link href={"/productDetails"} className="text-sm text-gray-500">4 BHK Flat in Block F Sector 50, Noida</Link>
              </div>
              <span className="bg-gray-200 text-xs px-2 py-1 rounded">Resale</span>
            </div>

            {/* Content 2: Price, Area, Property Details */}
            <div className="flex justify-between mt-3 text-sm font-medium">
              <div>
                <p className="text-lg font-bold">₹2.49 Cr</p>
                <p className="text-gray-500">₹13,910 /sqft</p>
              </div>
              <div>
                <p className="text-lg font-bold">2,003 sqft</p>
                <p className="text-gray-500">Super Built-up Area</p>
              </div>
              <div>
                <p className="text-lg font-bold">4 BHK</p>
                <p className="text-gray-500">4 Baths | Ready to Move</p>
              </div>
            </div>

            {/* Content 3: Highlights */}
            <div className="mt-3">
              <span className="font-semibold">Highlights:</span>
              <div className="flex gap-2 mt-1">
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">North-East Facing</span>
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">Private Garden</span>
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">+2</span>
              </div>
            </div>

            {/* Content 4: Short Note */}
            <p className="mt-2 text-sm text-gray-600">
              Stellar Kings Court is one of the most popular destination for...
            </p>

            {/* Content 5: Dealer Info & Action Buttons */}
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm text-gray-500">Dealer · 1w ago</p>
                <p className="font-semibold">Rana Property</p>
              </div>
              <div className="flex gap-2">
                <button className="border px-4 py-2 rounded text-gray-700">View Number</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1">
                  <PhoneCall size={16} /> Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border bg-white flex">
          {/* Image Section */}
          <div className="relative w-2/5">
            <Image
              src={images[currentImage]}
              alt="Property"
              width={300}   // ✅ Define width & height for optimization
              height={200}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform scale-100"
            />
            <button
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
              onClick={() => setLiked(!liked)}
            >
              <Heart className={liked ? "text-red-500 fill-red-500" : "text-gray-500"} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
              onClick={prevSlide}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
              onClick={nextSlide}
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-blue-600 scale-125' : 'bg-gray-400'}`}
                ></span>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="w-3/5 p-4">
            {/* Content 1: Title & Address */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">Stellar Kings Court</h2>
                <p className="text-sm text-gray-500">4 BHK Flat in Block F Sector 50, Noida</p>
              </div>
              <span className="bg-gray-200 text-xs px-2 py-1 rounded">Resale</span>
            </div>

            {/* Content 2: Price, Area, Property Details */}
            <div className="flex justify-between mt-3 text-sm font-medium">
              <div>
                <p className="text-lg font-bold">₹2.49 Cr</p>
                <p className="text-gray-500">₹13,910 /sqft</p>
              </div>
              <div>
                <p className="text-lg font-bold">2,003 sqft</p>
                <p className="text-gray-500">Super Built-up Area</p>
              </div>
              <div>
                <p className="text-lg font-bold">4 BHK</p>
                <p className="text-gray-500">4 Baths | Ready to Move</p>
              </div>
            </div>

            {/* Content 3: Highlights */}
            <div className="mt-3">
              <span className="font-semibold">Highlights:</span>
              <div className="flex gap-2 mt-1">
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">North-East Facing</span>
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">Private Garden</span>
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">+2</span>
              </div>
            </div>

            {/* Content 4: Short Note */}
            <p className="mt-2 text-sm text-gray-600">
              Stellar Kings Court is one of the most popular destination for...
            </p>

            {/* Content 5: Dealer Info & Action Buttons */}
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm text-gray-500">Dealer · 1w ago</p>
                <p className="font-semibold">Rana Property</p>
              </div>
              <div className="flex gap-2">
                <button className="border px-4 py-2 rounded text-gray-700">View Number</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1">
                  <PhoneCall size={16} /> Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border bg-white flex">
          {/* Image Section */}
          <div className="relative w-2/5">
            <Image
              src={images[currentImage]}
              alt="Property"
              width={300}   // ✅ Define width & height for optimization
              height={200}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform scale-100"
            />
            <button
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
              onClick={() => setLiked(!liked)}
            >
              <Heart className={liked ? "text-red-500 fill-red-500" : "text-gray-500"} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
              onClick={prevSlide}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
              onClick={nextSlide}
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-blue-600 scale-125' : 'bg-gray-400'}`}
                ></span>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="w-3/5 p-4">
            {/* Content 1: Title & Address */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">Stellar Kings Court</h2>
                <p className="text-sm text-gray-500">4 BHK Flat in Block F Sector 50, Noida</p>
              </div>
              <span className="bg-gray-200 text-xs px-2 py-1 rounded">Resale</span>
            </div>

            {/* Content 2: Price, Area, Property Details */}
            <div className="flex justify-between mt-3 text-sm font-medium">
              <div>
                <p className="text-lg font-bold">₹2.49 Cr</p>
                <p className="text-gray-500">₹13,910 /sqft</p>
              </div>
              <div>
                <p className="text-lg font-bold">2,003 sqft</p>
                <p className="text-gray-500">Super Built-up Area</p>
              </div>
              <div>
                <p className="text-lg font-bold">4 BHK</p>
                <p className="text-gray-500">4 Baths | Ready to Move</p>
              </div>
            </div>

            {/* Content 3: Highlights */}
            <div className="mt-3">
              <span className="font-semibold">Highlights:</span>
              <div className="flex gap-2 mt-1">
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">North-East Facing</span>
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">Private Garden</span>
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">+2</span>
              </div>
            </div>

            {/* Content 4: Short Note */}
            <p className="mt-2 text-sm text-gray-600">
              Stellar Kings Court is one of the most popular destination for...
            </p>

            {/* Content 5: Dealer Info & Action Buttons */}
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm text-gray-500">Dealer · 1w ago</p>
                <p className="font-semibold">Rana Property</p>
              </div>
              <div className="flex gap-2">
                <button className="border px-4 py-2 rounded text-gray-700">View Number</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1">
                  <PhoneCall size={16} /> Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
