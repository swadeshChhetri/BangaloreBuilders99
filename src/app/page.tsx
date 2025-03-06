'use client';
import { motion } from 'framer-motion';
// import { MessageCircle, X, Send } from 'lucide-react';
import MobileNavbar from '@/components/mobileNavbar';
import { PropertyCarousel } from '@/components/UI/PropertyCrousal';
import Carousel from '@/components/UI/Crousel';

const recommendedProperties = [
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

const totalItems = localities.length;



export default function Home() {


  return (
    <>
      <PropertyCarousel title="Recommended Properties" description="Best choices for you" items={recommendedProperties} />

      <PropertyCarousel title="Recommended Projects" description="Best choices for you" items={recommendedProperties} />

      <div className="w-full p-6">
        <h2 className="text-2xl font-bold">Localities you may like</h2>
        <p className="text-gray-500 mb-4">Based on the localities you have explored in Bangalore East</p>
        <div className="relative overflow-hidden">
          <Carousel itemWidth={300} totalItems={totalItems}>
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
          </Carousel>
        </div>
      </div>

      <div className="w-full p-6">
        <h2 className="text-2xl font-bold">Apartments, Villas and More</h2>
        <p className="text-gray-500 mb-4">in Bangalore East</p>
        <Carousel itemWidth={300} totalItems={totalItems}>
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
              </div>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-lg font-bold text-blue-600">{property.price}</p>
              <p className="text-sm text-gray-400">{property.posted}</p>
            </motion.div>
          ))}
        </Carousel>
      </div>

      <PropertyCarousel title="Properties in High Demand" description="Best choices for you" items={recommendedProperties} />
      <MobileNavbar />
    </>

  );
}
