import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

async function GetDataCategory(category: string, user: string) {
  try {
    if (category === "tvShows") {
      const data = await prisma.movie.findMany({
        where: {
          category: "show",
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
          WatchLists: { where: { userId: user } },
        },
      });
      return data;
    } else if (category === "movies") {
      const data = await prisma.movie.findMany({
        where: {
          category: "movie",
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
          WatchLists: { where: { userId: user } },
        },
      });
      return data;
    }
    if (category === "recentlyAdded") {
      const data = await prisma.movie.findMany({
        where: {
          category: "recent",
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
          WatchLists: { where: { userId: user } },
        },
      });
      return data;
    }
  } catch (error) {
    throw error;
  }
}

const CategoryPage = async ({ params }: { params: { genre: string } }) => {
  const validGenres = ["tvShows", "movies", "recentlyAdded"]; // Daftar genre yang valid

  if (!validGenres.includes(params.genre)) {
    redirect("/404");
  }
  const session = await getServerSession(authOptions);
  const data = await GetDataCategory(params.genre, session?.user?.email!);
  // console.log(data, "halo");
  return (
    <div className="h-screen min-h-screen">
      <h1 className="text-2xl mt-3 font-bold uppercase">{params.genre}</h1>
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
                  {...(item as any)}
                  key={item?.id as number}
                  wachlistId={item?.WatchLists[0]?.id as string}
                  wachlist={
                    (item?.WatchLists.length as number) > 0 ? true : false
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
