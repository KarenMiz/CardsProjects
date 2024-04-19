import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/loginSchema";
import Container from "@mui/material/Container";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";
import PageHeader from "../../component/PageHeader";
import { Navigate } from "react-router-dom";
import useUsers from "../hooks/useUser";
import { UseUser } from "../providers/UserProvider";




export default function LoginPage() {
  const { handleLogin } = useUsers();
  const { user } = UseUser();
  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialLoginForm, loginSchema, handleLogin);

  if (user) return <Navigate to={ROUTES.ROOT} replace />
  return (
    <Container>
      <PageHeader
        title="Welcome to Login page"
        subtitle="here you can log in"
      />
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="login"
          styles={{ maxWidth: "450px" }}
          to={ROUTES.ROOT}
          onSubmit={onSubmit}
          onReset={handleReset}
          validateForm={validateForm}
        >
          <Input
            label="email"
            name="email"
            type="email"
            error={errors.email}
            onChange={handleChange}
            data={data}
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={errors.password}
            onChange={handleChange}
            data={data}
          />
        </Form>
      </Container>
    </Container>
  );
}
