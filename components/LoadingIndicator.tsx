import styled, { keyframes } from 'styled-components';

const LoadingIndicator = () => <Indicator />;

export default LoadingIndicator;

const rotation = keyframes` 0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}`;

const Indicator = styled.span`
    width: 48px;
    height: 48px;
    border: ${({ theme }) => `5px solid ${theme.offBlack}`};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
`;
