import { useParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

// Validation Schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const InvitationLink = () => {
  const { token } = useParams();

  console.log(token);

  return (
    <div className="flex justify-center items-center h-screen">
        <div className="w-[40vw] border p-4">
         <h2 className="mb-4">Invitation</h2>
        <Formik
            initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
            console.log("Form Data:", values);
            }}
        >
            {({ errors, touched }) => (
            <Form className="flex flex-col gap-4">
                {/* Email */}
                <div>
                <Field
                    name="email"
                    as={TextField}
                    placeholder="Email"
                    fullWidth
                    value="bikash"
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                />
                </div>

                {/* Password */}
                <div>
                <Field
                    name="password"
                    as={TextField}
                    placeholder="Password"
                    type="password"
                    fullWidth
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                />
                </div>

                {/* Confirm Password */}
                <div>
                <Field
                    name="confirmPassword"
                    as={TextField}
                    placeholder="Confirm Password"
                    type="password"
                    fullWidth
                    error={touched.confirmPassword && !!errors.confirmPassword}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                />
                </div>

                {/* Submit Button */}
                <Button type="submit">Join Orchid Health</Button>
            </Form>
            )}
        </Formik>
        </div>
    </div>
  );
};

export default InvitationLink;
