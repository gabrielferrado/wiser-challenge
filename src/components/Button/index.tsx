import React from "react";
import { Wrapper } from "./styles";

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  onClick,
  type,
}) => {
  return (
    <Wrapper type={type} onClick={onClick}>
      <span>Entrar</span>
    </Wrapper>
  );
};

export default Button;
