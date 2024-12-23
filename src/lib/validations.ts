import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

export const inviteUserSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  primaryPhoneNumber: Yup.string().required("Phone Number is required"),
  countryCode: Yup.string().required("Country Code is required"),
  role: Yup.string().required("Role is required"),
});