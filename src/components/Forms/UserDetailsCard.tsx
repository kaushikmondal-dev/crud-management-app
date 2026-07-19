import { UserPenIcon } from "lucide-react";
import { Button } from "../shadcnui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";
import { Separator } from "../shadcnui/separator";
import UserDeleteButton from "../UserDeleteButton";

const UserDetailsCard = () => {
  return (
    <Card className="w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">User Name</CardTitle>
        <CardDescription className="text-lg">
          useremail@gmail.com
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardFooter className="grid grid-cols-2 gap-8">
        <UserDeleteButton />
        <Button
          type="button"
          variant={"outline"}>
          <UserPenIcon />
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserDetailsCard;
