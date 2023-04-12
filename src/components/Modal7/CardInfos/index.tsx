import { Container } from "./styles";
import logoCard from "../../../assets/Logos/logoMarvel.png";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";
import "animate.css";
const CardInfos = () => {
  const { setIsModal7 } = useContext(AuthMainContext);

  return (
    <Container className="animate__animated animate__fadeIn">
      <div className="div-close">
        <button onClick={() => setIsModal7(false)}>
          {" "}
          <CgClose />
        </button>
      </div>
      <img src={logoCard} alt="" />
      <p>
        Este é um projeto que lista todos os personagens e quadrinhos da marvel,
        fiz o uso da Api oficial da marvel para consumir os dados e utilizei o
        Figma para construir o Layout.
      </p>
      <h3>Ferramentas</h3>
      <ul>
        <li>React.Js</li>
        <li>TypeScript</li>
        <li>Styled-Components</li>
        <li>Swipes</li>
      </ul>
    </Container>
  );
};

export default CardInfos;
