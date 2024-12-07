import { MenuItem, Select } from "@mui/material";

export const CustomSelect = ({
  label,
  labelId,
  placeholder,
  id,
  name,
  value,
  onChange,
  children,
}) => {
  return (
    <div className="flex flex-col gap-[5px]">
      {label && (
        <label htmlFor={labelId} className="text-textPrimary text-xs font-semibold">
          {label}
        </label>
      )}
      <Select
        labelId={labelId}
        id={id}
        name={name}
        size="small"
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiSelect-select": {
            color: value === "" ? "#C0C0C0" : "black",
          },
        }}
        displayEmpty
      >
         <MenuItem value={""} disabled sx={{"&.Mui-selected": {
            backgroundColor: "#fff",
            color: "#C0C0C0"
          }}}>
                {placeholder}
              </MenuItem>
        {children}
      </Select>
    </div>
  );
};
