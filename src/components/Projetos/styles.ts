import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.5rem;
  margin-bottom: 90px;

  > p {
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #2e3536;
    text-align: center;
    margin-top: 43px;
    margin-bottom: 27px;
  }

  .box-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 18px;
    gap: 25px;
    max-width: 1080px;
  }

  @media (max-width: 775px) {
    .box-cards {
    }
  }

  @media (max-width: 768px) {
    padding-top: 4.5rem;
  }
`;
