import { useEffect, useState } from "react";
import { Flip, Front } from "../styles";

const ScrollFlipCard = ({
  index,
  start,
  end,
  step,
}: {
  index: number;
  start: number;
  end: number;
  step: number;
}) => {
  const [flipDeg, setFlipDeg] = useState<number>(180);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > start && scrollY < end) {
        setFlipDeg(180 - ((scrollY - start) / (end - start)) * 180);
        // setFlipDeg(180 - ((scrollY - (end - step)) / step) * 180);
      } else if (scrollY < start) {
        setFlipDeg(180);
      } else {
        setFlipDeg(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [start, end]);

  return (
    <Flip.Card deg={flipDeg}>
      <Flip.Front>
        <Front.Header>Card{index}</Front.Header>

        <Front.Content></Front.Content>

        <Front.Footer>2024-{index}</Front.Footer>
      </Flip.Front>
      <Flip.Back />
    </Flip.Card>
  );
};

export default ScrollFlipCard;
