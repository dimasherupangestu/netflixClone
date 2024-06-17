import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const UserNav = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Menampilkan loading state
    return <Skeleton className="w-8 h-8 rounded-full" />;
  }

  if (!session) {
    // Menampilkan pesan jika pengguna belum login
    return (
      <Link href={"/login"}>
        <Button variant={"ghost"}>Login</Button>
      </Link>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="w-8 h-8 rounded-md">
            <Avatar>
              <AvatarImage
                src={
                  session?.user?.image ??
                  "https://jethurmdnqnkflybcqvn.supabase.co/storage/v1/object/public/userImage/avatar.png"
                }
                alt="Avatar"
              />
              <AvatarFallback>{session?.user?.name || "User"}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60" align="end" forceMount>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-normal leading-none">
                {session?.user?.name || "User"}
              </p>
              <p className="text-xs leading-none text-muted-foreground line-clamp-1">
                {session?.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              signOut();
            }}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserNav;
