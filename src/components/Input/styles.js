import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextInput = styled.input`
  height: 3rem;
  background: transparent;
  font-size: 0.75rem;
  border: 1px solid
    ${({ error }) => (error ? "var(--error)" : "var(--lightpurple)")};
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 1rem;
  color: var(--secondary);
  text-transform: lowercase;
  justify-content: center;
  align-items: center;

  ::placeholder {
    color: var(--lightpurple);
    font-size: 0.625rem;
    font-family: Montserrat, sans-serif;
  }
`;

export const Label = styled.span`
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5rem;
  color: var(--secondary);
  margin-left: 0.5rem;
`;

export const ErrorLabel = styled.span`
  display: ${({ error }) => (error ? "block" : "none")};
  font-size: 0.625rem;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5rem;
  color: var(--error);
  margin-left: 0.5rem;
`;
