import React from "react";
import prisma from "../utils/db";
import { Button } from "@/components/ui/button";

async function getMovieVidio() {
  const data = await prisma.movie.findFirst({
    select: {
      id: true,
      title: true,
      videoSource: true,
      imageString: true,
      duration: true,
      release: true,
      age: true,
      overview: true,
      category: true,
    },
  });
  return data;
}
async function MovieVidio() {
  const data = await getMovieVidio();
  return (
    <div className="w-full bg-red h-[55vh] lg:h-[60vh] flex justify-start items-center">
      <video
        poster={data?.imageString}
        autoPlay
        loop
        src={data?.videoSource}
        muted
        className="w-full h-[65vh] object-cover absolute top-0 left-0 -z-10 brightness-[60%]"></video>

      <div className="w-[95%] h-[30%] -mt-[6rem] bg-red justify-start items-center mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          {data?.title}
        </h1>
        <p className="text-white text-lg md:text-md line-clamp-3 w-[55%] mt-2">
          {data?.overview}
        </p>
        <div className="flex gap-x-4 mt-2">
          <Button variant={"destructive"} className="bg-[#e50914]">
            See More
          </Button>
          <Button>More Info</Button>
        </div>
      </div>
    </div>
  );
}

export default MovieVidio;
