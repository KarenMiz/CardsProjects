import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/signupSchema";
import Container from "@mui/material/Container";
import SignupForm from "../components/SignupForm";

const handleSubmit = (data) => {
  console.log(data);
};

export default function SignupPage() {
  const { data, errors, handleChangeCheckBox, handleReset, validateForm, onSubmit } =
    useForm(initialSignupForm, signupSchema, handleSubmit);
  console.log(data);
  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignupForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title={"register form"}
        errors={errors}
        data={data}
        onInputChange={handleChangeCheckBox}
      />
    </Container>
  );
}