import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
	0%,
	50%,
	100% {
		opacity: 1;
	}

	25%,
	75% {
		opacity: 0;
	}
`;
export const LoadingBG = styled.div`
  background-color:${({ theme }) => theme.LoadingBG};
  margin: -15px 0;
`;
export const Loading = styled.p`
  height: 100vh;
  text-align: center;
  padding-top: 40px;
  animation: ${LoadingAnimation} 3s ease 0s 1 normal forwards;
`;
