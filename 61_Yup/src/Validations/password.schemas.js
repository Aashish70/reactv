import * as yup from "yup";

export const passwordSchema = yup
  .string()
  .min(6, "Minimum 6 character is required")
  .matches(/[A-Z]/, "Atleast on uppercase letter")
  .matches(/[0-9]/, "Atleast one number")
  .required("Password is required");
