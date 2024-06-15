"use client";
import React, { useState } from "react";
import { PropsMovieCard } from "../types";
import { Heart, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PlayVideoModal from "./PlayVideoModal";
import { usePathname } from "next/navigation";
import { actionDelete, actionList } from "../action";

const MovieCard = ({
  id,
  title,
  age,
  duration,
  wachlist,
  wachlistId,
  youtubeString,
  overview,
  release,
}: PropsMovieCard) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  return (
    <>
      <button onClick={() => setOpen(true)} className="-mt-14">
        <PlayCircle className="w-20 h-20" />
      </button>

      <div className="absolute top-4 right-4 flex items-center z-10">
        {wachlist ? (
          <form action={actionDelete}>
            <input type="hidden" name="wachlistId" value={wachlistId} />
            <input type="hidden" name="pathName" value={pathName} />
            <Button variant={"outline"} size={"icon"}>
              <Heart className="w-5 h-5 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={actionList}>
            <input type="hidden" name="movieId" value={id} />
            <input type="hidden" name="pathName" value={pathName} />

            <Button variant={"outline"} size={"icon"}>
              <Heart className="w-5 h-5" />
            </Button>
          </form>
        )}
      </div>
      <div className="p-4 absolute bottom-0 left-0">
        <h1 className="text-xl font-bold line-clamp-1">{title}</h1>
        <div className="flex gap-x-3 items-center">
          <p className="text-sm font-normal">{release}</p>
          <p className="text-xs px-1 py-0.5 border rounded-md ">{age}+</p>
          <p className="text-sm font-normal text-white">{duration}h</p>
        </div>
        <p className="text-sm line-clamp-1 text-gray-300 mt-1">{overview}</p>
      </div>

      <PlayVideoModal
        id={id}
        state={open}
        chengeState={setOpen}
        youtubeString={youtubeString}
        title={title}
        overview={overview}
        release={release}
        age={age}
        duration={duration}
      />
    </>
  );
};

export default MovieCard;
