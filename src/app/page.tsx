import UserDetailsCard from "@/components/Forms/UserDetailsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Details | CRUD App",
  description: "User Details of CRUD App",
};

const page = () => {
  return (
    <section className="grid grid-cols-1 gap-8 pt-18 pb-4 md:grid-cols-2 lg:grid-cols-3">
      <UserDetailsCard />
      <UserDetailsCard />
      <UserDetailsCard />
      <UserDetailsCard />
      <UserDetailsCard />
      <UserDetailsCard />
    </section>
  );
};

export default page;
