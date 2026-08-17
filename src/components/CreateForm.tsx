"use client";

import { UserFormSchema, UserFormType } from "@/lib/zodSchema";
import createUser from "@/server/createUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, UserPlus2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./shadcnui/select";
import { toast } from "./shadcnui/toast";

const CreateForm = () => {
  const { push } = useRouter();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      userName: "",
      userEmail: "",
      userDob: "",
      userGender: undefined,
      userMob: "",
    },
    mode: "all",
  });

  const createUserHandler = async (uDATA: UserFormType) => {
    await new Promise((r) => setTimeout(r, 1000));
    const { isSuccess, msg } = await createUser(uDATA);

    if (isSuccess) {
      toast.add({ title: msg });
      reset();
      push("/");
    } else {
      toast.add({ title: msg });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(createUserHandler)}
      className="grid gap-4"
      noValidate>
      <Controller
        name="userName"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Name</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="text"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Your Name"
              autoComplete="name"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="userEmail"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="email"
              placeholder="Enter Your Email"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="userGender"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Gender</FieldLabel>
            <Select
              value={field.value ?? ""}
              onValueChange={(value) => field.onChange(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Your Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MALE">Male</SelectItem>
                <SelectItem value="FEMALE">Female</SelectItem>
                <SelectItem value="OTHER">Other</SelectItem>
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="userDob"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Date Of Birth</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="date"
              placeholder="Enter Your DOB"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="userMob"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              type="tel"
              placeholder="Enter Your Phone Number"
              autoComplete="mobile tel-country-code"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button
        type="submit"
        disabled={isSubmitting}>
        {isSubmitting ?
          <>
            <LoaderIcon className="animate-spin" />
            Submitting.....
          </>
        : <>
            <UserPlus2 />
            Add User
          </>
        }
      </Button>
    </form>
  );
};

export default CreateForm;
