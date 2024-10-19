"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:flex h-14 rounded-full mt-6 bg-[#151515] flex-row">
        <Link className="text-white font-semibold my-auto ml-8" href="/">
          abhishek an.
        </Link>
        <div className="my-auto grid grid-flow-col gap-16 ml-auto mr-16">
          <a className="text-white font-semibold" href="https://blog.abhishekan.dev">
            Blog
          </a>
          <a href="https://cv.abhishekan.dev" className="text-white font-semibold">CV</a>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex md:hidden top-0 left-0 w-full h-14 bg-[#151515] shadow-md z-50 items-center">
        <Link className="text-white font-semibold ml-4" href="/">
          abhishek an.
        </Link>
        <div className="ml-auto mr-4">
          <button onClick={toggleMenu}>
            <Image
              src="/menu.png"
              alt="Menu Icon"
              width={24}
              height={24}
              className="text-white"
            />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed top-14 left-0 w-full bg-[#1c1c1c] text-white p-4 z-40">
          <a
            className="block py-4 font-semibold"
            href="https://blog.abhishekan.dev"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>
          <Link
            className="block py-4 font-semibold"
            href="https://cv.abhishekan.dev"
            onClick={() => setMenuOpen(false)}
          >
            CV
          </Link>
        </div>
      )}
    </div>
  );
}
