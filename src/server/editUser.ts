"use server";

import prisma from "@/lib/database/dbClient";
import { userFormType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const editUser = async (userId: string, cuData: userFormType) => {
  try {
    await prisma.userTable.update({
      where: {
        userId,
      },

      data: cuData,
    });

    revalidatePath("/");

    return {
      isSuccess: true,
      msg: "User Edited ✅",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        isSuccess: false,
        msg: "Something want to Worng, try later ❌!!",
      };
    }
    return {
      isSuccess: false,
      msg: "Server error: Update failed 😒 ",
    };
  }
};

export default editUser;
