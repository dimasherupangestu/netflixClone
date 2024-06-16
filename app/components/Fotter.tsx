"use client";

import React from "react";
import { links } from "./Navbar";
import { useRouter } from "next/navigation"; // Mengubah import dari next/router ke next/navigation

const Fotter = () => {
  const router = useRouter();
  const handleLinkClick = (href: string) => {
    const isValidLink = links.some((link) => link.href === href);
    if (isValidLink) {
      router.push(href);
    } else {
      router.push("/404"); // Arahkan ke halaman 404
    }
  };

  return (
    <div className="w-full h-28 px-9 bg-[#131313] flex justify-between items-center mt-7 ">
      <h1 className="text-3xl font-bold flex gap-x-1">
        No <span className="text-[#E50914]">Flix</span>
      </h1>

      <ul className="lg:flex gap-x-4 text-white items-center">
        {links.map((item, index) => (
          <li
            key={index}
            className="text-md font-normal text-gray-300 cursor-pointer">
            <span onClick={() => handleLinkClick(item.href)}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fotter;
