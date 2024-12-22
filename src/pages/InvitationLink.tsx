import { useParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { UserService } from "../services/userServices";

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
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("");
  const { token } = useParams();

  const getEmailByTokenHandler = async () => {
    setLoading(true)
    const res = await UserService.getUserEmailByLink(token);
    
    if (res.status == 200) {
      if(!res.data.data.email){
        // TODO: if email not received then redirect to Error page
      }
      setLoading(false)
      setEmail(res.data.data.email);
    } else {
      setLoading(false)(false)
      // TODO: if email not received then redirect to Error page
    }
  };

  useEffect(() => {
    getEmailByTokenHandler();
  }, []);

  console.log(token);

  if(loading){
    return (
      <div>loading....</div>
    )
  }

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
                  value={email}
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
