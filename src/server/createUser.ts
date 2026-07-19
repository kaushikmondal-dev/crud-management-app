"use server";

import prisma from "@/lib/database/dbClient";
import { userFormType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const createUser = async (cuData: userFormType) => {
  try {
    await prisma.userTable.create({
      data: cuData,
    });

    revalidatePath("/");

    return {
      isSuccess: true,
      msg: "User Add 👍",
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
      msg: "Server error: Creation failed 😒 ",
    };
  }
};

export default createUser;
