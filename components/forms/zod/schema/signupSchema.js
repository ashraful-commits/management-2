import z from "zod";

export const signupSchema = z
  .object({
    email: z.string().email("Please enter a valid email"),
    username: z.string("Please enter a username").min(4, 'User name must atleast be 4 characters'),
    password: z
      .string()
      .min(
        8,
        "Password must be minimum of 8 chars and contains symbols, numbers and capital chars"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords does not match",
  });
