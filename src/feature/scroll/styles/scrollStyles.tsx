import styled from "@emotion/styled";

export const ParallaxContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow: hidden auto;
  perspective: 1px;
`;

export const ParallaxItem = styled.div`
  position: absolute;
  inset: 0;
  text-align: center;
  font-size: 50px;
  &:nth-of-type(1) {
    transform: translateZ(0);
    width: 100%;
    height: 100rem;

    background-color: #fca3a3;
  }

  &:nth-of-type(2) {
    transform: translateZ(-1px);
    top: 10rem;

    width: 100%;
    height: 50rem;

    background-color: #90d690;
  }

  &:nth-of-type(3) {
    transform: translateZ(-2px);
    top: 20rem;

    width: 100%;
    height: 50rem;

    background-color: #afafff;
  }
`;
