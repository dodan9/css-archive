import { CarouselCard } from "./CarouselCard";
import globe from "@src/assets/images/sdk.png";

export const Carousel = ({ radius = 1.4, count = 8 }) => {
  return Array.from({ length: count }, (_, i) => {
    return (
      <CarouselCard
        key={i}
        url={globe}
        position={[
          Math.sin((i / count) * Math.PI * 2) * radius,
          0,
          Math.cos((i / count) * Math.PI * 2) * radius,
        ]}
        rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
      />
    );
  });
};
