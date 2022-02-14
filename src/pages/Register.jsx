import React from "react";
import { mobil } from "../styles/responsive";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1rem;
  padding: 0.7rem;
  outline: none;
`;
const Agreement = styled.span`
  font-size: 1.2rem;
  margin: 1rem;
  text-align: center;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1.5rem 2rem;
  background-color: #008080;
  color: #fff;
  cursor: pointer;
  margin: 0 auto;
  ${mobil({ width: "60%" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
