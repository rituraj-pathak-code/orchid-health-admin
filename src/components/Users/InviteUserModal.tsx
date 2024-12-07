import { CustomSelect } from "../ui/CustomSelect";
import NewModal, { ModalBody, ModalHeader } from "../ui/NewModal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { UserService } from "../../services/userServices";

// Validation Schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  primaryPhoneNumber: Yup.string().required("Phone Number is required"),
  countryCode: Yup.string().required("Country Code is required"),
  role: Yup.string().required("Role is required"),
});

const InviteUserModal = ({ open, onClose }) => {

    const inviteUserHandler = async (payload) => {
        console.log(payload)
        const res = await UserService.inviteUser(payload);
        console.log(res)
    }
  return (
    <NewModal open={open} onClose={onClose}>
      <ModalHeader onClose={onClose}>Head</ModalHeader>
      <ModalBody>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            primaryPhoneNumber: "",
            countryCode: "",
            role: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            inviteUserHandler(values)
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <Field
                    name="firstName"
                    as={TextField}
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
                    as={TextField}
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
                    as={TextField}
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
                    as={TextField}
                    placeholder="Phone Number"
                    type="tel"
                    error={touched.primaryPhoneNumber && !!errors.primaryPhoneNumber}
                    helperText={touched.primaryPhoneNumber && errors.primaryPhoneNumber}
                    fullWidth
                  />
                </div>

                {/* Country Code Select */}
                <div>
                  <Field
                    name="countryCode"
                    as={CustomSelect}
                    labelId="countryCode-label"
                    onChange={(e) =>
                      setFieldValue("countryCode", e.target.value)
                    }
                  >
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="UAE">UAE</MenuItem>
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
                    as={CustomSelect}
                    labelId="role-label"
                    onChange={(e) => setFieldValue("role", e.target.value)}
                  >
                    <MenuItem value="regional_admin">Regional Admin</MenuItem>
                  </Field>
                  {touched.role && errors.role && (
                    <div className="text-red-700 text-[12px] pl-4">
                      {errors.role}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-between mt-4">
                <Button onClick={onClose}>Close</Button>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </NewModal>
  );
};

export default InviteUserModal;
