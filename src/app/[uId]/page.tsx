import EditUserForm from "@/components/Forms/EditUserForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit | CRUD App",
  description: "Edit Form of CRUD App",
};

type EditPageProps = {
  params: Promise<{ uId: string }>;
};

const page = async ({ params }: EditPageProps) => {
  const { uId } = await params;

  const user = await prisma.userTable.findUnique({
    where: {
      userId: uId,
    },
  });

  if (user === null) {
    return notFound();
  }

  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Edit User</CardTitle>
        </CardHeader>
        <CardContent>
          <EditUserForm uInfo={user} />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
