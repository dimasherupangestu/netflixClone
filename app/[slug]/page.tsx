import Image from "next/image";
import React from "react";
import error from "../../public/404.gif";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsLeft } from "lucide-react";

const Custom404 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col relative">
      <div className="flex items-start justify-start mr-auto">
        <Link href={"/"} className="ml-4">
          <Button variant="ghost" className="text-white font-bold">
            <ChevronsLeft />
            Back Home
          </Button>
        </Link>
      </div>
      <Image
        src={error}
        alt="error"
        priority
        className="object-contain w-[500px] h-[500px]"
      />
      <h1 className="text-3xl text-red-600 font-bold ">
        Sory page 404 not found
      </h1>
    </div>
  );
};

export default Custom404;
