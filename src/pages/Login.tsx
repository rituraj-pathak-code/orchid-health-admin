import { Button } from "@mui/material";
import Input from "../components/ui/Input";
import { useState } from "react";
import { AuthService } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginSchema } from "../lib/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import image from "../assets/login_image.jpg"

const initialValues = {
  email: "bikashkalita775@gmail.com",
  password: "Password@123",
};

const Login = ({setUserRole}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async (values) => {
    setLoading(true);
    const res = await AuthService.loginUser(values);
    console.log(res);
    if (res.status == 200) {
      setLoading(false);
      console.log(res?.data?.data?.role)
      localStorage.setItem("role", res?.data?.data?.role);
      localStorage.setItem("token", res?.data?.tokenData);
      setUserRole(res?.data?.data?.role)
      navigate("/admin/dashboard");
    } else if (res.status == 409) {
      setLoading(false);
      toast.error("Invalid Credentials", { toastId: "inv-login" });
    } else {
      setLoading(false);
      toast.error("Something went wrong", { toastId: "wrong-login" });
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div className="shadow-sm flex items-center lg:flex-row flex-col py-2 rounded bg-white">
        <div>
          <img src={image} alt="" className="w-[30vw] min-w-[500px] max-w-[600px]" />
        </div>
        <div className="w-[30vw] lg:min-w-[350px] min-w-[500px] max-w-[600px] px-6 py-8 lg:border-l">
          <div className="mb-4">
            <h1 className="font-bold text-2xl">Admin Login</h1>
            <p className="text-gray-500 text-sm">Enter your details to sign in to your account!</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              loginHandler(values);
            }}
          >
            {() => (
              <Form className="flex flex-col gap-4">
                {/* Email Field */}
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter email id"
                    as={Input}
                    label="Email id"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>

                <div>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    as={Input}
                    label="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <Button variant="contained" type="submit" disabled={loading}>
                  {loading ? "Please Wait" : "Sign in"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
