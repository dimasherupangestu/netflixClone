import Image from "next/image";
import React from "react";
import bgNetfilx from "../../public/login_background.jpg";
import logo from "../../public/netflix_logo.svg";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={bgNetfilx}
        alt="bgNetfilx"
        className="hidden sm:flex sm:object-cover sm:brightness-50 -z-10"
        priority
        fill
      />

      <Image
        src={logo}
        alt="logo"
        width={120}
        height={120}
        priority
        className="absolute left-4 top-4  object-contain md:left-10 md:top-6 z-10"></Image>
      {children}
    </div>
  );
};

export default AuthLayout;
