"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import React, { useState } from "react";
import PlayVideoModal, { PlayVideoModalProps } from "./PlayVideoModal";

function ButtonPlay({ ...props }: PlayVideoModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        variant={"destructive"}
        className="bg-[#e50914] w-[10rem] py-2">
        <PlayCircle className="w-5 h-5 mr-1" />
        Play
      </Button>

      <PlayVideoModal
        state={open}
        chengeState={() => setOpen(!open)}
        {...props}
      />
    </>
  );
}

export default ButtonPlay;
