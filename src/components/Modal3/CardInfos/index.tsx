import { Container } from "./styles";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";
import "animate.css";
import logo from "../../../assets/Logos/random.png";
const CardInfos = () => {
  const { setIsModal3 } = useContext(AuthMainContext);

  return (
    <Container className="animate__animated animate__fadeIn">
      <div className="div-close">
        <button onClick={() => setIsModal3(false)}>
          {" "}
          <CgClose />
        </button>
      </div>
      <img src={logo} alt="" />
      <p>
        Esta é uma aplicação que me fez praticar o uso de API REST, nesse
        desafio eu tinha que criar um figma e fazer Requisições para 3 tipos de
        APIs diferentes.
      </p>
      <h3>Ferramentas</h3>
      <ul>
        <li>React.Js</li>
        <li>TypeScript</li>
        <li>Styled-Components</li>
        <li>Axios</li>
        <li>React-Litties</li>
      </ul>
    </Container>
  );
};

export default CardInfos;
