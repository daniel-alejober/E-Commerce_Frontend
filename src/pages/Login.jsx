import React from "react";
import { mobil } from "../styles/responsive";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 1rem;
  ${mobil({ width: "90%" })}
`;
const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 1rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1rem;
  padding: 0.7rem;
  outline: none;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1.5rem 2rem;
  background-color: #008080;
  color: #fff;
  cursor: pointer;
  margin: 0 auto;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
