import { Container } from "./styles";
import video from "../../../assets/justTalk.mp4";
import "animate.css";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";

const CardVideo = () => {
  const { setIsModal6 } = useContext(AuthMainContext);
  return (
    <Container className="animate__animated animate__fadeIn">
      <video src={video} controls loop autoPlay muted></video>
      <div className="buttons">
        <a
          href="https://just-talk-pjota94.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Projeto
        </a>
        <a
          target="_blank"
          href="https://github.com/Pjota94/justTalk"
          rel="noreferrer"
        >
          Repositório
        </a>
        <button onClick={() => setIsModal6(false)} className="botaoFechar">
          Fechar
        </button>
      </div>
    </Container>
  );
};

export default CardVideo;
