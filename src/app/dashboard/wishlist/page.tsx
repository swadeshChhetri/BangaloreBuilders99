import { Heart } from "lucide-react";
import UserSidebar from "@/components/userSidebar";

type Property = {
  price: string;
  title: string;
  location: string;
  postedBy: string;
  image: string;
  verified?: boolean;
};

type Project = {
  title: string;
  description: string;
  price: string;
  image: string;
  rera?: boolean;
};

const shortlistedProperties: Property[] = [
  {
    price: "₹ 1.2 Cr",
    title: "2 BHK Apartment, 2 Baths",
    location: "In Mahaveer Tranquil, Nallurhalli, Whitefield",
    postedBy: "Posted by Owner",
    image: "/property1.jpg",
  },
  {
    price: "₹ 80 L",
    title: "2 BHK Apartment, 2 Baths",
    location: "In Adithya Serene, Nallurhalli, Whitefield",
    postedBy: "Posted by Owner",
    image: "/property2.jpg",
    verified: true,
  },
  {
    price: "₹ 1.3 Cr",
    title: "2 BHK Apartment, 2 Baths",
    location: "In Amrutha Heights Phase 2, Nallurhalli",
    postedBy: "Posted by Owner",
    image: "/property3.jpg",
  },
];

const shortlistedProjects: Project[] = [
  {
    title: "Sowparnika Ashiyana",
    description: "1, 2, 3 BHK Apartment, 1 RK Studio Apartment",
    price: "₹50.4 - 80.96 L",
    image: "/project1.jpg",
    rera: true,
  },
  {
    title: "Jupiter Homes",
    description: "2 BHK Apartment in Samethanahalli, Bangalore",
    price: "₹61.55 - 76.64 L",
    image: "/project2.jpg",
    rera: true,
  },
  {
    title: "Falcon by BHP Housing",
    description: "2, 3 BHK Apartment in Sarjapur Road, Bangalore",
    price: "₹68.63 - 79.13 L",
    image: "/project3.jpg",
    rera: true,
  },
];

export default function ShortlistedSection() {
  return (
    <div className="flex pt-18">
    <UserSidebar/>
    <div className="ml-72 max-w-6xl mx-auto p-6">
      <Section title="Shortlisted Properties" items={shortlistedProperties} />
      <Section title="Shortlisted Projects" items={shortlistedProjects} isProject />
    </div>
    </div>
  );
}

type SectionProps = {
  title: string;
  items: Property[] | Project[];
  isProject?: boolean;
};

function Section({ title, items, isProject = false }: SectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">Contact now to close the deal</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Card key={index} item={item} isProject={isProject} />
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  item: Property | Project;
  isProject?: boolean;
};

function Card({ item, isProject }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
      <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
      {"verified" in item && item.verified && (
        <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
          Verified
        </span>
      )}
      {"rera" in item && item.rera && (
        <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs rounded">
          Rera
        </span>
      )}
      <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
        <Heart className="text-red-500" size={18} />
      </button>
      <div className="p-4">
        <p className="font-bold text-lg">{isProject ? item.title : item.price}</p>
        <p className="text-gray-700">{isProject ? (item as Project).description : item.title}</p>
        <p className="text-sm text-gray-500">{isProject ? (item as Project).price : (item as Property).location}</p>
        {!isProject && <p className="text-sm text-gray-500">{(item as Property).postedBy}</p>}
      </div>
    </div>
  );
}
