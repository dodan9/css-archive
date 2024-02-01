import { useEffect, useRef, useState } from "react";
import { ScrollContainer, ScrollContent, ScrollSection } from "../styles";
import ScrollFlipCard from "../components/ScrollFlipCard";

const ScrollFlip = () => {
  const childrenCount = 4;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const stikyRef = useRef<HTMLDivElement | null>(null);

  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

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
    if (scrollRef.current) {
      setStep((end - start) / (childrenCount * 2));
    }
  }, [start, end]);

  return (
    <ScrollContainer>
      <ScrollContent height={50} />
      <ScrollContent height={500} ref={scrollRef}>
        <ScrollSection ref={stikyRef}>
          {Array.from({ length: childrenCount }).map((_, index) => {
            const cardStart = start + step * index;
            const cardEnd = cardStart + step * (childrenCount + 1);
            return (
              <ScrollFlipCard
                index={index + 1}
                key={index}
                start={start + step * index}
                end={cardEnd}
                step={step}
              />
            );
          })}
        </ScrollSection>
      </ScrollContent>
    </ScrollContainer>
  );
};

export default ScrollFlip;
