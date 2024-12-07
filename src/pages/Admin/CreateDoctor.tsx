import { MenuItem, Select, TextField, Button } from "@mui/material";
import { useState } from "react";
import { CustomSelect } from "../../components/ui/CustomSelect";
import Input from "../../components/ui/Input";
import FormContainer from "../../components/Containers/FormContainer";

const CreateDoctor = () => {
  const [country, setCountry] = useState("");
  const handleChange = (e) => {
    console.log("XXXX");
    setCountry(e.target.value);
  };
  return (
    <div className="flex flex-col gap-4 m-4">
      <FormContainer header={"Personal Information"} grid={3}>
        <div className="grid grid-cols-4 gap-x-6 gap-y-2">
          <Input id={"name"} label={"Name"} placeholder="Enter Name" />
          <Input id={"email"} label={"Email"} placeholder="Enter Email" />
          <Input
            id={"phone"}
            label={"Phone No."}
            placeholder="Enter Phone No."
          />
          <CustomSelect
            labelId="gender"
            id="gender"
            placeholder={"Select Gender"}
            label={"Gender"}
            value={""}
            onChange={handleChange}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </CustomSelect>

          <CustomSelect
            labelId="doctorType"
            id="doctorType"
            placeholder={"Select Doctor Type"}
            value={""}
            label={"Doctor Type"}
            onChange={handleChange}
          >
            <MenuItem value={"independent"}>Independent</MenuItem>
            <MenuItem value={"organisation"}>With Organisation</MenuItem>
          </CustomSelect>
          <Input
            id={"specialization"}
            label={"Specialization"}
            placeholder="Enter Specialization"
          />
        </div>
      </FormContainer>

      <FormContainer header={"Address"} grid={3}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <Input
            id={"addressLineOne"}
            label={"Address Line One"}
            placeholder="Enter Address Line One"
          />
          <Input
            id={"addressLineTwo"}
            label={"Address Line Two"}
            placeholder="Enter Address Line Two"
          />
        </div>
        <div className="grid grid-cols-4 gap-x-6 gap-y-2 mt-2">
          <Input id={"city"} label={"City"} placeholder="Enter City" />
          <Input id={"state"} label={"State"} placeholder="Enter State" />

          <CustomSelect
            labelId="country"
            id="country"
            value={country}
            onChange={handleChange}
            label={"Country"}
            placeholder={"Select Country"}
          >
            <MenuItem value={"india"}>India</MenuItem>
            <MenuItem value={"uae"}>UAE</MenuItem>
          </CustomSelect>
          <Input id={"pincode"} label={"Pincode"} placeholder="Enter Pincode" />
        </div>
      </FormContainer>
      <div className="flex justify-end">
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
};

export default CreateDoctor;
