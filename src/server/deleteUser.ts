"use server";

import prisma from "@/lib/dbClient/prisma";
import { revalidatePath } from "next/cache";

const deleteUser = async (userId: string) => {
  try {
    await prisma.userTable.delete({
      where: {
        userId,
      },
    });

    revalidatePath("/");

    return {
      isSuccess: true,
      msg: "User Deleted ✅",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        isSuccess: false,
        msg: "Somthing want wrong, try again ❌ !! ",
      };
    }

    return {
      isSuccess: false,
      msg: "Server Error: Deleted failed !! 💀 ",
    };
  }
};

export default deleteUser;
