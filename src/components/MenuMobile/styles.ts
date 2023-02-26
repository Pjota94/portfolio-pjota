import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 80px;
  box-shadow: rgb(169 161 161 / 73%) -1px 20px 20px;

  ul {
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;
    justify-content: center;
    padding-left: 18px;
    width: 100%;
    list-style: none;
    background-color: #adadade0;
  }

  li {
    font-size: 25px;
    font-weight: 900;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 24px;
    font-weight: 900;
    height: 34px;
  }
  a:hover {
    border-bottom: 4px solid;
  }

  @media (min-width: 985px) {
    display: none;
  }
`;
