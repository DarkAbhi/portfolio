"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

const WhatIUseCard: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((y - centerY) / centerY) * -20);
    rotateY.set(((x - centerX) / centerX) * 20);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className="relative col-span-2 md:col-span-2 row-span-1 bg-[#151515] rounded-2xl p-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        rotateX: isMobile ? 0 : smoothRotateX,
        rotateY: isMobile ? 0 : smoothRotateY,
      }}
      whileHover={
        isMobile
          ? {}
          : {
              scale: 1.02,
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }
      }
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      <h3 className="text-white font-semibold mb-4 text-lg flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 6.75L7.25 10h9.5l-2.5 3.25"
              />
            </svg>
          </span>
          WHAT I USE
          <Link href="/uses-this" className="ml-4 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#1f1f1f] via-[#1A1A1B] to-[#353437]">
            View All
          </Link>
        </div>
      </h3>
      <div className="flex gap-8">
        <div>
          <h4 className="text-gray-500 font-bold mb-2">Hardware</h4>
          <div className="text-gray-400 text-sm">MacBook Air M2</div>
          <div className="text-gray-400 text-sm">iPhone 14 Pro Max</div>
          <div className="text-gray-400 text-sm">Samsung S21 5G</div>
        </div>
        <div>
          <h4 className="text-gray-500 font-bold mb-2">Software</h4>
          <div className="text-gray-400 text-sm">Android Studio</div>
          <div className="text-gray-400 text-sm">VSCode</div>
          <div className="text-gray-400 text-sm">Arc Browser</div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatIUseCard;
