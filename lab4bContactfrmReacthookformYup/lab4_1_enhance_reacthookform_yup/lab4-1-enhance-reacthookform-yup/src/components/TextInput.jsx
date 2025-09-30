import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = ({ label, error, helperText, ...props }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      error={!!error}
      helperText={helperText}
      {...props}
    />
  );
};
export default TextInput;

