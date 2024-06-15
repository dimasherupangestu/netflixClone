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

      <Image
        src={logo}
        alt="logo"
        width={120}
        height={120}
        priority
        className="absolute left-4 top-4  object-contain md:left-10 md:top-6 z-20"></Image>
      {children}
    </div>
  );
};

export default AuthLayout;
