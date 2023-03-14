import styled from "styled-components";

export const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1062px) {
    flex-direction: column;
  }
`;
