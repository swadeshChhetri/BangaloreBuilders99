import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

interface Property {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  posted: string;
  isLiked: boolean;
  toggleLike: (id: number) => void;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden relative transition-transform transform hover:scale-105">
      <Image src={property.image} alt={property.title} className="w-full h-40 object-cover" width={200} height={200} />
      
      {/* Like Button */}
      <button onClick={() => property.toggleLike(property.id)} className="absolute top-2 right-2 bg-white p-1 rounded-full">
        <Heart className={`h-6 w-6 ${property.isLiked ? "text-pink-500 fill-pink-500" : "text-gray-400"}`} />
      </button>

      <div className="p-3">
        <span className="bg-gray-200 text-black px-2 py-1 text-sm rounded absolute top-2 left-2">
          {property.price}
        </span>
        <h3 className="text-lg font-semibold mt-3">{property.title}</h3>
        <p className="text-gray-600 text-sm">{property.location}</p>
        <p className="text-gray-400 text-xs mt-1">{property.posted}</p>
      </div>

      <Link href="/products">
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition w-full">
          View All
        </button>
      </Link>
    </div>
  );
};

export default PropertyCard;
