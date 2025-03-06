'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, MapPin } from "lucide-react";
import UserSidebar from "@/components/userSidebar";

export default function UserProfileEdit() {
  const [formData, setFormData] = useState({
    name: "Swadesh",
    email: "swadeshchhetri87@gmail.com",
    phone: "8597079194",
    city: "",
    address: "BANGALORE",
    whatsapp: false,
    promotional: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex pt-18">
      <UserSidebar />
    <motion.div
      className="ml-72 w-[40%] mx-auto bg-white p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Name</label>
          <div className="flex items-center gap-2 border p-2 rounded-md">
            <User className="text-gray-500" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="flex-1 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Email</label>
          <div className="flex items-center gap-2 border p-2 rounded-md">
            <Mail className="text-gray-500" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="flex-1 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Phone Number</label>
          <div className="flex items-center gap-2 border p-2 rounded-md">
            <Phone className="text-gray-500" size={20} />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="flex-1 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Address</label>
          <div className="flex items-center gap-2 border p-2 rounded-md">
            <MapPin className="text-gray-500" size={20} />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="flex-1 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="whatsapp"
            checked={formData.whatsapp}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label>Allow buyers to WhatsApp me</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="promotional"
            checked={formData.promotional}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label>Subscribe for updates</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
        >
          Save Profile
        </button>
      </form>
    </motion.div>
    </div>
  );
}