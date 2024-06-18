import styled from "styled-components";
import { Hover01, Hover02, Hover03 } from "../../globalStyle.stiled";

export const Header = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.headerBg};
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  a {
    color: #ffffff;
  }

  ${Hover01};
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.HeaderUserName};

  ${Hover02};

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({ theme }) => theme.HeaderUserName};;
    border-bottom: 1.9px solid ${({ theme }) => theme.HeaderUserName};;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;

export const HeaderPopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({ theme }) => theme.popUserBg};
  box-shadow: ${({ theme }) => theme.popUserShadow};
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUserSet = styled.div`
  & button {
    width: 72px;
    height: 30px;
    background: transparent;
    color: ${({ theme }) => theme.popUserButtonColor};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.popUserButtonColor};;

    ${Hover03};
  }

  & a {
    color: ${({ theme }) => theme.popUserButtonColor};;
  }
`;

export const PopUserSetName = styled.p`
  color: ${({ theme }) => theme.popUserText};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetThem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & p {
    color: ${({ theme }) => theme.popUserText};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  & input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  & input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }
  & input:checked[type="checkbox"]::before {
    left: 12px;
  }
`;
