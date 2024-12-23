import { Formik, Form, Field } from "formik";
import { UserService } from "../../services/userServices";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/Input";
import { Button } from "../ui/button";
import { InviteUser } from "@/types/userTypes";
import { inviteUserSchema } from "@/lib/validations";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useState } from "react";

const InviteUserModal = () => {
  const [open, setOpen] = useState(false);
  const mutation = useMutation({
    mutationFn: (payload: { data: InviteUser; token: string }) => {
      return UserService.inviteUser(payload.data, payload.token);
    },
    onSuccess: () => {
      toast.success("User invitation sent");
      setOpen(false);
    },
    onError: (error) => {
      console.error("Invitation error:", error);
      toast.success("Something went wrong");
    },
  });

  const inviteUserHandler = async (payload: InviteUser) => {
    const token = localStorage.getItem("token");
    if (token) {
      mutation.mutate({ data: payload, token });
    }
  };

  return (
    <Dialog  open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" onClick={() => setOpen(true)}>Invite User</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite User</DialogTitle>
          <DialogDescription>
            Fill in the details to add new user
          </DialogDescription>
        </DialogHeader>
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              primaryPhoneNumber: "",
              countryCode: "",
              role: "",
            }}
            validationSchema={inviteUserSchema}
            onSubmit={(values) => {
              inviteUserHandler(values);
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form>
                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <Field
                      name="firstName"
                      as={Input}
                      placeholder="First Name"
                      error={touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                      fullWidth
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <Field
                      name="lastName"
                      as={Input}
                      placeholder="Last Name"
                      error={touched.lastName && !!errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                      fullWidth
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Field
                      name="email"
                      as={Input}
                      placeholder="Email"
                      type="email"
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      fullWidth
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Field
                      name="primaryPhoneNumber"
                      as={Input}
                      placeholder="Phone Number"
                      type="tel"
                      error={
                        touched.primaryPhoneNumber &&
                        !!errors.primaryPhoneNumber
                      }
                      helperText={
                        touched.primaryPhoneNumber && errors.primaryPhoneNumber
                      }
                      fullWidth
                    />
                  </div>

                  {/* Country Code Select */}
                  <div>
                    <Field
                      name="countryCode"
                      as={Select}
                      labelId="countryCode-label"
                      onValueChange={(countryCode: string) =>
                        setFieldValue("countryCode", countryCode)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Country Code" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="IN">India</SelectItem>
                        <SelectItem value="UAE">UAE</SelectItem>
                      </SelectContent>
                    </Field>
                    {touched.countryCode && errors.countryCode && (
                      <div className="text-red-700 text-[12px] pl-4">
                        {errors.countryCode}
                      </div>
                    )}
                  </div>

                  {/* Role Select */}
                  <div>
                    <Field
                      name="role"
                      as={Select}
                      labelId="role-label"
                      onValueChange={(role: string) =>
                        setFieldValue("role", role)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regional_admin">
                          Regional Admin
                        </SelectItem>
                      </SelectContent>
                    </Field>
                    {touched.role && errors.role && (
                      <div className="text-red-700 text-[12px] pl-4">
                        {errors.role}
                      </div>
                    )}
                  </div>
                </div>

                <DialogFooter className="mt-6">
                  <Button type="submit" variant="default" disabled={mutation.isPending}>
                    {mutation.isPending ? "Submitting" : "Submit"}
                  </Button>
                </DialogFooter>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteUserModal;
