"use server";

import { getServerSession } from "next-auth";
import prisma from "./utils/db";
import { authOptions } from "./utils/auth";
import { revalidatePath } from "next/cache";

export async function actionList(fromData: FormData) {
  "use server";
  const movieId = fromData.get("movieId");
  console.log("first", movieId);
  const session = await getServerSession(authOptions);
  const pathName = fromData.get("pathName") as string;
  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });
  revalidatePath(pathName);
}

export async function actionDelete(fromData: FormData) {
  "use server";

  const wachlistId = fromData.get("wachlistId") as string;
  const pathName = fromData.get("pathName") as string;
  const data = await prisma.watchList.delete({
    where: {
      id: wachlistId,
    },
  });
  revalidatePath(pathName);
}
