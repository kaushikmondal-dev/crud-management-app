"use client";

import deleteUser from "@/server/deleteUser";
import { LoaderIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { toast } from "./shadcnui/toast";

type UserDeleteButton = {
  userId: string;
};

const UserDeleteButton = ({ userId }: UserDeleteButton) => {
  const [isLoading, setIsLoding] = useState(false);

  const { refresh } = useRouter();

  const DeleteUserHandler = async () => {
    setIsLoding(true);
    await new Promise((r) => setTimeout(r, 1000));

    const { isSuccess, msg } = await deleteUser(userId);

    if (isSuccess) {
      toast.add({ title: msg });

      refresh();
    } else {
      toast.add({ title: msg });
    }

    setIsLoding(false);
  };

  return (
    <Button
      type="button"
      variant="destructive"
      disabled={isLoading}
      onClick={DeleteUserHandler}>
      {isLoading ?
        <>
          <LoaderIcon className="animate-spin" />
          Deleting...
        </>
      : <>
          <Trash2Icon />
          Delete
        </>
      }
    </Button>
  );
};

export default UserDeleteButton;
