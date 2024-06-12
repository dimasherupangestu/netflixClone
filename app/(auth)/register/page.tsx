import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import GoogleIcon from "../../../public/google.svg";
import React from "react";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="mt-24 bg-black/80 py-10 px-7 md:mt-0 md:px-14 rounded md:max-w-sm ">
      <form>
        <h1 className="text-3xl font-bold">Register</h1>
        <div className="space-y-4 mt-5">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full bg-[#333] inline-block placeholder:text-xs placeholder:text-gray-400"
          />
          <Button
            variant="destructive"
            type="submit"
            className="bg-[#e50914] w-full mt-3">
            Register
          </Button>
        </div>
      </form>

      <div className="flex items-center justify-center mt-3">
        <p className="text-slate-500 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-white hover:underline hover:text-[#e50914] ml-1">
            Login Now!
          </Link>
        </p>
      </div>

      <div className="flex items-center justify-center mt-6 gap-x-3">
        <Button variant="outline" size={"icon"}>
          <GithubIcon className="w-5 h-5" />
        </Button>

        <Button variant="outline" size={"icon"}>
          <Image src={GoogleIcon} alt="GoogleIcon" className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
