"use server";

import prisma from "@/lib/dbClient/prisma";
import { UserFormType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const createUser = async (uDATA: UserFormType) => {
  try {
    await prisma.userTable.create({
      data: uDATA,
    });

    revalidatePath("/");

    return {
      isSuccess: true,
      msg: "User Added ✅",
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
      msg: "Server Error: Creation failed !! 💀 ",
    };
  }
};

export default createUser;
