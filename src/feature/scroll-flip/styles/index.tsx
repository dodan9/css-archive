import styled from "@emotion/styled";

export const ScrollContainer = styled.div`
  height: 600vh;
  margin-top: -40px;
  padding-top: 40px;
`;

export const ScrollContent = styled.div<{ height: number }>`
  height: ${({ height }) => height}vh;
`;

export const ScrollSection = styled.section`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const FlipCard = styled.div<{ deg: number }>`
  height: 50vh;
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

const FlipFront = styled(CardSurface)`
  background: linear-gradient(
    50deg,
    #ffffff00,
    #00000040,
    #ffffff8e,
    #00000040,
    #ffffff00
  );
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid lightgray;

  & > div {
    background-color: rgba(255, 255, 255, 0.8);
    mix-blend-mode: screen;
  }
`;

const FlipFrontContent = styled.div`
  border-radius: 0 1rem 0 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FlipFrontHeader = styled.div`
  width: 70%;
  text-align: center;
  border-radius: 1rem 1rem 0 0;
  align-self: baseline;
  padding: 0.3rem 0;
`;

const FlipFrontFooter = styled.div`
  text-align: center;
  border-radius: 0 0 1rem 1rem;
  width: 70%;
  align-self: flex-end;
  padding: 0.3rem 0;
  font-size: 0.8rem;
`;

const FlipBack = styled(CardSurface)`
  background-color: #d9d9d9;
  transform: rotateY(180deg);
`;

export const Flip = {
  Card: FlipCard,
  Front: FlipFront,
  Back: FlipBack,
};

export const Front = {
  Content: FlipFrontContent,
  Header: FlipFrontHeader,
  Footer: FlipFrontFooter,
};
