import CardInfos from "./CardInfos";
import CardVideo from "./CardVideo";
import { Conatiner } from "./styles";

const ModalCard = () => {
  return (
    <Conatiner>
      <CardVideo />
      <CardInfos />
    </Conatiner>
  );
};

export default ModalCard;
