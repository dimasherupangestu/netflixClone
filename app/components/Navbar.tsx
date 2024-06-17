"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Bell, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import UserNav from "./UserNav";

export const links = [
  { name: "Home", href: "/home" },
  { name: "TV Shows", href: "/home/tvShows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recentlyAdded" },
  { name: "My List", href: "/home/user/list" },
];

const Navbar = ({ session }: any) => {
  // console.log("nav", session);
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
          className="w-32 cursor-pointer pl-4"
          onClick={() => handleLinkClick("/home")}>
          <h1 className="text-3xl font-bold flex gap-x-1">
            No <span className="text-[#E50914]">Flix</span>
          </h1>
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
      <div className="flex gap-x-2 md:gap-x-5 lg:gap-x-6 xl:gap-x-7 items-center">
        <Bell className="w-6 h-6 text-gray-300" />
        <div className="lg:hidden md:hidden sm:flex">
          <NavigationMenu className="lg:hidden md:hidden sm:flex bg-transparent">
            <NavigationMenuItem className="bg-transparent">
              <NavigationMenuTrigger>
                <Menu />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-32">
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
