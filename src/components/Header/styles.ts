import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 90px;
  background-color: #ededed;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  .div-buttons {
    margin-right: 191px;
  }

  .div-buttons > a > button {
    background: #2e3536;
    width: 135px;
    height: 42px;
    margin-right: 27px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 17px;
    line-height: 24px;
    color: #ffffff;
    font-weight: 700;
    text-decoration: none;
    border: none;
  }

  .div-buttons > button > a {
    font-size: 17px;
    line-height: 24px;
    color: #ffffff;
    font-weight: 700;
    text-decoration: none;
  }

  .div-buttons > a :hover {
    background-color: #adadad;
    color: #2e3536;
    border: 2px solid #2e3536;
  }

  .btn-menu {
    display: none;
  }

  @media (max-width: 985px) {
    .div-buttons {
      display: none;
    }

    .btn-menu {
      display: block;
      border: none;
      background-color: transparent;
      font-size: 35px;
      margin-right: 50px;
      margin-top: 5px;
    }
  }
`;
