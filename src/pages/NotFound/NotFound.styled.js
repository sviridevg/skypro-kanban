import styled from "styled-components";
import { Hover01 } from "../../globalStyle.stiled";


export const NouFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.body};
  padding-block: 30px;
  position: fixed;
  width: 100%;
  height: 100%;

  & h2 {
    margin-block: 15px;
    color: ${({ theme }) => theme.HeaderUserName};
  }

  & img {
    max-width: 40%;
  }

  & button {
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;

    a {
      color: #ffffff;
    }

    ${Hover01};
  }
`;
