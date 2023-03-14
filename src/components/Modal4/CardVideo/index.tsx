import { Container } from "./styles";
import video from "../../../assets/kenziehub.mp4";
import "animate.css";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";

const CardVideo = () => {
  const { setIsModal4 } = useContext(AuthMainContext);
  return (
    <Container className="animate__animated animate__fadeIn">
      <video src={video} controls loop autoPlay muted></video>
      <div className="buttons">
        <a
          href="https://react-entrega-s2-formulario-de-cadastro-pjot-git-4b52ca-pjota94.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Projeto
        </a>
        <a
          target="_blank"
          href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-formulario-de-cadastro-pjota94"
          rel="noreferrer"
        >
          Repositório
        </a>
        <button onClick={() => setIsModal4(false)} className="botaoFechar">
          Fechar
        </button>
      </div>
    </Container>
  );
};

export default CardVideo;
