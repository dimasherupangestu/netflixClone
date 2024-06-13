import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { authOptions } from "../utils/auth";

import IconUser from "../../public/avatar.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";
export default async function UserNav() {
  //   const session = await getServerSession(authOptions);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="w-8 h-8 rounded-md">
            <Avatar>
              <AvatarImage
                src={
                  "https://jethurmdnqnkflybcqvn.supabase.co/storage/v1/object/public/userImage/avatar.png"
                }
                alt="Avatar"
              />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-normal leading-none">dimas</p>
              <p className="text-xs leading-none text-muted-foreground">
                dimas@gmail
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
}
