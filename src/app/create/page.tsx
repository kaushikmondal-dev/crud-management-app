import CreateForm from "@/components/CreateForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create | Basic CRUD",
  description: "Create Page of Basic CRUD Application",
};
const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Create User</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
