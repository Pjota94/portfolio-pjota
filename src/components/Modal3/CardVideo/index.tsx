import { Container } from "./styles";
import video from "../../../assets/random.mp4";
import "animate.css";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";

const CardVideo = () => {
  const { setIsModal3 } = useContext(AuthMainContext);
  return (
    <Container className="animate__animated animate__fadeIn">
      <video src={video} controls loop autoPlay muted></video>
      <div className="buttons">
        <a
          href="https://random-peach.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Projeto
        </a>
        <a
          target="_blank"
          href="https://github.com/Pjota94/desafio-sharenergy-2023-01"
          rel="noreferrer"
        >
          Repositório
        </a>
        <button onClick={() => setIsModal3(false)} className="botaoFechar">
          Fechar
        </button>
      </div>
    </Container>
  );
};

export default CardVideo;
