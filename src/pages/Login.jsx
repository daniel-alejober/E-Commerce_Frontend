import React, { useState } from "react";
import Alert from "../components/Alert";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { ContainerLogin, WrapperLogin } from "../styles/containers";
import { ButtonLogin } from "../styles/buttons";
import { InputForm, Form } from "../styles/inputs";
import { TitleLogin, StyledLink } from "../styles/text";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [stylesAlert, setStylesAlert] = useState({
    bg: "",
    msg: "",
  });
  /*
   *Vamos a usar el dispatch para poder pasarle los datos al redux,
   *ya que userRedux esta globalmente podemos usar su estado inicial pero ahora
   * ya contienen datos actualizados segun sea el caso de exito o fracaso */
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  console.log(error);
  const handleClick = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setErrors(true);
      setStylesAlert({
        bg: "error",
        msg: "All inputs are required",
      });
      return;
    }
    setErrors(false);
    /*le estamos pasando el dispatch y el user como parametro */
    login(dispatch, { username, password });
    if (error) {
      setErrors(true);
      setStylesAlert({
        bg: "error",
        msg: "Something went wrong...",
      });
      return;
    }
    setErrors(false);
  };

  return (
    <ContainerLogin>
      <WrapperLogin>
        <TitleLogin>SIGN IN</TitleLogin>
        <Form>
          {errors && <Alert msg={stylesAlert.msg} bg={stylesAlert.bg} />}
          <InputForm
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputForm
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonLogin onClick={handleClick} disabled={isFetching}>
            LOGIN
          </ButtonLogin>
          <StyledLink to="#">Do not you remember the password?</StyledLink>
          <StyledLink to="/register">Create a new account</StyledLink>
        </Form>
      </WrapperLogin>
    </ContainerLogin>
  );
};

export default Login;
