import React from "react";
import LoginImage from "@/components/LoginImage";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/reducers/rootReducer";
import { useForm } from "react-hook-form";
import {
  ActionsContainer,
  Container,
  ForgotPasswordText,
  Form,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";

const MIN_PASSWORD_DIGITS = 7;

const LoginForm: React.FC = () => {
  const { users, loggedUser } = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setError } = useForm({
    mode: "all",
    reValidateMode: "onBlur",
  });

  const validateEmail = (data: string) => {
    const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return REGEX.test(data);
  };

  const handleLogin = (data: { email: string; password: string }) => {
    const foundUser = users?.find((el) => el.email === data.email);

    if (!foundUser) return alert("Nenhum usuário encontrado!");

    if (foundUser && foundUser.password !== data.password)
      return setError("email", { message: "Usuário ou senha incorreta" });

    alert("Logado com sucesso!");

    return dispatch({ type: "LOG_IN", payload: foundUser });
  };

  const render = () => {
    if (loggedUser)
      return (
        <Title>
          Olá, <strong>{loggedUser.name}</strong> seja bem-vindo!
        </Title>
      );

    return (
      <>
        <Title>Olá, seja bem-vindo!</Title>
        <Subtitle>Para acessar a plataforma, faça seu login.</Subtitle>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Input
            label="e-mail"
            name="email"
            type="email"
            placeholder="user.name@mail.com"
            inputRef={register({
              required: "Digite o seu email",
              validate: (value) =>
                validateEmail(value) || "Digite um e-mail válido",
            })}
            error={errors.email?.message}
            required
          />
          <Input
            label="senha"
            name="password"
            type="password"
            placeholder="*******"
            inputRef={register({
              required: "Digite sua senha",
              minLength: {
                value: MIN_PASSWORD_DIGITS,
                message: "Sua senha deve conter no mínimo oito dígitos",
              },
            })}
            error={errors.password?.message}
            required
          />
          <ActionsContainer>
            <Button type="submit" />
            <ForgotPasswordText>
              Esqueceu seu login ou senha?
            </ForgotPasswordText>
            <ForgotPasswordText>
              Clique <a href="#">aqui</a>
            </ForgotPasswordText>
          </ActionsContainer>
        </Form>
      </>
    );
  };

  return (
    <Wrapper>
      <LoginImage />
      <Container id="container">{render()}</Container>
    </Wrapper>
  );
};

export default LoginForm;
