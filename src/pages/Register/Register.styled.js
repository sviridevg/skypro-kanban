import styled, { css } from "styled-components";
import { Hover01 } from "../../globalStyle.stiled";

export const RegisterWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.ModalBGColor};
`;

export const ContainerSignin = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    background-color: #ffffff;
  }
`;

export const ModalBlok = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.Modal};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.ModalBorder};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

export const ModalTtl = styled.div`
  & h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.ModalTtl};
  }
`;

export const ModalFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & input:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid ${({ theme }) => theme.ModalInputBorder};
  background-color: ${({ theme }) => theme.Modal};
  outline: none;
  padding: 10px 8px;

  & ::-moz-placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const FirstName = css`
  border-color: red;
`;

export const Login = css`
  border-color: red;
`;

export const PasswordFirst = css`
  border-color: red;
`;

export const ModalBtnEnter = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
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

  @media (max-width: 375px) {
    height: 40px;
  }

  & a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${Hover01}
`;

export const ModalFormGroup = styled.div`
  text-align: center;

  & p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  & a {
    text-decoration: underline;
  }
`;
