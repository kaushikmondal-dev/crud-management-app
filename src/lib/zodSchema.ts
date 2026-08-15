import z from "zod";

export const UserFormSchema = z.object({
  userName: z
    .string()
    .min(6, { message: "Name must be at least 6 characters" })
    .max(32, { message: "Name must be at most 32 characters" }),

  userEmail: z.email({ message: "Enter a valid email address" }),

  userDob: z.string().min(1, { message: "Date of birth is required" }),

  userGender: z.enum(["MALE", "FEMALE", "OTHER"], {
    message: "Select a gender",
  }),

  userMob: z
    .string()
    .regex(/^\d{10}$/, { message: "Enter a valid 10-digit mobile number" }),
});

export type UserFormType = z.infer<typeof UserFormSchema>;
