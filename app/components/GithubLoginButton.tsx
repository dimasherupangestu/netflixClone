"use client";

import { Button } from "@/components/ui/button";
import GithubIcon from "../../public/github.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Github } from "lucide-react";

const GithubLoginButton = () => {
  return (
    <Button onClick={() => signIn("github")} variant="outline" size={"icon"}>
      <Github className="w-5 h-5" />
    </Button>
  );
};

export default GithubLoginButton;
