"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const GithubLoginButton = () => {
  return (
    <Button onClick={() => signIn("github")} variant="outline" size={"icon"}>
      <GithubIcon className="w-5 h-5" />
    </Button>
  );
};

export default GithubLoginButton;
