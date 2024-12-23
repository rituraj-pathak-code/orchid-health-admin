import { Button } from "@mui/material";
import { Input } from "@/components/ui/Input";
import { AuthService } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginSchema } from "../lib/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import image from "../assets/login_image.jpg";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { LoginFormValues, LoginResponse } from "@/types/loginTypes";

const initialValues = {
  email: "bikashkalita775@gmail.com",
  password: "Password@123",
};

const Login = () => {
  const navigate = useNavigate();

  const mutation = useMutation<LoginResponse, AxiosError, LoginFormValues>({
    mutationFn: AuthService.loginUser,
    onSuccess: (data) => {
      localStorage.setItem("role", data?.data?.role);
      localStorage.setItem("token", data?.tokenData);
      toast.success("Login successful!");
      navigate("/");
    },
    onError: (error: AxiosError) => {
      console.error("Login error:", error);
      if (error.response?.status === 409) {
        toast.error("Invalid Credentials", { toastId: "inv-login" });
      } else if (error.response?.status === 404) {
        toast.error("User not found", { toastId: "not-found-login" });
      } else {
        toast.error("Something went wrong", { toastId: "wrong-login" });
      }
    },
  });

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div className="shadow-sm flex items-center lg:flex-row flex-col py-2 rounded bg-white">
        <div>
          <img
            src={image}
            alt=""
            className="w-[30vw] min-w-[500px] max-w-[600px]"
          />
        </div>
        <div className="w-[30vw] lg:min-w-[350px] min-w-[500px] max-w-[600px] px-6 py-8 lg:border-l">
          <div className="mb-4">
            <h1 className="font-bold text-2xl">Admin Login</h1>
            <p className="text-gray-500 text-sm">
              Enter your details to sign in to your account!
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              mutation.mutate(values);
            }}
          >
            {() => (
              <Form className="flex flex-col gap-4">
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
                <Button
                  variant="contained"
                  type="submit"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Please Wait" : "Sign in"}
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
