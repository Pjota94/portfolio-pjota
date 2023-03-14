import styled from "styled-components";

export const Container = styled.div`
  width: 539px;
  height: 467px;
  background: #2e3536;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px 0px 0px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  video {
    width: 475.51px;
    height: 247.1px;
    margin-top: 50px;
    border-radius: 4px;
  }

  a {
    background: #adadad;
    padding: 6px;
    margin-right: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 17px;
    line-height: 24px;
    color: #2e3536;
    font-weight: 700;
    text-decoration: none;
    border: 1px solid black;
  }

  a:hover {
    background: #d9d9d9;
  }

  .buttons {
    margin-top: 96px;
    width: 475.51px;
  }

  .botaoFechar {
    display: none;
  }

  @media (max-width: 1062px) {
    width: 539px;
    height: 230px;
    border-radius: 4px 4px 0px 0px;

    video {
      height: 184.1px;
      margin-top: 9px;
    }

    a {
      font-size: 15px;
      padding: 4px;
    }

    .buttons {
      margin-top: 7px;
      width: 361.51px;
    }

    .botaoFechar {
      border: 1px solid black;
      background: #adadad;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 17px;
      line-height: 24px;
      color: #2e3536;
      font-weight: 700;
      width: 71px;
      height: 27px;
      margin-left: 98px;
      display: initial;
    }

    .botaoFechar:hover {
      background: #d9d9d9;
    }
  }

  @media (max-width: 562px) {
    width: 424px;

    video {
      width: 324.51px;
      /* height: 247.1px; */
    }

    .buttons {
      margin-top: 5px;
      width: 328.51px;
      margin-bottom: 5px;
    }

    .botaoFechar {
      margin-left: 66px;
    }
  }

  @media (max-width: 471px) {
    width: 316px;
    height: 204px;

    video {
      width: 291.51px;
    }

    .buttons {
      margin-top: 13px;
      width: 289.51px;
    }

    .botaoFechar {
      margin-left: 27px;
    }
  }
`;
