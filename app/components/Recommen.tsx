import React from "react";
import prisma from "../utils/db";
import Image from "next/image";
import MovieCard from "./MovieCard";

async function getDataRecom() {
  const data = await prisma.movie.findMany({
    where: {
      category: {
        not: "recent",
      },
    },
    select: {
      id: true,
      title: true,
      imageString: true,
      release: true,
      age: true,
      overview: true,
      duration: true,
      category: true,
      youtubeString: true,
      WatchLists: true,
    },
  });
  return data;
}
export default async function Recommen() {
  const data = await getDataRecom();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-8 gap-5">
      {data?.map((item) => (
        <div key={item.id} className="h-48 relative">
          <Image
            src={item.imageString}
            alt={item.title}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-sm absolute"
          />
          <div className="w-full h-60 relative tramsform hover:scale-110 transition duration-500 opacity-0 hover:opacity-100">
            <div
              className="bg-gradient-to-b from-transparent via-black/50 to-black w-full h-full 
            rounded-lg flex justify-center items-center border-1 border-slate-700">
              <Image
                src={item.imageString}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg -z-10 absolute"
              />
              <MovieCard
                {...item}
                key={item.id}
                wachlistId={item.WatchLists[0]?.id as any}
                wachlist={item.WatchLists.length > 0 ? true : false}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
