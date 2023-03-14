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

export const DropName = styled.div`
  position: relative;
  &:hover span {
    opacity: 1;
    transition: 0.4s;
    color: black;
  }

  span {
    position: absolute;
    background-color: #ededed;
    padding: 4px;
    border-radius: 4px;
    font-size: 18px;
    top: 40px;
    left: 58px;
    opacity: 0;
    color: black;
    width: 50px;
    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      border-color: #ededed transparent;
      position: absolute;
      transform: rotate(180deg);
      left: 18px;
      top: -10px;
      color: black;
    }
  }

  a > button {
    border: none;
    background-color: transparent;
    font-size: 25px;
    color: #ffff;
  }
`;

export const DropApp = styled.div`
  position: relative;

  &:hover span {
    opacity: 1;
    transition: 0.4s;
    color: black;
  }

  span {
    position: absolute;
    background-color: #ededed;
    padding: 4px 0px;
    border-radius: 4px;
    font-size: 18px;
    top: 40px;
    left: -12px;
    opacity: 0;
    color: black;
    width: 50px;
    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      border-color: #ededed transparent;
      position: absolute;
      transform: rotate(180deg);
      left: 18px;
      top: -10px;
      color: black;
    }
  }

  a > button {
    border: none;
    background-color: transparent;
    font-size: 25px;
    color: #ffff;
  }
`;
