import { Container } from "./styles";
import logoCard from "../../../assets/Logos/mks.svg";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";
import "animate.css";
const CardInfos = () => {
  const { setIsModal2 } = useContext(AuthMainContext);

  return (
    <Container className="animate__animated animate__fadeIn">
      <div className="div-close">
        <button onClick={() => setIsModal2(false)}>
          {" "}
          <CgClose />
        </button>
      </div>
      <img src={logoCard} alt="" />
      <p>
        Este foi um desafio técnico onde eu tive que criar um E-commerce e
        seguir o figma proposto utilizando o Redux Toolkit como gerenciador de
        estado global.
      </p>
      <h3>Ferramentas</h3>
      <ul>
        <li>React.Js</li>
        <li>TypeScript</li>
        <li>Styled-Components</li>
        <li>Axios</li>
        <li>Redux Toolkit</li>
      </ul>
    </Container>
  );
};

export default CardInfos;
