"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SkewCard: React.FC = () => {
  // Motion values to track the rotation dynamically
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Use spring to add a smooth interpolation effect to the motion values
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((y - centerY) / centerY) * -10);
    rotateY.set(((x - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className="w-80 h-48 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl shadow-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
      }}
      whileHover={{
        scale: 1.02, // Scale up slightly on hover
        transition: { type: "spring", stiffness: 200, damping: 10 },
      }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      <div className="w-full h-full p-6 text-white flex flex-col items-center justify-center">
        <h2 className="text-lg font-bold">3D Skew Card</h2>
        <p className="text-sm mt-2">Hover over me to see the effect!</p>
      </div>
    </motion.div>
  );
};

export default SkewCard;