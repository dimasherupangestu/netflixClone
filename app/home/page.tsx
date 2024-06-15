import React from "react";
import Navbar from "../components/Navbar";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import MovieVidio from "../components/MovieVidio";
import RecentlyAdded from "../components/RecentlyAdded";
import Recommen from "../components/Recommen";

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="px-5 sm:mt-0 lg:px-0 pb-7">
      <MovieVidio />
      <h1 className="text-3xl font-bold">Recently Added</h1>
      <RecentlyAdded />

      <div className="mt-14 ">
        <h1 className="text-3xl font-bold">Recommendation for you</h1>
        <Recommen />
      </div>
    </div>
  );
};

export default HomePage;
