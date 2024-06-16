import Image from "next/image";
import React from "react";
import bgNetfilx from "../../public/login_background.jpg";
import logo from "../../public/netflix_logo.svg";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center px-4">
      <Image
        src={bgNetfilx}
        alt="bgNetfilx"
        className="flex object-cover brightness-50 -z-10"
        priority
        fill
      />

      <div className="absolute left-4 top-4 md:left-10 md:top-6 z-20">
        <h1 className="text-3xl font-bold flex gap-x-1">
          No <span className="text-[#E50914]">Flix</span>
        </h1>
      </div>

      {children}
    </div>
  );
};

export default AuthLayout;
