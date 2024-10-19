"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface DiscordStatusCardProps {
  status: string;
}

export default function DiscordStatusCard({ status }: DiscordStatusCardProps) {
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

    rotateX.set(((y - centerY) / centerY) * -10);
    rotateY.set(((x - centerX) / centerX) * 10);
  };

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    if (isMobile) return; // No animation for mobile devices

    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className="col-span-1 md:col-span-1 row-span-1 bg-[#151515] rounded-2xl p-6 flex flex-col items-start justify-center gap-4"
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
      <div className="flex items-center gap-2">
        <Image width={24} height={24} src="/status.png" alt="Status Icon" />
        <p className="text-sm text-white font-semibold">STATUS</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className="relative h-fill w-4">
          <div
            className={`w-3 h-3 rounded-full ${
              status === "online"
                ? "bg-green-500"
                : status === "dnd"
                ? "bg-red-400"
                : status === "idle"
                ? "bg-yellow-400"
                : "bg-gray-300"
            }`}
          ></div>
          {(status === "online" ||
            status === "dnd" ||
            status === "offline" ||
            status === "idle") && (
            <div
              className={`w-3 h-3 rounded-full inset-0 ${
                status === "online"
                  ? "bg-green-500"
                  : status === "dnd"
                  ? "bg-red-400"
                  : status === "idle"
                  ? "bg-yellow-400"
                  : "bg-gray-300"
              } absolute animate-ping`}
            ></div>
          )}
        </div>
        <p
          className={`text-2xl font-bold ${
            status === "online"
              ? "text-green-500"
              : status === "dnd"
              ? "text-red-400"
              : status === "idle"
              ? "text-yellow-400"
              : "text-gray-400"
          }`}
        >
          {status.toUpperCase()}
        </p>
      </div>
    </motion.div>
  );
}
