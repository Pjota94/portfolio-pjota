import { Container } from "./styles";
import logoCard from "../../../assets/Logos/NuKenziePreto.png";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";
import "animate.css";
const CardInfos = () => {
  const { setIsModal5 } = useContext(AuthMainContext);

  return (
    <Container className="animate__animated animate__fadeIn">
      <div className="div-close">
        <button onClick={() => setIsModal5(false)}>
          {" "}
          <CgClose />
        </button>
      </div>
      <img src={logoCard} alt="" />
      <p>
        Este é o NuKenzie, uma aplicação que funciona como um gestor financeiro,
        nele é possível adicionar suas despesas e ganhos, tendo calculado
        automaticamente seu saldo.
      </p>
      <h3>Ferramentas</h3>
      <ul>
        <li>React.Js</li>
        <li>Styled-Components</li>
      </ul>
    </Container>
  );
};

export default CardInfos;
