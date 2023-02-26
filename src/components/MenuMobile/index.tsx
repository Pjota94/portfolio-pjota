import { Container } from "./styles";
import "animate.css";

const MenuMobile = () => {
  return (
    <Container className="animate__animated animate__bounceInDown">
      <ul>
        <a href="#sobre">
          <li>Sobre</li>
        </a>
        <a href="#techs">
          <li>Tecnologias</li>
        </a>
        <a href="#projetos">
          <li>Projetos</li>
        </a>
      </ul>
    </Container>
  );
};

export default MenuMobile;
