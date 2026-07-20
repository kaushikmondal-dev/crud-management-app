import { UserTable } from "@generated/prisma/client";
import { UserPenIcon } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { buttonVariants } from "../shadcnui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";
import { Separator } from "../shadcnui/separator";
import UserDeleteButton from "../UserDeleteButton";

type UserDetailsCardProps = {
  userData: UserTable;
};

const UserDetailsCard = ({ userData }: UserDetailsCardProps) => {
  return (
    <Card className="w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{userData.userName}</CardTitle>
        <CardDescription className="text-lg">
          <p>{userData.userEmail}</p>
          <p>Gender: {userData.userGender}</p>
          <p>Phone: +91 {userData.userPhNo}</p>
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardFooter className="grid grid-cols-2 gap-8">
        <UserDeleteButton userId={userData.userId} />

        <Link
          href={`/${userData.userId}` as Route}
          className={buttonVariants({ variant: "outline", size: "sm" })}>
          <UserPenIcon />
          Edit
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserDetailsCard;
