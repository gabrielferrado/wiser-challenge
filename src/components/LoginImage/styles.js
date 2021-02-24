import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 60%;
  position: relative;

  @media (max-width: 800px) {
    width: 19.5rem;
  }

  @media (max-width: 430px) {
    position: absolute;
    top: 0;
    width: 100%;
    height: 50vh;
  }
`;

export const Image = styled.div`
  background-image: linear-gradient(
      360deg,
      #130525 0%,
      rgba(105, 57, 153, 0) 100%
    ),
    url("/shutterstock_1220809918.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  height: 100%;
  width: 100%;
`;
