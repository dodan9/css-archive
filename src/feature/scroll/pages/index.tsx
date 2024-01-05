import { ParallaxContainer, ParallaxItem } from "../styles/scrollStyles";

const Scroll = () => {
  return (
    <>
      <ParallaxContainer>
        {Array.from({ length: 3 }).map((_, index) => {
          return <ParallaxItem key={index}>{index}</ParallaxItem>;
        })}
      </ParallaxContainer>
    </>
  );
};

export default Scroll;
