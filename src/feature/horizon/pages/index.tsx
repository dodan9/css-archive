import { HorizonContainer, HorizonItem } from "../styles/horizonStyles";

const Horizon = () => {
  return (
    <HorizonContainer>
      {Array.from({ length: 20 }, (_, index) => {
        return <HorizonItem key={index}>horizon{index}</HorizonItem>;
      })}
    </HorizonContainer>
  );
};

export default Horizon;
