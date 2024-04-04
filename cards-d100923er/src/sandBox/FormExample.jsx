import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import Joi, { Boolean } from "joi";

const schema = {
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2).max(10),
};

export default function FormExample() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState({});

  const validateProperty = (name, value) => {
    //create object with this only name and value
    const obj = { [name]: value };
    //create joi object with this only name and the validation
    const generateSchema = Joi.object({ [name]: schema[name] });
    //do the validation
    const { error } = generateSchema.validate(obj);
    //return the error.details[0].message OR null
    return error ? error.details[0].message : null;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const errorMessage = validateProperty(name, value);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    } else {
      setErrors((prev) => {
        let obj = { ...prev };
        delete obj[name];
        return obj;
      });
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const joiSchema = Joi.object(schema);
    const validateObj = joiSchema.validate(formData);
    console.log(validateObj);
  };

  console.log(errors);

  return (
    <Box>
      <Box sx={{ m: 10 }}>
        <TextField
          label="first name"
          value={formData.firstName}
          name="firstName"
          onChange={handleChange}
          helperText={errors.firstName}
          error={Boolean(errors.firstName)}
        />
        <TextField
          label="last name"
          value={formData.lastName}
          name="lastName"
          onChange={handleChange}
          helperText={errors.lastName}
          error={Boolean(errors.lastName)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  );
}