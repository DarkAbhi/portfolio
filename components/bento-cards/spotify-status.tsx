"use client";

import { Spotify } from "models/lanyard-response";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import SoundWave from "../sound-wave";

const defaultSpotify: Spotify = {
  track_id: "1jhljxXlHw8K9rezXKrnow",
  timestamps: {
    start: 1728912243787,
    end: 1728912402507,
  },
  song: "Winter Things",
  artist: "Ariana Grande",
  album_art_url:
    "https://i.scdn.co/image/ab67616d0000b273bb915a166d2d2a97a2015a7b",
  album: "Christmas & Chill",
};

export default function SpotifyStatusCard({
  spotify,
}: {
  spotify: Spotify | null;
}) {
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

  const spotifyData = spotify || defaultSpotify;

  return (
    <motion.div
      className="relative col-span-2 md:col-span-2 row-span-1 bg-[#151515] rounded-2xl p-4 flex items-center"
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
      {/* Album Art on the Left */}
      <a
        href={`https://open.spotify.com/track/${spotifyData.track_id}`}
        target="_blank"
        className="relative z-10 flex items-center justify-start xl:h-32 xl:w-32 2xl:h-36 2xl:w-36 3xl:w-56 3xl:h-56 aspect-square mr-4"
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
          className="z-20"
        >
          <Image
            alt={`${spotifyData.song} album art`}
            width={128}
            height={128}
            className="rounded-lg h-full w-full border-[1px] border-white"
            src={spotifyData.album_art_url}
            priority
          />
        </motion.div>

        <Image
          alt=""
          width={128}
          height={128}
          className="-z-10 h-full w-full rounded-lg absolute blur-2xl saturate-[10] translate-y-2 opacity-75 sm:opacity-50"
          src={spotifyData.album_art_url}
          loading="lazy"
        />

        <div className="absolute z-10 h-full w-full rounded-lg skeleton top-0 right-0"></div>
      </a>

      {/* Chip and Song Info on the Right */}
      <div className="flex flex-col justify-start space-y-2">
        {/* Chip */}
        <div className="w-fit px-3 py-1 bg-[#F2F3F3] text-black rounded-full text-xs font-semibold">
          Currently Listening
        </div>

        {/* Song Title */}
        <p className="text-white text-lg font-bold">{spotifyData.song}</p>

        {/* Artist Name */}
        <p className="text-gray-400 text-sm">{spotifyData.artist}</p>
      </div>
    </motion.div>
  );
}
