import { useEffect, useRef, useState } from "react";
import {
  FlipBack,
  FlipCard,
  FlipFront,
  ScrollContainer,
  ScrollContent,
  ScrollSection,
} from "../styles";

const ScrollFlip = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const stikyRef = useRef<HTMLDivElement | null>(null);

  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [flipDeg, setFlipDeg] = useState<number>(180);

  useEffect(() => {
    const scrollDiv = scrollRef.current;
    const stikyDiv = stikyRef.current;

    if (scrollDiv && stikyDiv) {
      setStart(scrollDiv.offsetTop);
      setEnd(
        scrollDiv.offsetTop + scrollDiv.offsetHeight - stikyDiv.offsetHeight
      );
    }
  }, [scrollRef, stikyRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > start && scrollY < end) {
        setFlipDeg(180 + ((scrollY - start) / (end - start)) * 180);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [start, end]);

  return (
    <ScrollContainer>
      <ScrollContent height={50} />
      <ScrollContent height={500} ref={scrollRef}>
        <ScrollSection ref={stikyRef}>
          <FlipCard deg={flipDeg}>
            <FlipFront>Card1</FlipFront>
            <FlipBack />
          </FlipCard>

          <FlipCard deg={flipDeg}>
            <FlipFront>Card2</FlipFront>
            <FlipBack />
          </FlipCard>

          <FlipCard deg={flipDeg}>
            <FlipFront>Card3</FlipFront>
            <FlipBack />
          </FlipCard>

          <FlipCard deg={flipDeg}>
            <FlipFront>Card4</FlipFront>
            <FlipBack />
          </FlipCard>
        </ScrollSection>
      </ScrollContent>
    </ScrollContainer>
  );
};

export default ScrollFlip;
