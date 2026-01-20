import * as yup from yup;
import { emailSchema } from "./email.schemas";
import { passwordSchema } from "./password.schemas";


export const loginSchema = yup.object({
    email: emailSchema,
    password: passwordSchema
})


export const registerSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'password must match').required()
})

