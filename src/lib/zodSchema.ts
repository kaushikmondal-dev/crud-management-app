import z from "zod";

export const userFormSchema = z.object({
  userName: z
    .string()
    .min(3, { error: "Full Name must be more than 3 characters long" })
    .max(32, { error: "Full Name maximum 32 characters long" }),

  userEmail: z
    .email({ error: "Invalid Email" })
    .max(64, { error: "Email maximum 64 characters long" }),

  userGender: z.string().refine((value) => ["Male", "Female"].includes(value), {
    message: "Please select a gender",
  }),

  userPhNo: z.string().regex(/^\d{10}$/, {
    error: "Phone Number must contain exactly 10 digits",
  }),
});

export type userFormType = z.infer<typeof userFormSchema>;
