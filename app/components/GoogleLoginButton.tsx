"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import GoogleIcon from "../../public/google.svg";
import { signIn } from "next-auth/react";

const GoogleLoginButton = () => {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size={"icon"}>
      <Image src={GoogleIcon} alt="GoogleIcon" className="w-8 h-8" />
    </Button>
  );
};

export default GoogleLoginButton;
