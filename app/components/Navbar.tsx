"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/netflix_logo.svg";
import { linkProps } from "../types/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

const link: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "TV Shows", href: "/home/tvShows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recentlyAdded" },
  { name: "My List", href: "/home/myList" },
];
const Navbar = () => {
  const patName = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 sm:px-6 py-6  flex items-center justify-between">
      <div className="flex items-center">
        <Link href={"/home"} className="w-32">
          <Image src={logo} alt="logo" priority />
        </Link>

        <ul className="lg:flex ml-14 gap-x-4 text-white hidden items-center">
          {link.map((item, index) => (
            <div key={index}>
              {item.href === patName ? (
                <li className="text-[#e50914] font-semibold text-md underline">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ) : (
                <li className="text-md font-normal text-gray-300">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-7 items-center">
        <Search className="w-6 h-6 text-gray-300" />
        <Bell className="w-6 h-6 text-gray-300" />
        <UserNav />
      </div>
    </div>
  );
};

export default Navbar;
