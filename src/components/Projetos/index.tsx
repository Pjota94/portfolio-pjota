import Card from "../Card";
import { Container } from "./styles";
import mks from "../../assets/mks.png";
import random from "../../assets/random.png";
import kenzieHub from "../../assets/kenzieHub.png";
import nukenzie from "../../assets/nukenzie.png";
import hamburgueria from "../../assets/hamburgueria.png";
import justTalk from "../../assets/justTalk.png";
import marvel from "../../assets/marvel.png";

const Projetos = () => {
  return (
    <Container id="projetos">
      <p>Projetos</p>
      <div className="box-cards">
        <Card
          id="1"
          imagem={mks}
          git={"https://github.com/Pjota94/mks-frontend-challenge-react"}
          vercel={"https://mks-frontend-challenge-react-pjota94.vercel.app/"}
        />
        <Card
          id="6"
          imagem={justTalk}
          git={"https://github.com/Pjota94/justTalk"}
          vercel={"https://just-talk-pjota94.vercel.app/"}
        />
        <Card
          id="7"
          imagem={marvel}
          git={"https://github.com/Pjota94/marvel-comics"}
          vercel={"https://marvel-comics-pjota94.vercel.app/"}
        />
        <Card
          id="2"
          imagem={random}
          git={"https://github.com/Pjota94/desafio-sharenergy-2023-01"}
          vercel={"https://random-peach.vercel.app/"}
        />
        <Card
          id="3"
          imagem={kenzieHub}
          git={
            "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-formulario-de-cadastro-pjota94"
          }
          vercel={
            "https://react-entrega-s2-formulario-de-cadastro-pjot-git-4b52ca-pjota94.vercel.app/"
          }
        />
        <Card
          id="4"
          imagem={nukenzie}
          git={
            "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-pjota94"
          }
          vercel={
            "https://react-entrega-s1-nu-kenzie-pjota94-git-master-pjota94.vercel.app/"
          }
        />
        <Card
          id="5"
          imagem={hamburgueria}
          git={
            "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-pjota94"
          }
          vercel={
            "https://react-entrega-s1-hamburgueria-da-kenzie-pjota94.vercel.app/"
          }
        />
      </div>
    </Container>
  );
};

export default Projetos;
