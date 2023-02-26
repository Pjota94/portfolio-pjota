import CardTechs from "../CardTechs";
import { Container } from "./styles";
import javascript from "../../assets/javascript.png";
import ts from "../../assets/typescript.png";
import redux from "../../assets/redux.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import styled from "../../assets/styled.png";
import docker from "../../assets/docker.png";
import figma from "../../assets/figma.png";
import postgres from "../../assets/postgres.png";
import stitches from "../../assets/stitches.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";

const Techs = () => {
  return (
    <Container id="techs">
      <h1>TECNOLOGIAS</h1>
      <div className="div-tecs">
        <CardTechs logo={html} nome="HTML 5" />
        <CardTechs logo={css} nome="CSS 3" />
        <CardTechs logo={javascript} nome="Javascript" />
        <CardTechs logo={ts} nome="Typescript" />
        <CardTechs logo={react} nome="React" />
        <CardTechs logo={node} nome="Node" />
        <CardTechs logo={redux} nome="Redux" />
        <CardTechs logo={styled} nome="Styled-Components" />
        <CardTechs logo={docker} nome="Docker" />
        <CardTechs logo={figma} nome="Figma" />
        <CardTechs logo={stitches} nome="Stitches" />
        <CardTechs logo={postgres} nome="PostgreSQL" />
      </div>
    </Container>
  );
};

export default Techs;
