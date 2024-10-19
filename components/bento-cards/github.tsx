"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const GithubCard = () => {
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
  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
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
    <motion.a
      href="https://github.com/DarkAbhi"
      target="_blank"
      rel="noopener noreferrer"
      className="block col-span-1 md:col-span-1 row-span-1 bg-[#151515] relative w-full h-full overflow-hidden rounded-2xl py-4 md:py-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        rotateX: isMobile ? 0 : smoothRotateX,
        rotateY: isMobile ? 0 : smoothRotateY,
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
      {/* Go to Arrow Icon in the top right corner */}
      <div className="absolute top-2 right-2">
        <Icon icon="mdi:arrow-top-right" width="24" height="24" color="white" />
      </div>

      {/* Image container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Image src="/github.png" alt="X icon" width={100} height={100} />
      </div>
    </motion.a>
  );
};

export default GithubCard;
