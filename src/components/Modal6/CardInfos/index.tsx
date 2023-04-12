import { Container } from "./styles";
import logoCard from "../../../assets/Logos/JustTalk.png";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";
import "animate.css";
const CardInfos = () => {
  const { setIsModal6 } = useContext(AuthMainContext);

  return (
    <Container className="animate__animated animate__fadeIn">
      <div className="div-close">
        <button onClick={() => setIsModal6(false)}>
          {" "}
          <CgClose />
        </button>
      </div>
      <img src={logoCard} alt="" />
      <p>
        Aplicação que faz consumo de uma api de Posts e Comentários onde cada
        postagem tem comentários ligados a ela, totalmente responsiva e com
        Layout original.
      </p>
      <h3>Ferramentas</h3>
      <ul>
        <li>React.Js</li>
        <li>TypeScript</li>
        <li>Styled-Components</li>
        <li>Vite</li>
        <li>Frame-Motion</li>
      </ul>
    </Container>
  );
};

export default CardInfos;
