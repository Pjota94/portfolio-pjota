import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.5rem;

  > h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #2e3536;
    margin-top: 36px;
    margin-bottom: 25px;
  }

  .div-tecs {
    max-width: 501px;
    height: 311px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  @media (max-width: 580px) {
    .div-tecs {
      max-width: auto;
      height: auto;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    padding-top: 4.5rem;
  }
`;
