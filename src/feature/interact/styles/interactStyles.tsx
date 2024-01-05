import styled from "@emotion/styled";

import cardImg from "@src/assets/images/card_100025.png";

const cardWidth = 300;

export const InteractFrame = styled.div`
  width: ${cardWidth}px;
  aspect-ratio: 1 / 1.58;
  transition: transform 200ms;

  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
`;

export const InteractCard = styled.div`
  border-radius: ${cardWidth / 20}px;

  width: 100%;
  height: 100%;
  background-color: rgb(96, 123, 192);
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  transition-property: transform, box-shadow;
  transition-duration: 250ms, 50ms;

  transition-timing-function: ease-out;

  background: url(${cardImg}) no-repeat center / 100%;
`;

export const InteractLight = styled.div`
  border-radius: ${cardWidth / 20}px;

  position: absolute;
  width: 100%;
  height: 100%;
`;

export const CardList = styled.div`
  padding: ${cardWidth / 5}px;
  gap: ${cardWidth / 5}px;

  display: flex;
  flex-wrap: wrap;
`;
