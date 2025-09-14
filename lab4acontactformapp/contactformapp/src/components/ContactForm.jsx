import React, { useState } from "react";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import { Box } from "@mui/material";

const ContactForm = () => {
  //state to manage form values;
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  //state to manage form errors
  const [errors, setErrors] = useState({});

  //handle input value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //Validate form values
  const validate = () => {
    let tempErrors = {};
    if (!values.name) tempErrors.name = "Name is required";
    if (!values.email) tempErrors.email = "Email is requied";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      tempErrors.email = "Email is not valid";
    if (!values.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  //Handle form submission
  const handleSubmit = (e) => 
{
    e.preventDefault();
    if (validate()) 
    {
      //simulate an api call
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setValues({ name: "", email: "", message: "" });
      }, 1000);
    }
  };

return (
    <form onSubmit={handleSubmit}>
        <Box mb={2}>
            <TextInput name="name" lable="name" value={values.name} onChange={handleChange}
            error={!!errors.name} helperText={errors.name}/>
        </Box>  
        <Box mb={2}>
            <TextInput name="email" label="Email" value={values.email} onChange={handleChange}
            error={!!errors.email} helperText={errors.email}/>
        </Box>
<Box mb={2}>
    <TextInput name="message" label="Message" multilinerows={4} value={values.message}
    onChange={handleChange} error={!!errors.message}/>
</Box>
<SubmitButton>Submit</SubmitButton>
</form>
);


};
export default ContactForm;