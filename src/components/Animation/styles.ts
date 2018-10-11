import styled, { keyframes } from 'react-emotion';

export const Wrapper = styled.div<{ marginTop: number; }>`
  perspective: 1000px;
  perspective-origin: 50% 50%;
  padding-top: 80px;
  margin-top: ${({ marginTop }) => marginTop}px
`;

const rotate = keyframes`
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }

  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

export const Cube = styled.div<{ time: number; }>`
  margin: auto;
  position: relative;
  height: 200px;
  width: 200px;
  transform-style: preserve-3d;
  animation: ${rotate} ${({ time }) => time}s infinite linear;

  div {
    position: absolute;
    padding: 10px;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    opacity: 1;
    background-color: transparent;
    border: solid 1px #000;
  }
`;

export const Front = styled.div`
  transform: translateZ(100px);
`;

export const Back = styled.div`
  transform: translateZ(-100px) rotateY(180deg);
`;

export const Right = styled.div`
  transform: rotateY(-270deg) translateX(100px);
  transform-origin: top right;
`;

export const Left = styled.div`
  transform: rotateY(270deg) translateX(-100px);
  transform-origin: center left;
`;

export const Top = styled.div`
  transform: rotateX(-270deg) translateY(-100px);
  transform-origin: top center;
`;

export const Bottom = styled.div`
  transform: rotateX(270deg) translateY(100px);
  transform-origin: bottom center;
`;
