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
    align-items: flex-start;
    gap: 44px;
    justify-content: center;
    padding-left: 93px;
    width: 100%;
    list-style: none;
    background-color: ghostwhite;
  }

  li {
    font-size: 25px;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 24px;
    font-weight: 900;
    height: 34px;
  }
  a:hover {
    color: rgba(46, 53, 54, 0.54);
  }

  @media (min-width: 985px) {
    display: none;
  }

  @media (max-width: 587px) {
    ul {
      padding-left: 37px;
    }
  }
`;
