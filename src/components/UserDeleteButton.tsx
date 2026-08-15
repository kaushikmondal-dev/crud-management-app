"use client";

import { LoaderIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const UserDeleteButton = () => {
  const [isLoading, setIsLoding] = useState(false);

  const DeleteUserHandler = async () => {
    setIsLoding(true);
    await new Promise((r) => setTimeout(r, 1000));
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
