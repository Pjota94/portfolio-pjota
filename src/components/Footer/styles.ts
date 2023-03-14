import styled from "styled-components";

export const Container = styled.div`
  background: #2e3536;
  box-shadow: 4px 0px 32px rgba(0, 0, 0, 0.25);
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > p {
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    color: #ffffff;
  }

  > a {
    text-decoration: none;
    width: 33px;
    height: 30px;
    border-radius: 4px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2e3536;
    color: #ffffff;
  }

  > a:hover {
    background-color: #515656;
  }
`;
