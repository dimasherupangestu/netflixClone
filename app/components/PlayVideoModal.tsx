import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import React from "react";

export interface PlayVideoModalProps {
  id?: number;
  state?: boolean;
  chengeState?: any;
  title?: string;
  duration?: number;
  age?: number;
  overview?: string;
  release?: number;
  category?: string;
  youtubeString?: string;
}
const PlayVideoModal = ({
  id,
  state,
  chengeState,
  title,
  duration,
  overview,
  age,
  release,
  youtubeString,
}: PlayVideoModalProps) => {
  return (
    <>
      <Dialog
        key={id}
        open={state}
        onOpenChange={() => {
          chengeState(!state);
        }}>
        <DialogContent className="sm:max-w-[425px] p-4">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="line-clamp-3">
              {overview}
            </DialogDescription>
            <div className="w-full flex items-center gap-x-3">
              <p className="text-sm font-normal">{release}</p>
              <p className="text-xs px-1 py-0.5 border rounded-md ">{age}+</p>
              <p className="text-sm font-normal text-white">{duration}h</p>
            </div>
          </DialogHeader>
          <iframe src={youtubeString} className="w-full" height={250}></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlayVideoModal;
