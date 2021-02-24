import React, { LegacyRef } from "react";
import { ErrorLabel, Label, TextInput, Wrapper } from "./styles";

interface Input extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error?: boolean;
  inputRef?: LegacyRef<HTMLInputElement>;
}

const Input: React.FC<Input> = ({
  label,
  type,
  placeholder,
  name,
  error,
  value,
  onChange,
  onBlur,
  inputRef,
  ...rest
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <TextInput
        name={name}
        type={type}
        placeholder={placeholder}
        error={!!error}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={inputRef}
        {...rest}
      />
      <ErrorLabel error={!!error}>{error};</ErrorLabel>
    </Wrapper>
  );
};

export default Input;
