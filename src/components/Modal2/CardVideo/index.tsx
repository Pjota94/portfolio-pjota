import { Container } from "./styles";
import video from "../../../assets/mks.mp4";
import "animate.css";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";

const CardVideo = () => {
  const { setIsModal2 } = useContext(AuthMainContext);
  return (
    <Container className="animate__animated animate__fadeIn">
      <video src={video} controls loop autoPlay muted></video>
      <div className="buttons">
        <a
          target="_blank"
          href="https://mks-frontend-challenge-react-pjota94.vercel.app/"
          rel="noreferrer"
        >
          Projeto
        </a>
        <a
          target="_blank"
          href="https://github.com/Pjota94/mks-frontend-challenge-react"
          rel="noreferrer"
        >
          Repositório
        </a>
        <button onClick={() => setIsModal2(false)} className="botaoFechar">
          Fechar
        </button>
      </div>
    </Container>
  );
};

export default CardVideo;
