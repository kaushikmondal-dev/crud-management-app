"use server";

import prisma from "@/lib/database/dbClient";
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
      msg: "User Deleted✅",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        isSuccess: false,
        msg: "Something want to Worng, try again later ❌!!",
      };
    }
    return {
      isSuccess: false,
      msg: "Server error: Delete failed 😒 ",
    };
  }
};

export default deleteUser;
