import styled from "styled-components";

export const Container = styled.div`
  width: 114px;
  height: 113px;
  border: 1px solid #000000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.2);
    transition: 300ms linear;
  }

  > img {
    width: 73px;
    height: 73px;
  }

  > span {
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;
    color: #000000;
    margin-top: 5px;
  }
`;
