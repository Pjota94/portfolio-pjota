import styled from "styled-components";

export const Container = styled.div`
  width: 485px;
  height: 466px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 4px 4px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    margin: 30px 0px 30px 0px;
  }

  p {
    width: 351px;
  }

  h3 {
    width: 351px;
    margin-top: 20px;
  }

  ul {
    width: 309px;
    margin-top: 20px;
    list-style: circle;
  }

  .div-close {
    width: 485px;
    display: flex;
    justify-content: flex-end;
  }

  .div-close > button > svg {
    font-size: 25px;
  }

  .div-close > button {
    border: none;
    background: transparent;
    margin-right: 12px;
    margin-top: 10px;
  }

  @media (max-width: 1062px) {
    width: 539px;
    height: 237px;
    border-radius: 0px 0px 4px 4px;

    img {
      margin: 10px 0px 12px 0px;
    }

    p {
      font-size: 12px;
    }

    h3 {
      font-size: 15px;
      margin-top: 9px;
    }

    ul {
      font-size: 13px;
      margin-top: 6px;
    }

    .div-close {
      display: none;
    }
  }

  @media (max-width: 562px) {
    width: 424px;
  }

  @media (max-width: 471px) {
    width: 316px;

    p {
      width: 275px;
    }

    h3 {
      width: 275px;
      font-size: 14px;
    }

    ul {
      width: 234px;
    }

    h1 {
      font-size: 16px;
    }
  }
`;
