import styled from "styled-components";

export const Container = styled.div`
  .div-sobre {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 9.5rem;
  }

  .div-sobre > h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #2e3536;
    margin-top: 36px;
    margin-bottom: 25px;
    /* text-align: center; */
  }

  .div-sobre > p {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    width: 55%;
    color: #000000;
  }

  .div-sobre > a > button {
    background: #f8f9fa;
    border: 1px solid #2e3536;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* border-radius: 8px; */
    width: 160px;
    height: 42px;
    margin-top: 35px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #2e3536;
  }

  .div-sobre > a > button:hover {
    background-color: #adadad;
    color: #2e3536;
  }

  @media (max-width: 768px) {
    .div-sobre {
      padding-top: 4.5rem;
    }
  }
`;
