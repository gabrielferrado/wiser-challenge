import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  @media (max-width: 430px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  align-self: center;
  width: 16rem;
  margin-left: 7rem;

  @media (max-width: 430px) {
    position: relative;
    background: var(--background);
    border-radius: 0.5rem;
    padding: 0 3rem 3rem 3rem;
    width: 19.4375rem;
    margin-top: 40%;
    margin-left: 0;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 700px) {
    width: 100%;
  }

  @media (max-width: 430px) {
    position: absolute;
    background: transparent;
    margin-top: 90%;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-style: normal;
  font-size: 2.5rem;
  line-height: 3rem;
  color: var(--secondary);

  @media (max-width: 430px) {
    font-size: 1.5rem;
    line-height: normal;
    text-align: center;
  }
`;

export const Subtitle = styled.h3`
  font-weight: 600;
  font-style: normal;
  font-size: 1rem;
  line-height: 1.25rem;
  color: var(--lightpurple);

  @media (max-width: 430px) {
    font-size: 0.75rem;
    text-align: center;
  }
`;

export const ForgotPasswordText = styled.span`
  font-weight: 400;
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--lightpurple);

  @media (max-width: 420px) {
    color: var(--white);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
