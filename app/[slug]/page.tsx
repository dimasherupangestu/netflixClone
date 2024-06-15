import Image from "next/image";
import React from "react";
import error from "../../public/404.gif";

const Custom404 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
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
