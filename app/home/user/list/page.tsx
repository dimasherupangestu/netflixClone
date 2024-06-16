import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

async function getDataUser(userId: string) {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
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
          WatchLists: { where: { userId: userId } },
        },
      },
    },
  });

  return data;
}
const UserListPage = async () => {
  const session = await getServerSession(authOptions);
  const data = await getDataUser(session?.user?.email!);
  return (
    <div className="h-screen min-h-screen">
      <h1 className="text-2xl mt-3 font-bold uppercase">My List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-8 gap-5">
        {data?.map((item) => (
          <div key={item?.Movie?.id as number} className="h-48 relative">
            <Image
              src={item?.Movie?.imageString as string}
              alt={item?.Movie?.title as string}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-sm absolute"
            />
            <div className="w-full h-60 relative tramsform hover:scale-110 transition duration-500 opacity-0 hover:opacity-100">
              <div
                className="bg-gradient-to-b from-transparent via-black/50 to-black w-full h-full 
            rounded-lg flex justify-center items-center border-1 border-slate-700">
                <Image
                  src={item?.Movie?.imageString as string}
                  alt={item?.Movie?.title as string}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg -z-10 absolute"
                />
                <MovieCard
                  {...(item?.Movie as any)}
                  key={item?.Movie?.id as number}
                  wachlistId={item?.Movie?.WatchLists[0]?.id as string}
                  wachlist={
                    (item?.Movie?.WatchLists.length as number) > 0
                      ? true
                      : false
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

export default UserListPage;
