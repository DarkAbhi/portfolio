"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MapCard() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check if the screen width is less than 768px (mobile breakpoint)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener to handle screen resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Motion values for rotation
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Smooth motion values for rotation with spring effect
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  // Handle mouse movement to calculate rotation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMobile) return; // No animation for mobile devices

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Increase the multiplier for more tilt
    rotateX.set(((y - centerY) / centerY) * -20); // Increased multiplier for more pronounced tilt
    rotateY.set(((x - centerX) / centerX) * 20); // Increased multiplier for more pronounced tilt
  };

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    if (isMobile) return; // No animation for mobile devices

    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className="col-span-2 md:col-span-2 row-span-2 bg-[#151515] rounded-2xl flex items-center justify-center relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        rotateX: isMobile ? 0 : smoothRotateX,
        rotateY: isMobile ? 0 : smoothRotateY,
        height: isMobile ? "300px" : "100%", // Specify a fixed height for mobile
      }}
      whileHover={
        isMobile
          ? {} // No hover animation on mobile
          : {
              scale: 1.02, // Scale up slightly on hover
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }
      }
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      <Image
        src="/map_bengaluru.jpg"
        alt="Map"
        fill
        className="rounded-2xl object-cover"
      />
      {/* Circular dot with a lighter blue color, ping animation, and a white border */}
      <div className="absolute">
        <div className="w-8 h-8 rounded-full bg-blue-300 animate-ping opacity-75"></div>
        <div className="absolute inset-0 w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
      </div>
      {/* Chip with Bengaluru, India text and marker icon */}
      <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#F2F3F3] text-black rounded-full text-sm font-semibold flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6z"
          />
          <circle cx="12" cy="8" r="2" />
        </svg>
        Bengaluru, India
      </div>
    </motion.div>
  );
}
