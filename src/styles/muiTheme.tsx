import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#d4d4d4",
            },
            "&:hover fieldset": {
              borderColor: "#bdbdbd",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#bdbdbd",
              borderWidth: "1px",
            },
          },
          "& .MuiInputBase-input": {
            fontSize: "12px",
            color: "#333",
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small", // Set default size for Select
      },
      styleOverrides: {
        root: {
          // Style for the root of the Select
          "& .MuiSelect-select": {
            padding: "7px", // Padding for the select area
            fontSize: "12px", // Default text size
            color: "#333",
          },
          "& .MuiSelect-select:empty": {
            color: "red", // Color when value is empty
          },
          // Add this for the outlined variant
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d4d4d4", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#bdbdbd", // Border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#bdbdbd", // Border color when focused
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#333", // Default text color for unselected items
          fontSize: "14px",
        },
      },
    },
  },
});
