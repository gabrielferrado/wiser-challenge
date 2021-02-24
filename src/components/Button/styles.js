import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  width: 100%;
  cursor: pointer;
  background: linear-gradient(
    267.79deg,
    var(--secondary) 0%,
    var(--primary) 99.18%
  );
  box-shadow: 0 0.625rem 1.5625rem var(--lightpurple);
  border-radius: 0.5rem;
  padding: 0.875rem;
  color: var(--white);
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  border: none;

  span {
    font-weight: 600;
    font-style: normal;
    line-height: 1.25rem;
    font-size: 1rem;
    text-transform: uppercase;
  }

  @media (max-width: 420px) {
    box-shadow: none;
  }
`;
