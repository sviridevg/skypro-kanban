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

export const Loading = styled.p`
  text-align: center;
  margin-top: 40px;
  animation: ${LoadingAnimation} 3s ease 0s 1 normal forwards;
`;
