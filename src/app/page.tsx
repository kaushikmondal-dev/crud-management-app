import UserDetailsCard from "@/components/UserDetailsCard";
import prisma from "@/lib/dbClient/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Details | Basic CRUD",
  description: "User Details  Page of Basic CRUD Application",
};

const page = async () => {
  const allUsers = await prisma.userTable.findMany();

  return (
    <section className="grid grid-cols-1 place-items-center gap-8 pt-18 pb-4 md:grid-cols-2 lg:grid-cols-3">
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
