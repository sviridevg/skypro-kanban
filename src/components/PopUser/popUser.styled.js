import styled from "styled-components";
import { Hover01, Hover03 } from "../../globalStyle.stiled";

export const PopExit = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopExitblock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.PopExitblockBgColor};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.PopExitblockBorderColor};
  box-shadow: 0px 4px 67px -12px ${({ theme }) => theme.PopExitblockBoxShadow};
`;

export const PopExitTtl = styled.div`
  & h2 {
    text-align: center;
    color: ${({ theme }) => theme.PopExitTtlH2};
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`;

export const PopExitForm = styled.form``;
export const PopExitFormGroup = styled(PopExitForm)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PopExitButtonYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;

  & a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${Hover01};
`;

export const PopExitButtonNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid ${({ theme }) => theme.PopExitButtonNo};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  & a {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.PopExitButtonNo};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${Hover03};
`;
