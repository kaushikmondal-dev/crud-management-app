"use client";

import { userFormSchema, userFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CreateUserForm = () => {
  const { handleSubmit } = useForm({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      userName: "",
      userEmail: "",
      userGender: "",
      userPhNo: "",
    },
    mode: "all",
  });

  const createUserHandler = async (cuData: userFormType) => {
    console.log(cuData);
  };

  return (
    <form
      onSubmit={handleSubmit(createUserHandler)}
      className="grid gap-4"
      noValidate></form>
  );
};

export default CreateUserForm;
