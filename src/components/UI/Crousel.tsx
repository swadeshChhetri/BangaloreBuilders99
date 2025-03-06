"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
  itemWidth: number; // Each item's width (including gap)
  totalItems: number; // Number of items
}

const Carousel: React.FC<CarouselProps> = ({ children, itemWidth, totalItems }) => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handlePrev = () => setScrollIndex((prev) => Math.max(prev - itemWidth, 0));
  const handleNext = () => setScrollIndex((prev) => Math.min(prev + itemWidth, (totalItems - 1) * itemWidth));

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: -scrollIndex }}
        transition={{ type: "tween", duration: 0.5 }}
        style={{ width: `${totalItems * itemWidth}px` }}
      >
        {children}
      </motion.div>
      {/* Navigation Buttons */}
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full" onClick={handlePrev}>
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full" onClick={handleNext}>
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;
