import Card from "../Card";
import { Container } from "./styles";
import mks from "../../assets/mks.png";
import calculadora from "../../assets/calculadora.png";
import kenzieHub from "../../assets/kenzieHub.png";
import nukenzie from "../../assets/nukenzie.png";
import hamburgueria from "../../assets/hamburgueria.png";

const Projetos = () => {
  return (
    <Container id="projetos">
      <p>Projetos</p>
      <div className="box-cards">
        <Card
          imagem={mks}
          git={"https://github.com/Pjota94/mks-frontend-challenge-react"}
          vercel={"https://mks-frontend-challenge-react-pjota94.vercel.app/"}
        />
        <Card
          imagem={calculadora}
          git={"https://github.com/Pjota94/calculadora"}
          vercel={"https://calculadora-eta-two.vercel.app/"}
        />
        <Card
          imagem={kenzieHub}
          git={
            "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-formulario-de-cadastro-pjota94"
          }
          vercel={
            "https://react-entrega-s2-formulario-de-cadastro-pjot-git-4b52ca-pjota94.vercel.app/"
          }
        />
        <Card
          imagem={nukenzie}
          git={
            "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-pjota94"
          }
          vercel={
            "https://react-entrega-s1-nu-kenzie-pjota94-git-master-pjota94.vercel.app/"
          }
        />
        <Card
          imagem={hamburgueria}
          git={
            "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-pjota94"
          }
          vercel={
            "https://react-entrega-s1-hamburgueria-da-kenzie-pjota94.vercel.app/"
          }
        />
        {/* <Card imagem={""} git={""} vercel={""} /> */}
      </div>
    </Container>
  );
};

export default Projetos;
