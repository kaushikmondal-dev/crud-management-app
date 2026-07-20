import UserDetailsCard from "@/components/Forms/UserDetailsCard";
import { Card, CardContent } from "@/components/shadcnui/card";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Details | CRUD App",
  description: "User Details of CRUD App",
};

const page = async () => {
  const allUsers = await prisma.userTable.findMany();

  if (allUsers.length === 0) {
    return (
      <section className="grid h-dvh place-items-center">
        <Card className="">
          <CardContent className="text-4xl">
            No user in the database
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-8 pt-18 pb-4 md:grid-cols-2 lg:grid-cols-3">
      {allUsers.map((item) => (
        <UserDetailsCard
          key={item.userId}
          userData={item}
        />
      ))}
    </section>
  );
};

export default page;
