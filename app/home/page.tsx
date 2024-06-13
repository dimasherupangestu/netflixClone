import React from "react";
import Navbar from "../components/Navbar";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Home Page</h1>
      <h1>{session.user?.email}</h1>
      {/* <Image src={session.user?.image} alt="image" /> */}
    </div>
  );
};

export default HomePage;
