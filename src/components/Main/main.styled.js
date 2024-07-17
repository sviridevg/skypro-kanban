import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.body};
`;

export const MainBlock = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
`;
