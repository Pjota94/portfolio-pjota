import { Container } from "./styles";
import video from "../../../assets/nukenzie.mp4";
import "animate.css";
import { useContext } from "react";
import { AuthMainContext } from "../../../context/MainContext";

const CardVideo = () => {
  const { setIsModal5 } = useContext(AuthMainContext);
  return (
    <Container className="animate__animated animate__fadeIn">
      <video src={video} controls loop autoPlay muted></video>
      <div className="buttons">
        <a
          href="https://react-entrega-s1-nu-kenzie-pjota94-git-master-pjota94.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Projeto
        </a>
        <a
          target="_blank"
          href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-pjota94"
          rel="noreferrer"
        >
          Repositório
        </a>
        <button onClick={() => setIsModal5(false)} className="botaoFechar">
          Fechar
        </button>
      </div>
    </Container>
  );
};

export default CardVideo;
