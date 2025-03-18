const {z} = require("zod");

// creating a object schema
const userSigninSchema = z.object({
    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: "Invalid email address"})
        .endsWith("@gmail.com", "Enter a valid email")
        .min(3, {message: "Email must be atleast of 3 characters"})
        .max(255,{message:"email must not have more than 255 chars."}),

    password: z
        .string({required_error: "password is required"})
        .min(7, {message: "password must be atleast 6 characters"})
        .max(1024, {message: "password must not be greater than 1024"}),
})


const driverSigninSchema = z.object({
    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: "Invalid email address"})
        .endsWith("@gmail.com", "Enter a valid email")
        .min(3, {message: "Email must be atleast of 3 characters"})
        .max(255,{message:"email must not have more than 255 chars."}),

    password: z
        .string({required_error: "password is required"})
        .min(7, {message: "password must be atleast 6 characters"})
        .max(1024, {message: "password must not be greater than 1024"}),
})

const contactSchema = z.object({
    username: z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, {message:"name must be atleast of 3 chars. "})
        .max(255,{message:"name must not have more than 255 chars."}),

    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: "Invalid email address"})
        .endsWith("@gmail.com", "Enter a valid email")
        .min(3, {message: "Email must be atleast of 3 characters"})
        .max(255,{message:"email must not have more than 255 chars."}),

    message: z
        .string({required_error:"Message is required"})
        .trim()
        .min(3, {message:"Message must be atleast of 3 chars. "})
        .max(1024,{message:"Message must not have more than 1024 chars."}),
    
})


const userSignupSchema = z.object({
    username: z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, {message:"name must be atleast of 3 chars. "})
        .max(255,{message:"name must not have more than 255 chars."}),

    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: "Invalid email address"})
        .endsWith("@gmail.com", "Email must end with @gmail.com")
        .min(3, {message: "Email must be atleast of 3 characters"})
        .max(255,{message:"email must not have more than 255 chars."}),

    phone: z
        .string({required_error: "Phone is required"})
        .trim()
        .min(10, {message: "Phone must be atleast of 10 characters"})
        .max(20,{message:"phone must not have more than 20 chars."}),
    
    password: z
        .string({ required_error: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters long" }) // Consistent minimum length
        .max(1024, { message: "Password must not be greater than 1024 characters" })
        .refine((value) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value), {
        message: "Password must contain at least one special character",
        })
        .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
        }),
    
    city: z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, {message:"city must be atleast of 3 chars. "})
        .max(30,{message:"city must not have more than 30 chars."}),
})


const driverSignupSchema = z.object({
    username: z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, {message:"name must be atleast of 3 chars. "})
        .max(255,{message:"name must not have more than 255 chars."}),

    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: "Invalid email address"})
        .endsWith("@gmail.com", "Email must end with @gmail.com")
        .min(3, {message: "Email must be atleast of 3 characters"})
        .max(255,{message:"email must not have more than 255 chars."}),

    phone: z
        .string({required_error: "Phone is required"})
        .trim()
        .min(10, {message: "Phone must be atleast of 10 characters"})
        .max(20,{message:"phone must not have more than 20 chars."}),
    
    password: z
        .string({ required_error: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters long" }) // Consistent minimum length
        .max(1024, { message: "Password must not be greater than 1024 characters" })
        .refine((value) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value), {
        message: "Password must contain at least one special character",
        })
        .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
        }),
    
    city: z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, {message:"city must be atleast of 3 chars. "})
        .max(30,{message:"city must not have more than 30 chars."}),

    vehicleNo: z
        .string({required_error:"Vehicle Number is required"})
        .trim()
        .min(9, {message:"Vehicle Number must be atleast of 9 chars. "})
        .max(12,{message:"Vehicle Number must not have more than 12 chars."}),
    
})

module.exports = {userSignupSchema, userSigninSchema, contactSchema, driverSignupSchema, driverSigninSchema};