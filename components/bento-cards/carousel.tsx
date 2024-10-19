"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = ["/blue.jpg", "/ocean.jpg", "/orange.jpg"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="col-span-2 md:col-span-2 md:row-span-2 relative w-full h-full overflow-hidden rounded-2xl"
      whileHover={{ rotate: 3, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={700}
              height={400}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;
