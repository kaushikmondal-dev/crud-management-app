"use client";

import { userFormSchema, userFormType } from "@/lib/zodSchema";
import { UserTable } from "@generated/prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, UserPenIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
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

// import updateUser from "@/server/updateUser";
// import { toast } from "react-toastify";

type EditUserFormProps = {
  uInfo: UserTable;
};

const EditUserForm = ({ uInfo }: EditUserFormProps) => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isDirty },
  } = useForm<userFormType>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      userIcon: uInfo.userIcon,
      userName: uInfo.userName,
      userEmail: uInfo.userEmail,
      userGender: uInfo.userGender,
      userPhNo: uInfo.userPhNo,
    },
    mode: "all",
  });

  const editUserHandler = async (data: userFormType) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // const { isSuccess, msg } = await updateUser(uInfo.userId, data);

      // if (isSuccess) {
      //   toast.success(msg);
      //   router.push("/");
      //   router.refresh();
      // } else {
      //   toast.error(msg);
      // }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(editUserHandler)}
      className="grid gap-4"
      noValidate>
      {/* User Icon */}
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
              placeholder="Enter Image URL"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* User Name */}
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
              placeholder="Enter User Name"
              autoComplete="name"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Email */}
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
              placeholder="Enter Email"
              autoComplete="email"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Gender */}
      <Controller
        name="userGender"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Gender</FieldLabel>

            <Select
              value={field.value}
              onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Gender" />
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

      {/* Phone */}
      <Controller
        name="userPhNo"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>

            <Input
              {...field}
              id={field.name}
              type="tel"
              placeholder="Enter Phone Number"
              autoComplete="tel"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        disabled={isSubmitting || !isDirty}>
        {isSubmitting ?
          <>
            <LoaderIcon className="animate-spin" />
            Updating...
          </>
        : <>
            <UserPenIcon />
            Update User
          </>
        }
      </Button>
    </form>
  );
};

export default EditUserForm;
