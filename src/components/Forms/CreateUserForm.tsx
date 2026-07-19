"use client";

import { userFormSchema, userFormType } from "@/lib/zodSchema";
import createUser from "@/server/createUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, UserPenIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcnui/select";

const CreateUserForm = () => {
  const { push } = useRouter();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      userIcon: "",
      userName: "",
      userEmail: "",
      userGender: "",
      userPhNo: "",
    },
    mode: "all",
  });

  const createUserHandler = async (cuData: userFormType) => {
    await new Promise((r) => setTimeout(r, 1000));
    const { isSuccess, msg } = await createUser(cuData);

    if (isSuccess) {
      toast.success(msg);

      reset();

      push("/");
    } else {
      toast.error(msg);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(createUserHandler)}
      className="grid gap-4"
      noValidate>
      <Controller
        name="userIcon"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>User Icon</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="url"
              aria-invalid={fieldState.invalid}
              placeholder="Image url"
              autoComplete=""
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
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
              placeholder="Select Your User Name"
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
            <FieldLabel htmlFor={field.name}> Email</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="email"
              aria-invalid={fieldState.invalid}
              placeholder="Select Your User Email"
              autoComplete="email"
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
              value={field.value}
              onValueChange={(value) => field.onChange(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Your Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="userPhNo"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              type="tel"
              placeholder=" Enter Your Phone Number"
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
            Submitting..
          </>
        : <>
            <UserPenIcon />
            Add User
          </>
        }
      </Button>
    </form>
  );
};

export default CreateUserForm;
