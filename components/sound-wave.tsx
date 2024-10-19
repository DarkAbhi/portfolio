import { motion } from "framer-motion";
import React from "react";

const SoundWave = () => {
  const bars = [
    { delay: 0, duration: 1 },
    { delay: 0.2, duration: 0.9 },
    { delay: 0.4, duration: 1.1 },
    { delay: 0.6, duration: 1 },
    { delay: 0.8, duration: 0.9 },
  ];

  return (
    <div className="flex items-center justify-center space-x-1 h-16">
      {bars.map((bar, index) => (
        <motion.div
          key={index}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            duration: bar.duration,
            delay: bar.delay,
          }}
          className="w-2 h-full bg-black rounded-md"
        />
      ))}
    </div>
  );
};

export default SoundWave;
