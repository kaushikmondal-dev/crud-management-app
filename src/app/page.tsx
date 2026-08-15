import UserDetailsCard from "@/components/UserDetailsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Details | Basic CRUD",
  description: "User Details  Page of Basic CRUD Application",
};

const page = () => {
  return (
    <section className="grid grid-cols-1 place-items-center gap-8 pt-18 pb-4 md:grid-cols-2 lg:grid-cols-3">
      <UserDetailsCard />
      <UserDetailsCard />
      <UserDetailsCard />
      <UserDetailsCard />
    </section>
  );
};

export default page;
