import styled from "@emotion/styled";

export const ScrollContainer = styled.div`
  height: 600vh;
  margin-top: -40px;
  padding-top: 40px;
  background-color: rgba(20, 20, 20, 0.3);
`;

export const ScrollContent = styled.div<{ height: number }>`
  height: ${({ height }) => height}vh;
`;

export const ScrollSection = styled.section`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FlipCard = styled.div<{ deg: number }>`
  height: 40vh;
  aspect-ratio: 1 / 1.58;
  transform-style: preserve-3d;
  transform: perspective(100vw) rotateY(${({ deg }) => deg}deg);
`;

const CardSurface = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  backface-visibility: hidden;
`;

export const FlipFront = styled(CardSurface)`
  background-color: white;
`;
export const FlipBack = styled(CardSurface)`
  background-color: black;
  transform: rotateY(180deg);
`;
