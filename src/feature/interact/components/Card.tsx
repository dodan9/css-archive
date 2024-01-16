import { MouseEvent, useRef } from "react";
import { InteractCard, InteractFrame, InteractLight } from "../styles";

const Card = ({ lightType }: { lightType: "circle" | "line" }) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (!(frameRef.current && cardRef.current && lightRef.current)) return;

    const { x, y, width, height } = frameRef.current.getBoundingClientRect();

    const left = event.clientX - x;
    const top = event.clientY - y;
    const centerX = left - width / 2;
    const centerY = top - height / 2;
    const d = Math.sqrt(centerX ** 2 + centerY ** 2);

    cardRef.current.style.boxShadow = `
      ${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)
    `;

    cardRef.current.style.transform = `
      rotate3d(
        ${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg
      )
    `;

    if (lightType === "circle") {
      lightRef.current.style.backgroundImage = `
      radial-gradient(
        circle at ${left}px ${top}px, #ffffff8e, #ffffff00, #00000040
      )
    `;
    } else {
      const percentage = Math.min(Math.max((top / height) * 100, 0), 100);
      lightRef.current.style.backgroundImage = `
        linear-gradient(50deg, #ffffff8e, #ffffff00, #00000040, #ffffff00 ${
          percentage - 15
        }%, #ffffff8e ${percentage}%, #ffffff00 ${
        percentage + 15
      }%, #00000040, #ffffff00, #ffffff8e)
      `;
    }
  };

  const handleMouseLeave = () => {
    if (!(frameRef.current && cardRef.current && lightRef.current)) return;

    cardRef.current.style.boxShadow = "";
    cardRef.current.style.transform = "";
    lightRef.current.style.backgroundImage = "";
  };

  return (
    <InteractFrame
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <InteractCard ref={cardRef}>
        <InteractLight ref={lightRef} />
      </InteractCard>
    </InteractFrame>
  );
};

export default Card;
