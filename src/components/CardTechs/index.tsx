import { ITechs } from "../../interfaces";
import { Container } from "./styles";

const CardTechs = ({ logo, nome }: ITechs) => {
  return (
    <Container>
      <img src={logo} alt="" />
      <span>{nome}</span>
    </Container>
  );
};

export default CardTechs;
