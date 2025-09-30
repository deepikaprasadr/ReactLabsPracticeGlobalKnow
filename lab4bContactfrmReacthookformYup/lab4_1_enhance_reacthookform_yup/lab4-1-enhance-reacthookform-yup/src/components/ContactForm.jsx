import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validationSchema"; //Import the validation schema
import TextInput from "./TextInput"; //Custom TextInput component
import SubmitButton from "./SubmitButton"; //Custom SubmitButton component
import { Box } from "@mui/material";

//Explanation of mode:"onBlur" - Validation will trigger on the blur event.
//this tells react-hook-for to trigger validation when an input field loses focus (onBlur event)
//validation happens when the user clicks away or presses the tab key  from a field

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",// Trigger validation on field blur (focus out)
  });


const onSubmit = (data) => {
  alert(JSON.stringify(data, null, 2));
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Box mb={2}>
      <TextInput
        {...register("name")}
        label="Name"
        error={!!errors.name}
        helperText={errors?.name?.message}
      />
    </Box>

    <Box mb={2}>
      <TextInput
        {...register("email")}
        label="Email"
        error={!!errors.email}
        helperText={errors?.email?.message}
      />
    </Box>
<Box mb={2}>
      <TextInput
        {...register("message")}
        label="Message"
        multiline rows={4}    
        error={!!errors.message}
        helperText={errors?.message?.message}
      />
    </Box>
    <SubmitButton>Submit</SubmitButton>
  </form>
);
};
export default ContactForm;