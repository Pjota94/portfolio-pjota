import styled from "styled-components";

export const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 1062px) {
    .modal-box {
      flex-direction: column;
    }
  }
`;
