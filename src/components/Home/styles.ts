import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.5rem;

  .auxiliar {
    display: flex;
    align-items: center;
    margin-bottom: 53px;
    margin-top: 150px;
    width: 870px;
  }

  img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 330px;
    width: 231px;
    height: 241px;
    margin-right: 77px;
  }

  .div-name {
  }

  .name {
    font-weight: 700;
    font-size: 64px;
    line-height: 76px;
    color: #2e3536;
  }

  .profissao {
    font-weight: 700;
    font-size: 49px;
    line-height: 58px;
    color: rgba(46, 53, 54, 0.54);
  }

  .buttons-home {
    display: flex;
    margin-left: -620px;
  }

  .buttons-home > a > button {
    background: #2e3536;
    border-radius: 4px;
    width: 55px;
    height: 42px;
    color: #ffff;
    border: none;
    font-size: 25px;
    margin-right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttons-home > a > button:hover {
    background-color: #adadad;
    color: #2e3536;
    border: 2px solid #2e3536;
  }

  @media (max-width: 920px) {
    .auxiliar {
      flex-direction: column;
    }

    img {
      margin-right: 0;
    }

    .name {
      font-size: 50px;
    }

    .profissao {
      font-size: 34px;
    }

    .buttons-home {
      width: 100%;
      margin-left: 0;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 890px) {
    .auxiliar {
      width: auto;
    }
  }

  @media (max-width: 442px) {
    .name {
      font-size: 40px;
    }

    .profissao {
      font-size: 26px;
    }
  }

  @media (max-width: 768px) {
    padding-top: 0.5rem;

    .auxiliar {
      flex-direction: column;
      margin-bottom: 23px;
      margin-top: 116px;
    }
  }
`;
