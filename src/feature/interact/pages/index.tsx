import Card from "../components/Card";
import { CardList } from "../styles/interactStyles";

const Interact = () => {
  return (
    <CardList>
      <Card lightType="circle" />
      <Card lightType="line" />
    </CardList>
  );
};

export default Interact;
