"use client"; // Pastikan use client ditambahkan karena ini komponen klien

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import logo from "../../public/netflix_logo.svg";
import { Bell, Menu, Search } from "lucide-react";
import UserNav from "./UserNav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const links = [
  { name: "Home", href: "/home" },
  { name: "TV Shows", href: "/home/tvShows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recentlyAdded" },
  { name: "My List", href: "/home/user/list" },
];

const Navbar = () => {
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    // Check if the route is valid
    const isValidLink = links.some((link) => link.href === href);
    if (isValidLink) {
      router.push(href);
    } else {
      router.push("/404"); // Arahkan ke halaman 404
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 sm:px-6 py-6 flex items-center justify-between">
      <div className="flex items-center">
        <div
          className="w-32 cursor-pointer"
          onClick={() => handleLinkClick("/home")}>
          <Image src={logo} alt="logo" priority />
        </div>
        <ul className="lg:flex ml-14 gap-x-4 text-white hidden items-center">
          {links.map((item, index) => (
            <div key={index}>
              <li className="text-md font-normal text-gray-300 cursor-pointer">
                <span onClick={() => handleLinkClick(item.href)}>
                  {item.name}
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-7 items-center">
        <Search className="w-6 h-6 text-gray-300" />
        <Bell className="w-6 h-6 text-gray-300" />
        <div className="lg:hidden md:hidden sm:flex">
          <NavigationMenu className="lg:hidden md:hidden sm:flex">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Menu />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-32 bg-transparent">
                <ul className="flex flex-col  gap-3 p-4 ">
                  {links.map((item, index) => (
                    <div key={index}>
                      <li className="text-md font-normal text-gray-300 cursor-pointer list-none">
                        <span onClick={() => handleLinkClick(item.href)}>
                          {item.name}
                        </span>
                      </li>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
        <UserNav />
      </div>
    </div>
  );
};

export default Navbar;
