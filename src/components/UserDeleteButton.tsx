"use client";

import { LoaderIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const UserDeleteButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const DeleteUserHandler = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));

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
