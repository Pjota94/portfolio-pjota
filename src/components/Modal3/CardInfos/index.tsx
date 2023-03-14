import { Container } from "./styles";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";
import "animate.css";
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
      <h1>Calculadora de Antecipação</h1>
      <p>
        Essa é uma Calculadora de antecipação de recebimentos, nela passamos o
        valor, o número de parcelas e a taxa MDR da maquininha e ela simula o
        valor que irá receber de acordo com o dia escolhido.
      </p>
      <h3>Ferramentas</h3>
      <ul>
        <li>React.Js</li>
        <li>TypeScript</li>
        <li>Styled-Components</li>
        <li>Axios</li>
      </ul>
    </Container>
  );
};

export default CardInfos;
