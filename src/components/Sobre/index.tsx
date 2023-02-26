import { Container } from "./styles";
import CV from "../../assets/cv.pdf";

const Sobre = () => {
  return (
    <Container id="sobre">
      <div className="div-sobre">
        <h2>Sobre mim</h2>
        <p>
          Desenvolvedor Front-end com experiência em JavaScript, React.js,
          TypeScript, Styled-Components, Stitches, Redux, Node.js e consumo de
          APIs REST. Apaixonado pelo que faz, sente prazer ao ver uma aplicação
          concluída, tem um código bem estruturado e sempre seguindo boas
          práticas. Trabalhou em diversos projetos em grupo gerenciados por
          Metodologias Ágeis. Forjado na academia da Kenzie, onde obteve
          experiência como monitor de Javascript e React.
        </p>
        <a download="CV Paulo Junior" href={CV}>
          <button>Download CV</button>
        </a>
      </div>
      <div className="div-techs"></div>
    </Container>
  );
};

export default Sobre;
