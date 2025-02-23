const {z} = require("zod");

// creating a object schema
const signinSchema = z.object({
    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: "Invalid email address"})
        .endsWith("@gmail.com", "Email must end with @gmail.com")
        .min(3, {message: "Email must be atleast of 3 characters"})
        .max(255,{message:"email must not have more than 255 chars."}),

    password: z
        .string({required_error: "password is required"})
        .min(7, {message: "password must be atleast 6 characters"})
        .max(1024, {message: "password must not be greater than 1024"}),
})


const signupSchema = z.object({
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
        .string({required_error: "password is required"})
        .min(7, {message: "password must be atleast 6 characters"})
        .max(1024, {message: "password must not be greater than 1024"}),
    
    city: z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, {message:"city must be atleast of 3 chars. "})
        .max(30,{message:"city must not have more than 30 chars."}),
})

module.exports = {signupSchema, signinSchema};