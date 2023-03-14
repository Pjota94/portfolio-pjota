import { Container } from "./styles";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  return (
    <Container>
      <span></span>
      <p>Obrigado por acessar!</p>
      <a href="#home">
        <FiChevronUp />
      </a>
    </Container>
  );
};

export default Footer;
