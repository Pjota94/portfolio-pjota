import styled from "styled-components";

export const Container = styled.div`
  width: 316px;
  height: 228px;
  background: #2e3536;
  border-radius: 8px;

  :hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.2);
    transition: 300ms linear;
  }
  > img {
    width: 294px;
    height: 171px;
    border-radius: 8px 8px 0px 0px;
    margin-left: 11px;
    margin-top: 12px;
    cursor: pointer;
  }

  > img:hover {
    filter: initial;
  }

  .buttons-card {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }

  .buttons-card > a > button {
    border: none;
    background-color: transparent;
    font-size: 25px;
    color: #ffff;
  }

  .window {
    margin-right: 70px;
  }

  .git {
    margin-left: 70px;
  }

  @media (max-width: 410px) {
    :hover {
      -webkit-transform: scale(1.5);
      -ms-transform: scale(1.5);
      transform: scale(1);
      transition: 300ms linear;
    }
  }
`;
