import React from "react";
import { ContainerLogin, WrapperLogin } from "../styles/containers";
import { ButtonLogin } from "../styles/buttons";
import { InputForm, Form } from "../styles/inputs";
import { TitleLogin } from "../styles/text";

const Login = () => {
  return (
    <ContainerLogin>
      <WrapperLogin>
        <TitleLogin>SIGN IN</TitleLogin>
        <Form>
          <InputForm placeholder="username" />
          <InputForm placeholder="password" />
          <ButtonLogin>LOGIN</ButtonLogin>
        </Form>
      </WrapperLogin>
    </ContainerLogin>
  );
};

export default Login;
