import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}

`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Error = styled.p`
  margin-top: 16px;
  color: rgb(246, 92, 90);
`;

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover02 = css`
  &:hover {
    color: ${({ theme }) => theme.popUserButtonColor};
  }

  &::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const Hover03 = css`
  &:hover {
    background-color: #565eef;
    color: #ffffff;
    border: 1px solid #565eef;
  }

  &:hover a {
    color: #ffffff;
  }
`;

export const BtnBor = css`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;

  & a {
    color: #565eef;
  }
`;

export const BtnBg = css`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  & a {
    color: #ffffff;
  }
`;

export const Categories = css`
  margin-bottom: 20px;
`;

export const Status = css`
  margin-bottom: 11px;
`;

export const Hide = css`
  display: none;
`;

export const Subttl = css`
  color: ${({ theme }) => theme.PopExitTtlH2};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Orange = css`
  background-color: ${({ theme }) => theme.orangeBg};
  color: ${({ theme }) => theme.orangeColor};
`;

export const Green = css`
  background-color: ${({ theme }) => theme.greenBg};
  color: ${({ theme }) => theme.greenColor};
`;

export const Purple = css`
  background-color: ${({ theme }) => theme.purpleBg};
  color: ${({ theme }) => theme.purpleColor};
`;

export const Gray = css`
  background-color: ${({ theme }) => theme.grayBg};
  color: ${({ theme }) => theme.grayColor};
`;
