"use client";

import { UserPen } from "lucide-react";
import { Button } from "./shadcnui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcnui/card";
import UserDeleteButton from "./UserDeleteButton";

const UserDetailsCard = () => {
  return (
    <Card className="w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">User Name</CardTitle>
        <CardDescription className="flex flex-col items-center gap-1">
          <span>useremail@gmail.com</span>
          <span>userDOB</span>
          <span>userGender</span>
          <span>userMONO</span>
        </CardDescription>
      </CardHeader>
      <CardFooter className="grid grid-cols-2 gap-5">
        <UserDeleteButton />
        <Button
          type="button"
          variant="outline">
          <UserPen /> Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserDetailsCard;
