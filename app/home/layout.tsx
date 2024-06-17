import { getServerSession } from "next-auth";
import Navbar from "../components/Navbar";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Fotter from "../components/Fotter";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      <Navbar session={session} />

      <main className="h-screen min-h-screen">
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          {children}
        </main>
        <Fotter />
      </main>
    </>
  );
}
