import { Container } from "./styles";
import "animate.css";

const Logo = () => {
  return (
    <Container className="animate__animated animate__flipInX">
      <a href="home">{`<PJ>`}</a>
    </Container>
  );
};

export default Logo;
