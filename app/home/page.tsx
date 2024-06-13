import React from "react";
import Navbar from "../components/Navbar";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <h1>{session.user?.email}</h1>
    </div>
  );
};

export default HomePage;
