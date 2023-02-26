/* eslint-disable react/jsx-no-comment-textnodes */
import { Container } from "./styles";
import perfil from "../../assets/self.jpeg";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "animate.css";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Front-End Developer"],
    loop: 0,
  });

  return (
    <Container id="home">
      <div className="auxiliar">
        <img
          className="animate__animated animate__fadeIn animate__slow"
          src={perfil}
          alt=""
        />
        <div className="div-name">
          <p className="name">{`<Paulo Júnior>`}</p>
          <p className="profissao">
            //{text}
            <Cursor />
          </p>
        </div>
      </div>
      <div className="buttons-home animate__animated animate__fadeIn animate__slow">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=+5583999479372&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os"
        >
          <button>
            <BsWhatsapp />
          </button>
        </a>
        <a href="https://github.com/Pjota94" target={"_blank"} rel="noreferrer">
          <button>
            <BsGithub />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/paulo-j%C3%BAnior-6673a5199/"
          target={"_blank"}
          rel="noreferrer"
        >
          <button>
            <BsLinkedin />
          </button>
        </a>
      </div>
    </Container>
  );
};

export default Home;
