import { Container } from "./styles";
import logoCard from "../../../assets/Logos/kenzieHub.svg";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";
import "animate.css";
const CardInfos = () => {
  const { setIsModal4 } = useContext(AuthMainContext);

  return (
    <Container className="animate__animated animate__fadeIn">
      <div className="div-close">
        <button onClick={() => setIsModal4(false)}>
          {" "}
          <CgClose />
        </button>
      </div>
      <img src={logoCard} alt="" />
      <p>
        Este é um dos meus projetos favoritos, um lugar onde os devs podem
        adicionar suas Skills e seus Projetos, a aplicação conta com Cadastro e
        Login de usuários e opções para Criação, Atualização e Deleção de
        Projetos e Tecnologias.
      </p>
      <h3>Ferramentas</h3>
      <ul>
        <li>React.Js</li>
        <li>TypeScript</li>
        <li>Yup</li>
        <li>Styled-Components</li>
        <li>Axios</li>
      </ul>
    </Container>
  );
};

export default CardInfos;
