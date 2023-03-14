import { Container } from "./styles";
import logoCard from "../../../assets/Logos/burguer.svg";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";
import "animate.css";
const CardInfos = () => {
  const { setIsModal } = useContext(AuthMainContext);

  return (
    <Container className="animate__animated animate__fadeIn">
      <div className="div-close">
        <button onClick={() => setIsModal(false)}>
          {" "}
          <CgClose />
        </button>
      </div>
      <img src={logoCard} alt="" />
      <p>
        Este foi meu primeiro E-commerce feito com React.Js, o desafio era
        seguir 100% a estilização proposta pelo Figma e que não fosse possível
        adicionar o mesmo produto mais de uma vez.
      </p>
      <h3>Ferramentas</h3>
      <ul>
        <li>React.Js</li>
        <li>Styled-Components</li>
        <li>Axios</li>
      </ul>
    </Container>
  );
};

export default CardInfos;
