import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  const validate = [
    "/home",
    "/home/tvShows",
    "/home/movies",
    "/home/recentlyAdded",
    "/home/user/list",
  ];
  const { pathname } = req.nextUrl;
  if (!validate.includes(pathname)) {
    return NextResponse.redirect(new URL("/404", req.url));
  }

  return NextResponse.next();
}
