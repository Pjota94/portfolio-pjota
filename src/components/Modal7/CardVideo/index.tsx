import { Container } from "./styles";
import video from "../../../assets/marvel.mp4";
import "animate.css";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";

const CardVideo = () => {
  const { setIsModal7 } = useContext(AuthMainContext);
  return (
    <Container className="animate__animated animate__fadeIn">
      <video src={video} controls loop autoPlay muted></video>
      <div className="buttons">
        <a
          href="https://marvel-comics-pjota94.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Projeto
        </a>
        <a
          target="_blank"
          href="https://github.com/Pjota94/marvel-comics"
          rel="noreferrer"
        >
          Repositório
        </a>
        <button onClick={() => setIsModal7(false)} className="botaoFechar">
          Fechar
        </button>
      </div>
    </Container>
  );
};

export default CardVideo;
