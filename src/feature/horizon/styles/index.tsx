import styled from "@emotion/styled";

const size = 100;
const gap = 20;

export const HorizonContainer = styled.div`
  background-color: rgba(255, 255, 0, 0.4);
  border-radius: 20px;

  max-height: 1280px;
  width: ${size + gap * 2}px;
  overflow-y: scroll;
  overflow-x: hidden;
  transform: rotate(-90deg) translateY(-${size + gap * 2}px);
  transform-origin: right top;

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  ::-webkit-scrollbar-button {
    width: 2px;
    height: 2px;
  }
`;

export const HorizonItem = styled.div`
  width: ${size}px;
  height: ${size}px;
  margin: ${gap}px;
  transform: rotate(90deg);
  background-color: rgba(255, 0, 255, 0.4);
`;
