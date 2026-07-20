"use client";

import deleteUser from "@/server/deleteUser";
import { LoaderIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "./shadcnui/button";

type UserDeleteButton = {
  userId: string;
};

const UserDeleteButton = ({ userId }: UserDeleteButton) => {
  const [isLoading, setIsLoading] = useState(false);

  const { refresh } = useRouter();

  const DeleteUserHandler = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));

    const { isSuccess, msg } = await deleteUser(userId);

    if (isSuccess) {
      toast.success(msg);

      refresh();
    } else {
      toast.error(msg);
    }

    setIsLoading(false);
  };

  return (
    <Button
      type="button"
      variant={"destructive"}
      onClick={DeleteUserHandler}
      disabled={isLoading}>
      {isLoading ?
        <>
          <LoaderIcon className="animate-spin" />
          Submitting..
        </>
      : <>
          <Trash2Icon /> Delete
        </>
      }
    </Button>
  );
};

export default UserDeleteButton;
