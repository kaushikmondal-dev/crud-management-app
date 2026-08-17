"use client";

import { UserTable } from "@generated/prisma/client";
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

type UserDetailsCardProps = {
  userData: UserTable;
};

const UserDetailsCard = ({ userData }: UserDetailsCardProps) => {
  return (
    <Card className="w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{userData.userName}</CardTitle>
        <CardDescription className="flex flex-col items-center gap-1">
          <span>{userData.userEmail}</span>
          <span>{userData.userDob}</span>
          <span>{userData.userGender}</span>
          <span>{userData.userMob}</span>
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
