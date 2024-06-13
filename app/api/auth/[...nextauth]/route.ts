import { authOptions } from "@/app/utils/auth";
import NextAuth from "next-auth";

const hendler = NextAuth(authOptions);

export { hendler as GET, hendler as POST };
